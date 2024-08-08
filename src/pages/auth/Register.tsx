import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useFormik } from "formik";

import {
  Apple,
  EmailRounded,
  FacebookRounded,
  Google,
  KeyRounded,
} from "@mui/icons-material";

import {
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import shopAnimation from "../../assets/animation/register.json";

import AuthLayout from "../../layouts/AuthLayout";
import FormInput from "../../components/form/FormInput";
import ButtonIcon from "../../components/button/ButtonIcon";
import AuthButton from "../../components/button/AuthButton";
import FormInputPassword from "../../components/form/FormInputPassword";
import { RegisterValidationSchema } from "../../validation/RegisterValidationSchema";

type RegisterProps = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

const Register = () => {
  const animationRef = useRef<LottieRefCurrentProps>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [forgotShow, setForgotShow] = useState(false);

  const { handleBlur, handleChange, errors, touched, handleSubmit } =
    useFormik<RegisterProps>({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: RegisterValidationSchema,
      onSubmit: () => {
        console.log("Submit");
      },
    });

  return (
    <>
      <AuthLayout>
        <Paper
          elevation={24}
          sx={{
            width: "1000px",
          }}
        >
          <Grid container justifyContent="center">
            <Grid
              item
              xl={6}
              md={6}
              alignItems="center"
              sx={{
                bgcolor: "#FFF5E1",
              }}
            >
              <Lottie
                loop={false}
                lottieRef={animationRef}
                animationData={shopAnimation}
                style={{
                  height: "100%",
                  display: "block",
                }}
                onComplete={() => {
                  animationRef.current?.goToAndPlay(0, true);
                }}
              />
            </Grid>
            <Grid
              item
              xl={6}
              md={6}
              paddingY={3.5}
              paddingX={6}
              sx={{
                order: {
                  xs: 2,
                  md: 0,
                },
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                paddingX={2}
                marginBottom={5}
                align="center"
                sx={{
                  fontWeight: "600",
                  fontFamily: "Roboto Slab",
                }}
              >
                Register
              </Typography>
              <FormInput
                name="username"
                label="Username"
                required={true}
                icon={<EmailRounded />}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.username}
                touch={touched.username}
                sx={{
                  paddingBottom: "20px",
                }}
              />
              <FormInput
                name="email"
                label="Email"
                required={true}
                icon={<EmailRounded />}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.email}
                touch={touched.email}
                sx={{
                  paddingBottom: "20px",
                }}
              />
              <FormInputPassword
                name="password"
                label="Password"
                required={true}
                icon={<KeyRounded />}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.password}
                touch={touched.password}
                sx={{
                  paddingBottom: "20px",
                }}
              />
              <FormInputPassword
                name="confirm_password"
                label="Confirm Password"
                required={true}
                icon={<KeyRounded />}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.confirm_password}
                touch={touched.confirm_password}
                sx={{
                  paddingBottom: "10px",
                }}
              />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                marginBottom={2}
              >
                <FormControlLabel
                  control={<Checkbox size="small" color="info" />}
                  label="Accept Terms and Conditions"
                />

                {forgotShow && (
                  <Typography color="error" marginBottom="0" paragraph>
                    Forgot Password
                  </Typography>
                )}
              </Stack>
              <AuthButton
                text="Submit"
                type="contained"
                sx={{
                  width: "100%",

                  backgroundColor: "#8B4513",

                  ":hover": {
                    backgroundColor: "#8B4513",
                  },
                }}
                onSubmit={handleSubmit}
              />

              <Divider
                sx={{
                  marginY: "15px",

                  "&.MuiDivider-root::before": {
                    borderTop: "1.5px solid #8B4513",
                  },
                  "&.MuiDivider-root::after": {
                    borderTop: "1.5px solid #8B4513",
                  },
                }}
              >
                <Chip label="Or Continue With" size="medium" />
              </Divider>

              <Stack
                direction="row"
                justifyContent="space-evenly"
                marginBottom="20px"
              >
                <ButtonIcon type="outlined" icon={<Google />} />
                <ButtonIcon type="outlined" icon={<FacebookRounded />} />
                <ButtonIcon type="outlined" icon={<Apple />} />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap="5px"
              >
                <Typography component="p">Already Have a Account?</Typography>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Roboto Slab",
                  }}
                >
                  <Link to="/login">Login Here</Link>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </AuthLayout>
    </>
  );
};

export default Register;
