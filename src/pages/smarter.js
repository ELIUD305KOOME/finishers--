import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBlog,
  faHandHoldingHeart,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const SimpleHeaderWithIcons = () => {
  const location = useLocation();

  const navItems = [
    { icon: faHome, path: "/" },
    { icon: faBlog, path: "/blog" },
    { icon: faHandHoldingHeart, path: "/donate" },
    { icon: faRightToBracket, path: "/login" },
  ];

  return (
    <ul className="flex justify-center space-x-8 text-2xl py-4">
      {navItems.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className={`transition duration-300 ${
              location.pathname === item.path
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            <FontAwesomeIcon icon={item.icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SimpleHeaderWithIcons;
