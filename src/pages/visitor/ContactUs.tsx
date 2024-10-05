import {
  EmailRounded,
  LocationOnRounded,
  PhoneRounded,
} from "@mui/icons-material";

const ContactUs = () => {
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
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  "
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
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
