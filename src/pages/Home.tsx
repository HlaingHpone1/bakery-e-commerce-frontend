import React from "react";

const Home = () => {
  return (
    <>
      <div>
        {/* Welcome Section */}
        <section
          className="h-screen bg-cover bg-center relative"
          style={{ backgroundImage: 'url("/path-to-your-cafe-image.jpg")' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex items-center justify-center text-center text-white p-5">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold mb-4">Welcome to Your Cafe</h1>
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
              <div className="bg-gray-200 p-5 rounded-lg shadow-md">
                <img
                  src="/path-to-product-image.jpg"
                  alt="Product"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">Fresh Croissants</h3>
                <p className="text-gray-600">
                  Delicious, buttery, and flaky croissants baked fresh every
                  morning.
                </p>
              </div>
              <div className="bg-gray-200 p-5 rounded-lg shadow-md">
                <img
                  src="/path-to-product-image.jpg"
                  alt="Product"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">Signature Lattes</h3>
                <p className="text-gray-600">
                  Perfectly brewed lattes with the best local coffee beans.
                </p>
              </div>
              <div className="bg-gray-200 p-5 rounded-lg shadow-md">
                <img
                  src="/path-to-product-image.jpg"
                  alt="Product"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">Chocolate Cake</h3>
                <p className="text-gray-600">
                  A rich, moist chocolate cake that melts in your mouth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Auto-Scrolling Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Delicious Products
            </h2>
            <div className="overflow-hidden">
              <div className="flex animate-scroll">
                <div className="flex-shrink-0 w-60 p-5">
                  <img
                    src="/path-to-product-image.jpg"
                    alt="Product"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">Muffins</h3>
                </div>
                <div className="flex-shrink-0 w-60 p-5">
                  <img
                    src="/path-to-product-image.jpg"
                    alt="Product"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">Brownies</h3>
                </div>
                <div className="flex-shrink-0 w-60 p-5">
                  <img
                    src="/path-to-product-image.jpg"
                    alt="Product"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">Scones</h3>
                </div>
                <div className="flex-shrink-0 w-60 p-5">
                  <img
                    src="/path-to-product-image.jpg"
                    alt="Product"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">Cinnamon Rolls</h3>
                </div>
                {/* Add more product items */}
              </div>
            </div>
          </div>
        </section>

        {/* Location Map Section */}
        <section className="py-20 bg-white">
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
      </div>
    </>
  );
};

export default Home;
