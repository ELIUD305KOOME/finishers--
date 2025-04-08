import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer class="bg-white text-gray-800 py-10">
      <div class="container mx-auto px-4 md:px-0">
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          {/* <!-- Column 1: About CSA --> */}
          <div class="w-full md:w-1/4">
            <h3 class="text-lg font-bold mb-4">About emur</h3>
            <p class="text-sm leading-relaxed">
              At emur, we offer a wide range of services tailored to meet your needs. Whether you're looking for assistance, and inq our services, employment opportunities, or simply want to support our work through donations, we're here to help.
            </p>
          </div>

          {/* <!-- Column 2: Quick Links --> */}
          <div class="w-full md:w-1/4">
            <h3 class="text-lg font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#services" class="hover:text-indigo-500 transition duration-300">Services</a></li>
              <li><a href="#blog" class="hover:text-indigo-500 transition duration-300">Blog</a></li>
              <li><a href="#updates" class="hover:text-indigo-500 transition duration-300">Latest Updates</a></li>
              <li><a href="#contact" class="hover:text-indigo-500 transition duration-300">Contact emur</a></li>
              <li><a href="#donate" class="hover:text-indigo-500 transition duration-300">Donate</a></li>
            </ul>
          </div>

          {/* <!-- Column 3: Social Media --> */}
          <div class="w-full md:w-1/4">
            <h3 class="text-lg font-bold mb-4">Follow emur</h3>
            <ul class="flex space-x-4">
              <li>
                <a href="#" class="text-indigo-500 hover:text-indigo-600 transition duration-300">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" class="text-indigo-500 hover:text-indigo-600 transition duration-300">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" class="text-indigo-500 hover:text-indigo-600 transition duration-300">
                  <FontAwesomeIcon icon={faTiktok} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" class="text-indigo-500 hover:text-indigo-600 transition duration-300">
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" class="text-indigo-500 hover:text-indigo-600 transition duration-300">
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Column 4: Contact CSA --> */}
          <div class="w-full md:w-1/4">
            <h3 class="text-lg font-bold mb-4">Contact emur</h3>
            <ul class="space-y-2">
              <li><a href="mailto:info@csa.com" class="hover:text-indigo-500 transition duration-300">Email: info@emur.com</a></li>
              <li><a href="tel:+1234567890" class="hover:text-indigo-500 transition duration-300">Phone: +254 792 182 559</a></li>
            </ul>
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div class="mt-10 border-t border-gray-300 pt-4 text-center">
          <p class="text-sm">&copy; 2023 emur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;