import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProductDetailById } from "../../api/ProductService";
import { loadingStore } from "../../store/isLoadingStore";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../../components/carousel/EmblaCarousel";
import { Box, Chip, IconButton, Rating, Typography } from "@mui/material";
import { useProductCartStore } from "../../store/productCartStore";
import NormalButton from "../../components/button/NormalButton";
import {
  AddRounded,
  ArrowBackRounded,
  RemoveRounded,
  RemoveShoppingCart,
} from "@mui/icons-material";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { setBarLoading } = loadingStore();

  const { products, setProduct } = useProductCartStore();

  const { data } = useQuery({
    queryKey: ["get-product-details"],
    queryFn: async () => {
      setBarLoading(true);
      const productDetails = await getProductDetailById(Number(id));
      setBarLoading(false);
      return productDetails;
    },
  });

  const cartProduct = products.find((p: Product) => p.id === data?.id);
  const quantity = cartProduct ? cartProduct.qty : 0;

  const handleRemoveFromCart = () => {
    setProduct(products.filter((p: Product) => p.id !== data.id));
  };

  const handleAddToCart = () => {
    setProduct([...products, { id: data.id, qty: 1 }], new Date().getTime());
  };

  const handleIncreaseQty = () => {
    if (cartProduct) {
      setProduct(
        products.map((p: Product) =>
          p.id === data?.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    }
  };

  const handleDecreaseQty = () => {
    if (cartProduct && cartProduct.qty > 1) {
      setProduct(
        products.map((p: Product) =>
          p.id === data?.id ? { ...p, qty: p.qty - 1 } : p
        )
      );
    }
  };

  return (
    <>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackRounded />
      </IconButton>
      {data && (
        <Box className="flex space-x-10">
          <Box className="w-3/5">
            {data?.attachments && (
              <>
                <EmblaCarousel slides={data?.attachments} options={OPTIONS} />
              </>
            )}
          </Box>
          <Box className="w-2/5">
            <Typography variant="h4" component="h1" fontWeight="700">
              {data.name}
            </Typography>
            <Chip label={data.category_name} color="tertiary" size="small" />
            <Typography paragraph>{data.description}</Typography>
            <Box className="flex items-center space-x-2 my-3">
              <Rating name="read-only" value={data.average_rating} readOnly />{" "}
              <Typography
                marginBottom={0}
                paragraph
              >{`(${data.average_rating})`}</Typography>
            </Box>
            <Typography variant="h5" component="h1" fontWeight="700" mt={2}>
              ${data.price}
            </Typography>

            {cartProduct ? (
              <Box className="flex items-center space-x-3 my-4">
                <NormalButton
                  text=""
                  icon={RemoveRounded}
                  type="contained"
                  onClick={handleDecreaseQty}
                  disable={quantity <= 1}
                />
                <Typography variant="h6" component="div">
                  {quantity}
                </Typography>
                <NormalButton
                  text=""
                  icon={AddRounded}
                  type="contained"
                  onClick={handleIncreaseQty}
                />
              </Box>
            ) : (
              <NormalButton
                text="Add To Cart"
                type="contained"
                onClick={handleAddToCart}
                sx={{ my: 2 }}
              />
            )}

            {cartProduct && (
              <NormalButton
                text="Remove"
                type="contained"
                icon={RemoveShoppingCart}
                onClick={handleRemoveFromCart}
              />
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductDetail;
