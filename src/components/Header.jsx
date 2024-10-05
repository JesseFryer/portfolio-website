import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ logoText, navLinks }) => {
  const location = useLocation();

  return (
    <header className="bg-gray-900 text-white p-4 w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left-aligned logo */}
        <div className="flex-none">
          <Link to="/">
            <h1 className="text-2xl text-yellow-600 font-extrabold">{logoText}</h1>
          </Link>
        </div>

        {/* Centered navigation links */}
        <div className="flex-grow text-center">
          <nav>
            <ul className="inline-flex space-x-6">
              {navLinks.map((link, index) => (
                <li key={index} className={location.pathname === link.path ? "text-gray-400" : ""}>
                  <Link to={link.path} className="hover:text-gray-200 text-gray-300 font-medium">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;