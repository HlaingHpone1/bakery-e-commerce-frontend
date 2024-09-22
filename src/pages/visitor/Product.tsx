import { loadingStore } from "../../store/isLoadingStore";
import { useQuery } from "@tanstack/react-query";
import { getAllProductUser } from "../../api/ProductService";
import { Grid } from "@mui/material";

import ProductCard from "../../components/cards/ProductCard";

const Product = () => {
  const { setBarLoading } = loadingStore();

  const { data = [] } = useQuery<ProductCard[]>({
    queryKey: ["product-list-user"],
    queryFn: async () => {
      setBarLoading(true);
      const response = await getAllProductUser();
      if (response.data.code === 200) {
        setBarLoading(false);
        return response.data.data;
      }
      setBarLoading(false);
      return [];
    },
  });

  return (
    <Grid container>
      {data.length > 0 &&
        data.map((product: ProductCard, i: number) => {
          return (
            <Grid item key={i} lg={3} md={4} sm={6} xs={12} p={1}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Product;
