import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r to-orange-600 from-white sticky top-0 text-white px-4 py-3 w-full z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex justify-center items-center">
          <img src="https://i.imgur.com/jbqcnpj.png" alt="logo" className="w-16 h-12" />
          <span>
            <h3 className="text-gray-500">ABC Technology</h3>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-blue-800 cursor-pointer">Home</li>

          {/* About section with hover to show dropdown */}
          <li
            className="relative hover:text-blue-800 cursor-pointer "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About Us <FaChevronDown className="inline ml-1" />
            {isDropdownOpen && (
              <ul className="absolute top-full left-0  w-56 bg-[#1d4ed8] text-white rounded-lg shadow-lg py-2 z-50">
                <li className="px-4 py-2 hover:text-[rgb(251,146,60)] cursor-pointer">Company Overview</li>
                <li className="px-4 py-2 hover:text-[rgb(251,146,60)] cursor-pointer">Director Profile</li>
                <li className="px-4 py-2 hover:text-[rgb(251,146,60)] cursor-pointer">Carrier Objective</li>
                <li className="px-4 py-2 hover:text-[rgb(251,146,60)] cursor-pointer">Departments</li>
              </ul>
            )}
          </li>
          <li className="hover:text-blue-800 cursor-pointer">How qualitywork</li>
          <li className="hover:text-blue-800 cursor-pointer">Product & Services</li>
          <li className="hover:text-blue-800 cursor-pointer">Contact us</li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <FaBars size={30} onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-96 w-full bg-[rgb(251,146,60)] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full '
        } md:hidden`}
      >
        {/* Close Icon Inside Mobile Menu */}
        <div className="flex justify-end p-4">
          <FaTimes size={30} className="text-white" onClick={toggleMenu} />
        </div>

        <ul className="flex flex-col items-center h-full space-y-8">
          <li className="text-xl hover:text-blue-800 cursor-pointer">Home</li>

          {/* Mobile About section with click-based dropdown */}
          <li className="text-xl hover:text-blue-800 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            About Us
            <FaChevronDown className="inline ml-1" />
            {isDropdownOpen && (
              <ul className="space-y-4 text-center bg-[#1d4ed8] px-8 py-12 rounded-md text-white w-72 "> {/* Increased width and padding */}
                <li className="hover:text-[rgb(251,146,60)] cursor-pointer">Company Overview</li>
                <li className="hover:text-[rgb(251,146,60)] cursor-pointer">Director Profile</li>
                <li className="hover:text-[rgb(251,146,60)] cursor-pointer">Carrier Objective</li>
                <li className="hover:text-[rgb(251,146,60)] cursor-pointer">Departments</li>
              </ul>
            )}
          </li>
          <li className="text-xl hover:text-blue-800 cursor-pointer">How qualitywork</li>
          <li className="text-xl hover:text-blue-800 cursor-pointer">Product & Services</li>
          <li className="text-xl hover:text-blue-800 cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
