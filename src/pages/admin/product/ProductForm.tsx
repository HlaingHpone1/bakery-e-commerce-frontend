import { SyntheticEvent } from "react";
import { loadingStore } from "../../../store/isLoadingStore";
import { useFormik } from "formik";
import AdminFormWrapper from "../../../layouts/admin/AdminFormWrapper";
import {
  Autocomplete,
  Box,
  Grid,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import FormInput from "../../../components/form/FormInput";
import CancelButton from "../../../components/button/CancelButton";
import NormalButton from "../../../components/button/NormalButton";
import useCategoryList from "../../../hooks/useCategoryList";
import RequiredStar from "../../../components/form/RequiredStar";

export type ProductFormValue = {
  name: string;
  category_id: number | null;
  description: string;
  price: string;
};

type ProductFormProps = {
  initialValue?: ProductFormValue;
  fetch: (payload: ProductFormValue) => Promise<void>;
};

const ProductForm = ({ initialValue, fetch }: ProductFormProps) => {
  const { setIsLoading } = loadingStore();

  const { data: categoryData } = useCategoryList();

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik<ProductFormValue>({
    initialValues: initialValue ?? {
      name: "",
      category_id: null,
      description: "",
      price: "",
    },
    validationSchema: "",
    onSubmit: async (value, { setErrors }) => {
      setIsLoading(true);

      await fetch(value)
        .then((response: unknown) => {
          if ((response as ApiSuccessResponse).code === 201)
            setIsLoading(false);
        })
        .catch((e) => {
          setIsLoading(false);
          setErrors(
            e.response.data.code === 422 ? e.response.data.data.errors : ""
          );
        });
    },
  });

  return (
    <>
      <AdminFormWrapper
        title={initialValue ? "Product Update" : "Product Create"}
      >
        <Grid item xs={6} pr={2}>
          <FormInput
            name="name"
            label="User Name"
            required={true}
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.name}
            touch={touched.name}
            sx={{
              marginBottom: "15px",
            }}
          />
          <FormInput
            name="description"
            label="Description"
            required={true}
            value={values.description}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.description}
            touch={touched.description}
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
              Categories <RequiredStar />
            </InputLabel>
            <Autocomplete
              disablePortal
              color="secondary"
              options={categoryData}
              getOptionLabel={(option: Category) => option.name}
              value={
                categoryData.find(
                  (category: Category) => category.id === values.category_id
                ) || null
              }
              onChange={(
                _e: SyntheticEvent<Element, Event>,
                newValue: Category | null
              ) => setFieldValue("category_id", newValue?.id)}
              sx={{
                width: "100%",
                ".MuiInputBase-root": { height: 40, py: 1 },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="secondary"
                  name="category_id"
                  placeholder="Categories"
                  variant="outlined"
                  error={touched.category_id && Boolean(errors.category_id)}
                  helperText={touched.category_id && errors.category_id}
                />
              )}
            />
          </Box>
        </Grid>

        <Stack
          spacing={2}
          direction="row"
          sx={{ width: "100%", justifyContent: "flex-end" }}
        >
          <CancelButton link="/dashboard/users" type="contained" />
          <NormalButton
            text={initialValue ? "Update" : "Create"}
            type="contained"
            onClick={handleSubmit}
          />
        </Stack>
      </AdminFormWrapper>
    </>
  );
};

export default ProductForm;
