import React from "react";

const Shop = () => {
  const shopLocations = [
    {
      id: 1,
      name: "Downtown Bakery",
      address: "123 Main St, Downtown City",
      phone: "(123) 456-7890",
      image: "/path-to-shop-image1.jpg", // Image for the left side
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=...1", // Replace with actual Google Map Embed URL
    },
    {
      id: 2,
      name: "Uptown Cafe",
      address: "456 Uptown Ave, Uptown City",
      phone: "(234) 567-8901",
      image: "/path-to-shop-image2.jpg", // Image for the left side
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=...2", // Replace with actual Google Map Embed URL
    },
    {
      id: 3,
      name: "Westside Pastries",
      address: "789 Westside Rd, Westside City",
      phone: "(345) 678-9012",
      image: "/path-to-shop-image3.jpg", // Image for the left side
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=...3", // Replace with actual Google Map Embed URL
    },
  ];

  return (
    <div className="font-sans bg-gray-100">
      {/* Shop Page Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Shop Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the best of our bakery and cafe at any of our three
            convenient locations. Find your nearest shop below!
          </p>
        </div>
      </section>

      {/* Shop Locations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {shopLocations.map((shop, index) => (
            <div
              key={shop.id}
              className={`flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center bg-white shadow-lg rounded-lg overflow-hidden`}
            >
              {/* Left Side - Image */}
              <div className="w-full md:w-1/2 h-72 md:h-auto">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover"
                />
                {/* If you'd prefer to show a map instead of an image */}
                {/* <iframe
                src={shop.mapEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                title={`Map of ${shop.name}`}
              ></iframe> */}
              </div>

              {/* Right Side - Shop Info */}
              <div className="w-full md:w-1/2 p-6 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {shop.name}
                </h3>
                <p className="text-lg text-gray-600 mt-2">{shop.address}</p>
                <p className="text-lg text-gray-600 mt-2">
                  Phone: {shop.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
