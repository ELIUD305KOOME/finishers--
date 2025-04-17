import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 left-0 right-0 w-full 
                   bg-gradient-to-b from-cyan-100 to-transparent
                   backdrop-blur-lg shadow-md z-50 
                   px-4 py-3 lg:px-8 lg:py-4">
      {/* Header content goes here */}

      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        {/* Skewed Gradient Stripe Behind */}


        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center text-blue-900 font-extrabold text-2xl tracking-wide hover:text-blue-700 transition-colors duration-300">
          <img src="/business-logo.jpg" alt="Logo" className="h-16 w-16 object-cover   shadow-sm mr-3" />
          
        </Link>

        {/* Centered Desktop Navigation */}
        <nav className="hidden md:flex justify-center w-full items-center space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Blog", path: "/blog" },

            { name: "Donate", path: "/donate" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-gray-900 border border-blue-600 px-6 py-3 transition duration-300 hover:text-blue-600 ${
                location.pathname === item.path ? "border-blue-600" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <Link
          to="/login"
          className="hidden md:block border border-blue-500 text-blue-500 px-6 py-3 font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-lg p-4 flex flex-col space-y-3">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Blog", path: "/blog" },
            
            { name: "Donate", path: "/donate" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600 block py-2 border-b"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="bg-blue-400 text-white text-center px-4 py-2 font-semibold hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
