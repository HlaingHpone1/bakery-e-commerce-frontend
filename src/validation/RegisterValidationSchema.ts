import * as Yup from "yup";

export const RegisterValidationSchema = Yup.object().shape({
  username: Yup.string().required("User Name Required"),
  email: Yup.string().email().required("Email Required"),
  password: Yup.string().required("Password Required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Password must be Match")
    .required("Confirm Password Required"),
});
