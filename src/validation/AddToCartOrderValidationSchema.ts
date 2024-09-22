import * as Yup from "yup";

export const AddToCartOrderValidationSchema = Yup.object().shape({
  phone: Yup.number().required("Phone no is required"),
  region: Yup.string().required("Region is required"),
  address: Yup.string().required("Address is required"),
  payment: Yup.number().required("Plz Select your payment"),
  total_price: Yup.string(),
  note: Yup.string().nullable(),
  products: Yup.array(),
});
