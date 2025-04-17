import React from 'react';
// import ServiceList from './ServiceList';
// import ProductList from './ProductList'; // Ensure correct file name
import ReviewsPage from './ReviewsPage';
import Map from './Map';
import Card from './eliudcard';

const HomePage = () => {
  return (
    <div className="relative w-full bg-blue-100 min-h-screen overflow-hidden">
      {/* Hero Section with Background Logo */}
      <section
        className="relative bg-cover bg-center py-24 md:py-32 lg:py-48"
        style={{
          backgroundImage: "url('/mekoli.jpeg')", // Replace with your image path
          backgroundSize: "cover", // Ensures the image covers the entire section
          backgroundPosition: "center", // Centers the image within the section
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundAttachment: 'fixed',
          minHeight: '70vh', // Increased height for the hero section
        }}
      >
        {/* Semi-transparent overlay */}
        <div
          className="absolute inset-0 bg-black opacity-40"
          aria-hidden="true"
        ></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* Text Content */}
            <div className="text-center md:text-left flex-1 z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Your Partner in Exceptional Customer Service
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                At emur, we specialize in delivering top-notch customer service
                assistance. Whether you need help with inquiries, technical
                support, or resolving issues, our team is here to ensure your
                satisfaction.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow transition duration-300"
                >
                  Learn More About Our Services
                </a>
                <a
                  href="#contact"
                  className="inline-block border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-medium py-3 px-8 rounded-md shadow transition duration-300"
                >
                  Contact Us Today
                </a>
              </div> */}
            </div>

            {/* Big Logo Text (CSA) */}
            <div className="flex-1 hidden md:block relative">
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  WebkitTextStroke: "2px #fff", 
                  fontSize: "13rem", // Adjust size as needed
                  fontFamily: "'Roboto', sans-serif", // Modern font
                  fontWeight: "bold",
                  color: "rgba(255, 255, 255, 0.1)", // Subtle base color
                  textShadow:
                    "0px 10px 20px rgba(23, 7, 255, 0.8), 0px 20px 40px rgba(76, 87, 243, 0.6), 0px 30px 60px rgba(138, 156, 244, 0.4)", // Glow effect
                }}
              >
                emur
              </div>
            </div>
          </div>

        </div>

      </section>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 py-8 bg-gray-100 rounded-lg shadow-md">
        {/* Text Section */}
        <div className="text-left max-w-md md:w-1/2 p-4 rounded-lg relative overflow-hidden">
          {/* Background Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-white transform -skew-y-[20deg]"></div>

          {/* Content Layer */}
          <div className="relative">
            <p className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              We are connected to these companies,
            </p>
            <p className="text-base md:text-lg text-gray-600">
              You can inquire about them through us.
            </p>
          </div>
        </div>

        {/* Logos Section */}
        <div className="flex justify-center items-center md:w-1/2 space-x-12">
          {/* Logo 1: DEPI */}
          <div className="relative group">
            <img
              src="/depi-logo.png"
              alt="DEPI"
              className="w-32 h-32 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <span className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 text-sm md:text-base font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              Depi Estates
            </span>
          </div>

          {/* Logo 2: LEMCO */}
          <div className="relative group">
            <img
              src="/lemco-logo.jpg"
              alt="LEMCO"
              className="w-32 h-32 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <span className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 text-sm md:text-base font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              LEMCO Insurance
            </span>
          </div>

          {/* Logo 3: Business Logo */}
          <div className="relative group">
            <img
              src="/business-logo.jpg"
              alt="Business Name"
              className="w-32 h-32 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <span className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 text-sm md:text-base font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
            emur Tech
            </span>
          </div>
          {/* Logo 3: Business Logo */}
          <div className="relative group">
            <img
              src="/prudential.png"
              alt="Business Name"
              className="w-32 h-32 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <span className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 text-sm md:text-base font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              prudential Insurance
            </span>
          </div>
        </div>
      </div>
      <Card/>
      <ReviewsPage />

      {/* Map Section */}
      <Map />

    </div>
  );
};

export default HomePage;