import * as Yup from "yup";

const FILE_SIZE = 1024 * 1024 * 2;

export const BlogValidationSchmea = Yup.object().shape({
  title: Yup.string().required("Title Required"),
  description: Yup.string().required("Description Required"),
  images: Yup.array().of(
    Yup.mixed()
      .required("Image is Required")
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) =>
          value &&
          ["image/jpg", "image/jpeg", "image/png"].includes(
            (value as File).type
          )
      )
      .test("fileSize", "File size can be over 2MB", (value) => {
        return value && (value as File).size <= FILE_SIZE;
      })
  ),
});
