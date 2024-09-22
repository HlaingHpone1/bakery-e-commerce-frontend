import {
  Box,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  Paper,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useProductCartStore } from "../../store/productCartStore";
import NormalButton from "../../components/button/NormalButton";
import { Delete } from "@mui/icons-material";
import { useFormik } from "formik";
import { useEffect } from "react";
import FormInput from "../../components/form/FormInput";
import { Radio } from "@mui/material";
import { userStore } from "../../store/userStore";
import { AddToCartOrderValidationSchema } from "../../validation/AddToCartOrderValidationSchema";

const AddToCart = () => {
  const { products, setProduct } = useProductCartStore();

  const { userData } = userStore();

  const time = new Date().getTime();

  // Increase product quantity
  const handleIncreaseQty = (productId: number) => {
    setProduct(
      products.map((p: Product) =>
        p.id === productId ? { ...p, qty: p.qty + 1 } : p
      ),
      new Date().getTime()
    );
  };

  // Decrease product quantity
  const handleDecreaseQty = (productId: number) => {
    setProduct(
      products.map((p: Product) =>
        p.id === productId && p.qty > 0 ? { ...p, qty: p.qty - 1 } : p
      ),
      time
    );
  };

  const handleRemoveProduct = (productId: number) => {
    setProduct(
      products.filter((p: Product) => p.id !== productId),
      time
    );
  };

  // Calculate total price based on quantity
  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.qty;
  }, 0);

  useEffect(() => {
    if (products) {
      setFieldValue("products", products);
      setFieldValue("total_price", totalPrice);
    }
  }, [products]);

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: {
      phone: userData?.phone,
      region: "",
      address: userData?.address ?? undefined,
      payment: undefined,
      total_price: undefined,
      note: "",
      products: [],
    },
    validationSchema: AddToCartOrderValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Grid
        container
        sx={{
          py: 3,
          minHeight: "calc(100vh - 75px)",
        }}
      >
        <Grid item md={7} xs={12} pr={1} mb={2}>
          <Paper
            elevation={16}
            sx={{
              mb: 3,
              p: 2.5,

              borderRadius: 2,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              textAlign="center"
              mb={3}
              fontWeight={700}
            >
              Delivery Information
            </Typography>
            <Grid container>
              <Grid item xs={6} pr={1}>
                <FormInput
                  name="phone"
                  label="Phone"
                  required={true}
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.phone}
                  touch={touched.phone}
                  sx={{
                    marginBottom: "15px",
                  }}
                />
                <FormInput
                  name="address"
                  label="Address"
                  required={true}
                  value={values.address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.address}
                  touch={touched.address}
                  row={3}
                  sx={{
                    marginBottom: "15px",
                  }}
                />
              </Grid>
              <Grid item xs={6} pl={1}>
                <FormInput
                  name="region"
                  label="Region"
                  required={true}
                  value={values.region}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.region}
                  touch={touched.region}
                  sx={{
                    marginBottom: "15px",
                  }}
                />
                <FormInput
                  name="note"
                  label="Note"
                  value={values.note}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.note}
                  touch={touched.note}
                  row={3}
                  sx={{
                    marginBottom: "15px",
                  }}
                />
              </Grid>
            </Grid>
          </Paper>

          <Paper
            elevation={16}
            sx={{
              p: 2.5,

              borderRadius: 2,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              textAlign="center"
              mb={3}
              fontWeight={700}
            >
              Payment Method
            </Typography>
            <Grid container>
              <Grid item md={12} pr={1}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{
                    ".MuiButtonBase-root.MuiRadio-root  .Mui-checked": {
                      color: "#000",
                    },
                  }}
                >
                  <FormControlLabel
                    value={1}
                    checked={Number(values.payment) === 1}
                    control={<Radio size="small" />}
                    label="Cash on Delivery"
                    name="payment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormControlLabel
                    checked={Number(values.payment) === 2}
                    value={2}
                    control={<Radio size="small" />}
                    label="POS on Delivery"
                    name="payment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormControlLabel
                    value={3}
                    checked={Number(values.payment) === 3}
                    control={<Radio size="small" />}
                    label="Online Payment"
                    name="payment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </RadioGroup>
                {touched.payment && errors.payment ? (
                  <FormHelperText
                    sx={{
                      color: "#d32f2f",
                      marginLeft: "13px !important",
                    }}
                  >
                    {errors.payment}
                  </FormHelperText>
                ) : null}
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item md={5} xs={12} pl={1}>
          <Paper
            elevation={16}
            sx={{
              p: 2.5,

              height: "100%",

              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              textAlign="center"
              mb={3}
              fontWeight={700}
            >
              Order Summary
            </Typography>
            {products.length === 0 ? (
              <Typography
                variant="h6"
                component="h2"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                No products in the cart
              </Typography>
            ) : (
              <>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="column"
                  sx={{
                    height: "calc(100% - 70px)",
                  }}
                >
                  <Box>
                    {products.map((product: Product) => (
                      <Box key={product.id} mb={3}>
                        <Box display="flex" mb={2} gap={2}>
                          <Box
                            component="img"
                            src={product.image}
                            alt={product.name}
                            sx={{
                              width: "30%",
                              height: "30%",
                              borderRadius: 1,
                            }}
                          />
                          <Box>
                            <Typography
                              component="h2"
                              variant="h5"
                              fontWeight={700}
                            >
                              {product.name}
                            </Typography>
                            <Typography
                              component="h2"
                              variant="h6"
                              fontWeight={700}
                            >
                              $ {product.price}
                            </Typography>
                          </Box>
                        </Box>

                        <Box display="flex" alignItems="center" gap={2}>
                          <NormalButton
                            text="-"
                            type="contained"
                            onClick={() => handleDecreaseQty(product.id)}
                            disable={product.qty <= 0}
                          />
                          <Typography variant="h6" component="span">
                            {product.qty}
                          </Typography>
                          <NormalButton
                            text="+"
                            type="contained"
                            onClick={() => handleIncreaseQty(product.id)}
                          />
                          {product.qty === 0 && (
                            <IconButton
                              onClick={() => handleRemoveProduct(product.id)}
                              aria-label="remove product"
                            >
                              <Delete />
                            </IconButton>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  <Divider />
                  <Box>
                    <Box display="flex" justifyContent="space-between" mb={2}>
                      <Typography variant="h6" component="h2">
                        Total Price
                      </Typography>
                      <Typography variant="h6" component="h2" fontWeight={700}>
                        $ {totalPrice.toFixed(2)}
                      </Typography>
                    </Box>

                    {/* Confirm Button */}
                    <NormalButton
                      text="Confirm Purchase"
                      type="contained"
                      onClick={handleSubmit}
                    />
                  </Box>
                </Box>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default AddToCart;
