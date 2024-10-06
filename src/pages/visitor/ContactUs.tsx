import {
  EmailRounded,
  LocationOnRounded,
  PhoneRounded,
} from "@mui/icons-material";
import { useFormik } from "formik";
import FormInput from "../../components/form/FormInput";
import { postContact } from "../../api/contactService";
import { alertStore } from "../../store/alertStore";
import { ContactValidationSchema } from "../../validation/ContactValidationSchema";

const ContactUs = () => {
  const { setAlert } = alertStore();

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactValidationSchema,
    onSubmit: async (values) => {
      await postContact(values).then((response) => {
        if (response.data.code === 201) {
          setAlert(true, response.data.message, "success");
          resetForm();
        }
      });
    },
  });

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-gray-800 text-center mb-12">
        Contact Us
      </h1>

      {/* Contact Info Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="name"
              label="Name"
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
              name="email"
              label="Email"
              required={true}
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.email}
              touch={touched.email}
              sx={{
                marginBottom: "15px",
              }}
            />
            <FormInput
              name="message"
              label="Message"
              required={true}
              value={values.message}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.message}
              touch={touched.message}
              row={5}
              sx={{
                marginBottom: "15px",
              }}
            />
            <button
              type="submit"
              className="bg-cta hover:bg-hcta py-2 px-4 rounded-lg  transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col  bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Contact Information
          </h2>
          {/* Address */}
          <div className="flex items-center mb-6">
            <LocationOnRounded className="text-black mr-4" fontSize="medium" />
            <div>
              <p className="text-gray-800 font-semibold">Address:</p>
              <p className="text-gray-600">
                123 Bakery Street, Sweet Town, ST 12345
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-center mb-6">
            <PhoneRounded className="text-black mr-4" fontSize="medium" />
            <div>
              <p className="text-gray-800 font-semibold">Phone:</p>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center mb-6">
            <EmailRounded className="text-black mr-4" fontSize="medium" />
            <div>
              <p className="text-gray-800 font-semibold">Email:</p>
              <p className="text-gray-600">info@bakeryandcafe.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-80">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          title="Bakery and Cafe Location"
          src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_LINK"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
