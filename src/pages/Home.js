import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ReviewsPage from './ReviewsPage';
import Map from './Map';
import Card from './eliudcard';
import ServiceList from './service';
import SimpleHeaderWithIcons from './smarter'
import Newser from './newser'
// import TechStackLogos from './TechStackLogos';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/mekoli.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed',
      }}
    > 
      {/* Overlay for entire background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
     
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-20 md:py-32 px-4 z-10">
      <div className="w-full max-w-4xl mx-auto text-center">
      {/* <TechStackLogos /> */}
  {/* Wrapper for the emur background text */}
  <div className="relative h-20 mb-10 md:h-40">
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        WebkitTextStroke: "1px #fff",
        fontSize: "6rem",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "bold",
        color: "rgba(255, 255, 255, 0.1)",
        textShadow:
          "0px 10px 20px rgba(23, 7, 255, 0.8), 0px 20px 40px rgba(76, 87, 243, 0.6), 0px 30px 60px rgba(138, 156, 244, 0.4)",
      }}
    >
      emur
    </div>
  </div>
  
          {/* Search input */}
          <div className="flex justify-center px-2">
            <input
              type="text"
              placeholder="Search for services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-2xl sm:max-w-xl md:max-w-lg px-4 sm:px-5 py-2 sm:py-3 rounded-none sm:rounded-full bg-white shadow-lg border border-gray-200 focus:outline-none text-gray-800 text-base sm:text-lg transition-all"
            />
          </div>

          <SimpleHeaderWithIcons />

        </div>

      </section>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto mt-4 bg-transparent bg-opacity-90 rounded-t-3xl shadow-xl p-6 w-full lg:w-4/5">
        <ul className="flex space-x-8 mb-4 text-3xl">
          <li>
            <a
              href="#"
              className="text-[#1877F2] hover:text-blue-600 transition duration-300" // Facebook blue
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#E1306C] hover:text-pink-500 transition duration-300" // Instagram pink
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black hover:text-gray-700 transition duration-300" // TikTok black
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#25D366] hover:text-green-500 transition duration-300" // WhatsApp green
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#FF0000] hover:text-red-500 transition duration-300" // YouTube red
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>

        <ServiceList searchQuery={searchQuery} />
        <Card />
        <Newser />
        <ReviewsPage />
        <Map />
      </div>
    </div>
  );
};

export default HomePage;
