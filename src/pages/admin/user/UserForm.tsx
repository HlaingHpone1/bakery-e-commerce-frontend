import {
  Autocomplete,
  Box,
  FormControlLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import AdminFormWrapper from "../../../layouts/admin/AdminFormWrapper";
import { useFormik } from "formik";
import FormInput from "../../../components/form/FormInput";
import { UserCreateValidationSchema } from "../../../validation/admin/UserValidationChema";
import NormalButton from "../../../components/button/NormalButton";
import useRoleList from "../../../hooks/useRoleList";
import RequiredStar from "../../../components/form/RequiredStar";
import { SyntheticEvent, useContext } from "react";
import CancelButton from "../../../components/button/CancelButton";
import FormInputPassword from "../../../components/form/FormInputPassword";
import { LoadingContext } from "../../../context/LoadingContext";

type Role = {
  id: number;
  name: string;
};

export type UserFormValue = {
  name: string;
  email: string;
  phone_number: string;
  role_id: number | null;
  password: string;
  password_confirmation: string;
  gender: number;
  address: string;
  region: string;
};

type UserFormProps = {
  initialValues?: UserFormValue;
  fetch: (payload: UserFormValue) => Promise<void>;
};

const UserForm = ({ initialValues, fetch }: UserFormProps) => {
  const { setIsLoading } = useContext(LoadingContext);

  const { data: roleData } = useRoleList();

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik<UserFormValue>({
    initialValues: initialValues ?? {
      name: "",
      email: "",
      phone_number: "",
      role_id: null,
      password: "",
      password_confirmation: "",
      gender: 0,
      address: "",
      region: "",
    },
    validationSchema: UserCreateValidationSchema,
    onSubmit: async (value, { setErrors }) => {
      setIsLoading(true);

      await fetch(value)
        .then((response: unknown) => {
          console.log(response);

          if ((response as ApiSuccessResponse).code === 201)
            setIsLoading(false);
        })
        .catch((e) => {
          setIsLoading(false);
          setErrors(e.response.data.data.errors);
        });
    },
  });

  return (
    <>
      <AdminFormWrapper title="User Create">
        <Grid item xs={6} pr={2}>
          <FormInput
            name="name"
            label="User Name"
            required={true}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.name}
            touch={touched.name}
            sx={{
              marginBottom: "15px",
            }}
          />
          <FormInput
            name="email"
            label="Email"
            required={true}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.email}
            touch={touched.email}
            sx={{
              marginBottom: "15px",
            }}
          />

          <FormInput
            name="address"
            label="Address"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.address}
            touch={touched.address}
            sx={{
              marginBottom: "15px",
            }}
          />

          <FormInput
            name="region"
            label="Region"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.region}
            touch={touched.region}
            sx={{
              marginBottom: "15px",
            }}
          />

          <FormInput
            name="phone_number"
            label="Phone Number"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.phone_number}
            touch={touched.phone_number}
            sx={{
              marginBottom: "15px",
            }}
          />
        </Grid>
        <Grid item xs={6} pl={2}>
          <Box
            sx={{
              marginBottom: "15px",
            }}
          >
            <InputLabel id="demo-simple-select-label" className="mb-1">
              Role <RequiredStar />
            </InputLabel>
            <Autocomplete
              disablePortal
              options={roleData}
              getOptionLabel={(option: Role) => option.name}
              value={
                roleData.find((role: Role) => role.id === values.role_id) ||
                null
              }
              onChange={(
                _e: SyntheticEvent<Element, Event>,
                newValue: Role | null
              ) => setFieldValue("role_id", newValue?.id)}
              sx={{
                width: "100%",
                ".MuiInputBase-root": { height: 40, py: 1 },

                ".MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "rgba(0, 0, 0, 1)",
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="role_id"
                  placeholder="role"
                  variant="outlined"
                  error={touched.role_id && Boolean(errors.role_id)}
                  helperText={touched.role_id && errors.role_id}
                />
              )}
            />
          </Box>

          <FormInputPassword
            name="password"
            label="Password"
            required={true}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.password}
            touch={touched.password}
            sx={{
              marginBottom: "15px",
            }}
          />

          <FormInputPassword
            name="password_confirmation"
            label="Password Confirmation"
            required={true}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.password_confirmation}
            touch={touched.password_confirmation}
            sx={{
              marginBottom: "15px",
            }}
          />

          <Box
            sx={{
              marginBottom: "15px",
            }}
          >
            <InputLabel className="mb-1">Gender</InputLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value={1}
                checked={Number(values.gender) === 1}
                control={<Radio size="small" />}
                label="Male"
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormControlLabel
                checked={Number(values.gender) === 2}
                value={2}
                control={<Radio size="small" />}
                label="Female"
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </RadioGroup>
            {touched.gender && errors.gender && (
              <div className="text-xs text-red ml-3.5">
                <p>{errors.gender}</p>
              </div>
            )}
          </Box>
        </Grid>
        <Stack
          spacing={2}
          direction="row"
          sx={{ width: "100%", justifyContent: "flex-end" }}
        >
          <CancelButton link="/dashboard/users" type="contained" />
          <NormalButton text="Create" type="contained" onClick={handleSubmit} />
        </Stack>
      </AdminFormWrapper>
    </>
  );
};

export default UserForm;
