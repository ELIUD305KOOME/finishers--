import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Assuming you want to use these icons for mobile menu toggle
// import AnnouncementBanner from './Top';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const location = useLocation(); // Get current route
  return (
    <>
      {/* <div class="bg-gradient-to-r  from-blue-500 to-purple-600 p-2 w-full  max-w-full mx-auto">
        <h4 class="text-white text-l font-semibold text-center">
          Welcome to Solomons
        </h4>
      </div> */}

      <header className="sticky border-b border-gray-200 shadow-lg top-0 left-0 w-full bg-blue-500/50 shadow-lg z-50 p-2 max-w-full mx-auto shadow-sm">

        {/* <div className=''><AnnouncementBanner /></div> */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Name */}
            <Link to="/" className="flex ml-16 items-center">
              <img
                src="/business-logo.png"
                alt="Logo"
                className="h-11 w-11 mr-2"
              />
            </Link>


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center  mr-20px space-x-8 mr-12">
              <Link
                to="/"
                className={`text-indigo-100 hover:text-yellow-600 pr-4 py-7 transition-all duration-300 ${location.pathname === '/' ? 'bg-indigo-400' : ''} hover:py-5`}
              >
                Home
            </Link>
            <Link
              to="/products"
              className={`text-indigo-100 hover:text-yellow-600 pr-4 py-7 transition-all duration-300 ${location.pathname === '/products' ? 'bg-indigo-400' : ''} hover:py-5`}
            >
              Products
            </Link>
            <Link
              to="/services"
              className={`text-indigo-100 hover:text-yellow-600 pr-4 py-7 transition-all duration-300 ${location.pathname === '/services' ? 'bg-indigo-400' : ''} hover:py-5`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-indigo-100 hover:text-yellow-600 pr-4 py-7 transition-all duration-300 ${location.pathname === '/about' ? 'bg-indigo-400' : ''} hover:py-5`}
            >
              About Us
            </Link>
            <Link
              to="/login"
              className="bg-orange-600 transform transition duration-300 hover:scale-110 hover:animate-bounce font-bold text-white px-6 py-7  hover:bg-indigo-700 transition-colors"
            >
              Login
            </Link>
            </div>

            {/* Bubbles Effect
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(142, 2, 2, 0.6)', borderRadius: '50%', width: '8px', height: '8px', left: '20%', top: '30%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 200, 200, 0.6)', borderRadius: '50%', width: '6px', height: '6px', left: '50%', top: '10%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(200, 255, 200, 0.6)', borderRadius: '50%', width: '10px', height: '10px', left: '80%', top: '60%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(200, 200, 255, 0.6)', borderRadius: '50%', width: '7px', height: '7px', left: '35%', top: '80%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 255, 200, 0.6)', borderRadius: '50%', width: '9px', height: '9px', left: '15%', top: '50%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(200, 255, 255, 0.6)', borderRadius: '50%', width: '5px', height: '5px', left: '70%', top: '20%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 200, 255, 0.6)', borderRadius: '50%', width: '12px', height: '12px', left: '40%', top: '40%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 230, 200, 0.6)', borderRadius: '50%', width: '11px', height: '11px', left: '60%', top: '70%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgb(6, 248, 139)', borderRadius: '50%', width: '7px', height: '7px', left: '10%', top: '20%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(230, 200, 255, 0.6)', borderRadius: '50%', width: '6px', height: '6px', left: '85%', top: '15%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(44, 116, 2, 0.6)', borderRadius: '50%', width: '8px', height: '8px', left: '25%', top: '65%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 220, 240, 0.6)', borderRadius: '50%', width: '10px', height: '10px', left: '55%', top: '35%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(200, 240, 255, 0.6)', borderRadius: '50%', width: '9px', height: '9px', left: '75%', top: '45%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(240, 255, 220, 0.6)', borderRadius: '50%', width: '7px', height: '7px', left: '30%', top: '25%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 200, 220, 0.6)', borderRadius: '50%', width: '8px', height: '8px', left: '65%', top: '85%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgb(4, 248, 81)', borderRadius: '50%', width: '7px', height: '7px', left: '5%', top: '10%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(6, 188, 243, 0.6)', borderRadius: '50%', width: '11px', height: '11px', left: '15%', top: '85%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(220, 200, 255, 0.6)', borderRadius: '50%', width: '12px', height: '12px', left: '35%', top: '5%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 210, 200, 0.6)', borderRadius: '50%', width: '5px', height: '5px', left: '45%', top: '75%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(243, 5, 247, 0.6)', borderRadius: '50%', width: '8px', height: '8px', left: '55%', top: '20%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(230, 255, 200, 0.6)', borderRadius: '50%', width: '9px', height: '9px', left: '65%', top: '40%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(203, 22, 137, 0.6)', borderRadius: '50%', width: '6px', height: '6px', left: '75%', top: '30%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(220, 255, 230, 0.6)', borderRadius: '50%', width: '10px', height: '10px', left: '85%', top: '60%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(240, 200, 255, 0.6)', borderRadius: '50%', width: '7px', height: '7px', left: '90%', top: '50%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 220, 210, 0.6)', borderRadius: '50%', width: '9px', height: '9px', left: '10%', top: '40%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(245, 100, 3, 0.6)', borderRadius: '50%', width: '11px', height: '11px', left: '20%', top: '50%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 240, 200, 0.6)', borderRadius: '50%', width: '8px', height: '8px', left: '30%', top: '60%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(210, 255, 220, 0.6)', borderRadius: '50%', width: '7px', height: '7px', left: '40%', top: '70%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 220, 250, 0.6)', borderRadius: '50%', width: '6px', height: '6px', left: '50%', top: '80%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(166, 245, 10, 0.6)', borderRadius: '50%', width: '12px', height: '12px', left: '60%', top: '10%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 250, 220, 0.6)', borderRadius: '50%', width: '11px', height: '11px', left: '70%', top: '15%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(110, 6, 25, 0.6)', borderRadius: '50%', width: '5px', height: '5px', left: '80%', top: '25%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(244, 7, 7, 0.6)', borderRadius: '50%', width: '8px', height: '8px', left: '90%', top: '35%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(230, 255, 220, 0.6)', borderRadius: '50%', width: '9px', height: '9px', left: '5%', top: '45%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(200, 210, 255, 0.6)', borderRadius: '50%', width: '10px', height: '10px', left: '15%', top: '55%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 200, 240, 0.6)', borderRadius: '50%', width: '7px', height: '7px', left: '25%', top: '65%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(200, 250, 255, 0.6)', borderRadius: '50%', width: '6px', height: '6px', left: '35%', top: '75%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(250, 220, 255, 0.6)', borderRadius: '50%', width: '8px', height: '8px', left: '45%', top: '85%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(200, 255, 240, 0.6)', borderRadius: '50%', width: '9px', height: '9px', left: '55%', top: '95%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 220, 200, 0.6)', borderRadius: '50%', width: '10px', height: '10px', left: '65%', top: '5%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(49, 6, 241, 0.6)', borderRadius: '50%', width: '12px', height: '12px', left: '75%', top: '15%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(220, 255, 200, 0.6)', borderRadius: '50%', width: '11px', height: '11px', left: '85%', top: '25%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(200, 250, 220, 0.6)', borderRadius: '50%', width: '5px', height: '5px', left: '95%', top: '35%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 240, 210, 0.6)', borderRadius: '50%', width: '8px', height: '8px', left: '10%', top: '45%' }}></div>
              <div className="absolute animate-bubble" style={{ backgroundColor: 'rgba(255, 200, 250, 0.6)', borderRadius: '50%', width: '9px', height: '9px', left: '20%', top: '55%' }}></div>

            </div> */}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                to="/"
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
              to="/products"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
              >
                Products
              </Link>

              <Link
                to="/services"
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 text-indigo-600 hover:text-indigo-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
          
        )}
      </div>
    </header>
    </>
  );
};

export default Header;
