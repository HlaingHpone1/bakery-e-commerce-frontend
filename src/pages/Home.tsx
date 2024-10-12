import { background } from "../utils/image";
import { useQuery } from "@tanstack/react-query";
import { getAllProductUser } from "../api/ProductService";
import { PlayArrowRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["product-home"],
    queryFn: async () =>
      getAllProductUser("limit=3").then((response) => response.data.data),
  });

  const handlePlayButtonClick = () => {
    window.location.href = "https://www.youtube.com/your-channel-url";
  };

  return (
    <>
      <div>
        <section
          className="h-screen bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${background.bg})`,
            height: "calc(100vh - 80px)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-center text-white p-5">
            <div className="">
              <h1 className="text-5xl font-bold mb-4">
                Welcome to Shew Pu Zun
              </h1>
              <p className="text-lg">
                Experience the finest pastries and coffee, made fresh every day.
              </p>
            </div>
          </div>
        </section>

        {/* Our Specialties Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Specialties
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Indulge in our finest collection of baked goods and beverages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {data?.map((product: ProductCard) => (
                <div
                  className="bg-gray-200 p-5 rounded-lg shadow-md"
                  key={product.id}
                >
                  <img
                    src={product.image_url}
                    alt="Product"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div>
          {/* First section: Info on the left, Image on the right */}
          <InfoImageSection
            reverse={false}
            imageSrc={background.bg2}
            title="Who We Are"
            description="We are a cafe and bakery shop that prides itself on serving delicious, fresh products daily. Come visit us!"
          />

          {/* Second section: Image on the left, Info on the right */}
          <InfoImageSection
            reverse={true}
            imageSrc={background.bg3}
            title="Meet Our Team"
            description="Our dedicated team is passionate about baking and providing excellent service to our customers."
          />
        </div>

        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${background.bg1})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex justify-center items-center">
            <div className="absolute w-40 h-40 bg-transparent rounded-full animate-ping border-2 border-indigo-300"></div>
            <div className="absolute w-32 h-32 bg-transparent rounded-full animate-ping delay-100 border-2 border-indigo-400"></div>
            <div className="absolute w-24 h-24 bg-transparent rounded-full animate-ping delay-200 border-2 border-indigo-500"></div>

            <button
              onClick={handlePlayButtonClick}
              className="w-20 h-20 bg-white rounded-full absolute z-50 shadow-lg flex justify-center items-center transition-transform duration-300 hover:scale-110"
            >
              <PlayArrowRounded
                sx={{
                  fontSize: "25px",
                }}
              />
            </button>
          </div>
        </div>

        {/* Location Map Section */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Location
            </h2>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                title="Cafe Location"
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        <div className="py-16 bg-slate-200">
          <div className="container mx-auto text-center px-4">
            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Order Now</h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8">
              Enjoy our fresh and delicious bakery items delivered right to your
              door. Order online and experience the taste of our handcrafted
              pastries and coffee.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => (window.location.href = "/products")}
              className="bg-cta py-3 px-8 rounded-lg shadow-lg text-lg font-semibold hover:bg-hcta transition-transform duration-300 transform hover:scale-105"
            >
              Place Your Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const InfoImageSection = ({
  reverse,
  imageSrc,
  title,
  description,
}: {
  reverse: boolean;
  imageSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } my-8 items-center`}
    >
      {/* Image */}
      <div className="md:w-1/2 w-full p-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Info */}
      <div className="md:w-1/2 w-full p-4">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to="/about-us"
          className="bg-cta py-2 px-4 rounded-lg shadow hover:bg-hcta transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
