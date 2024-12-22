import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,  faTiktok,  faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="md:w-2/3">
            <h3 className="lg:text-xl text-sm font-bold text-white mb-4">About Us</h3>
            <p className="text-xs text-gray-400">
              At Solomons, we blend expert craftsmanship with advanced technology to bring you unparalleled grooming and skincare services. From precision cuts and fades to cutting-edge laser treatments for facials and other needs, we ensure you look and feel your best.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 text-center">
            <strong className="text-red-600 text-sm sm:text-sm md:text-lg lg:text-2xl font-extrabold">
              We Awaits You.
            </strong>
          </div> 

        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.facebook.com/solomon.rukaria.5" className="text-blue-800 hover:text-white">
            <FontAwesomeIcon icon={faFacebook} size="1x"
              className="sm:text-2xl md:text-3xl lg:text-4xl"/>
          </a>
          {/* <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a> */}
          <a href="https://www.youtube.com/@solomonrukaria2056" className="text-red-800 hover:text-white">
            <FontAwesomeIcon
              icon={faYoutube}
              size="1x" // Default size for small screens
              className="sm:text-2xl md:text-3xl lg:text-4xl"
            />
          </a>
          <a href="https://www.instagram.com/solorukaria/" className="text-pink-400 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} size="1x"
            className="sm:text-2xl md:text-3xl lg:text-4xl" />
          </a>
          <a href="https://wa.me/+254722669912" className="text-green-400 hover:text-white">
            <FontAwesomeIcon icon={faWhatsapp} size="1x" 
            className="sm:text-2xl md:text-3xl lg:text-4xl"/>
          </a>
          <a href="https://www.tiktok.com/@solomonrukaria?is_from_webapp=1&sender_device=pc" className='  text-white hover:text-white'>
           <FontAwesomeIcon icon={faTiktok} size='1x'
            className='sm:text-1xl md:text-3xl lg:text-4xl' />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2024 developed by
            <img
              src="/me.jpg"
              alt="Developer's avatar"
              className="self-center w-5 h-5 rounded-full mx-1 inline-block"
            />
            <span>eliudsOur</span>.limitted. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
