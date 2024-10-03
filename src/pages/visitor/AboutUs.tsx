import React from "react";

const AboutUs = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>

          {/* Who We Are */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are a passionate team of bakers and coffee enthusiasts who
              bring you fresh, handmade pastries and the finest brews. With a
              commitment to quality and taste, we create an experience that
              makes every bite a delight and every sip unforgettable.
            </p>
          </div>

          {/* Meet Our Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Meet Our Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gray-200 p-5 rounded-lg shadow-md">
                <img
                  src="/path-to-team-member1.jpg"
                  alt="Team Member"
                  className="w-full h-40 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">John Doe</h4>
                <p className="text-gray-600">Founder & Head Baker</p>
                <p className="text-gray-500 mt-2">
                  John is the heart and soul of our bakery, with years of
                  experience crafting delicious pastries that keep customers
                  coming back.
                </p>
              </div>
              <div className="bg-gray-200 p-5 rounded-lg shadow-md">
                <img
                  src="/path-to-team-member2.jpg"
                  alt="Team Member"
                  className="w-full h-40 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">Jane Smith</h4>
                <p className="text-gray-600">Coffee Specialist</p>
                <p className="text-gray-500 mt-2">
                  Jane has a passion for coffee and ensures that every cup
                  served is brewed to perfection, with a dedication to flavor
                  and consistency.
                </p>
              </div>
              <div className="bg-gray-200 p-5 rounded-lg shadow-md">
                <img
                  src="/path-to-team-member3.jpg"
                  alt="Team Member"
                  className="w-full h-40 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">Mary Lee</h4>
                <p className="text-gray-600">Pastry Chef</p>
                <p className="text-gray-500 mt-2">
                  Mary brings creativity and elegance to our pastry selection,
                  always experimenting with new flavors and textures.
                </p>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision and Mission
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="text-lg text-gray-600 max-w-lg mx-auto">
                <h4 className="font-semibold text-gray-800 mb-2">Our Vision</h4>
                <p>
                  To be the leading cafe and bakery in the community, offering
                  delicious products made from the highest quality ingredients
                  while fostering a welcoming and warm environment for everyone.
                </p>
              </div>
              <div className="text-lg text-gray-600 max-w-lg mx-auto">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Our Mission
                </h4>
                <p>
                  Our mission is to serve freshly baked goods and the finest
                  coffees to our customers with a smile. We aim to create a
                  community-driven space where people can relax, connect, and
                  enjoy the little pleasures of life.
                </p>
              </div>
            </div>
          </div>

          {/* Our Partners */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Partners
            </h3>
            <div className="flex justify-center gap-16">
              <div className="flex-shrink-0">
                <img
                  src="/path-to-partner-logo1.png"
                  alt="Partner 1"
                  className="w-40 h-auto object-contain"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/path-to-partner-logo2.png"
                  alt="Partner 2"
                  className="w-40 h-auto object-contain"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/path-to-partner-logo3.png"
                  alt="Partner 3"
                  className="w-40 h-auto object-contain"
                />
              </div>
              {/* Add more partner logos as needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
