import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, FileText, Heart, User } from 'lucide-react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home /> },
    { name: 'Blog', path: '/blog', icon: <FileText /> },
    { name: 'Donate', path: '/donate', icon: <Heart /> },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 w-full 
                   bg-gradient-to-b from-cyan-100 to-transparent
                   backdrop-blur-lg shadow-md z-50 
                   px-4 py-3 lg:px-8 lg:py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Desktop Navigation - Icons only */}
        <nav className="hidden md:flex justify-center w-full items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              title={item.name}
              className={`text-gray-900 border border-blue-600 p-3 rounded transition duration-300 hover:text-blue-600 ${
                location.pathname === item.path ? "border-blue-600" : ""
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </nav>

        {/* Login Button with icon */}
        <Link
          to="/login"
          title="Login"
          className="hidden md:flex items-center border border-blue-500 text-blue-500 px-4 py-2 font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          <User className="mr-2" /> Login
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu - still uses text */}
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
