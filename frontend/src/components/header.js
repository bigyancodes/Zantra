import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ openModal }) => {
  const [isSlideNavbarActive, setSlideNavbarActive] = useState(false);

  const toggleSlideNavbar = () => {
    setSlideNavbarActive(!isSlideNavbarActive);
  };

  return (
    <header>
      <nav className="bg-gray-100">
        <div className="container mx-auto px-8 py-2">
          <div className="flex justify-end items-center">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Join Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Track Order</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Customer Care</a></li>
              <li><button onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">Become Seller</button></li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={toggleSlideNavbar} className="text-gray-600 hover:text-blue-500 focus:outline-none mr-8">
                <FontAwesomeIcon icon={faBars} className="text-xl" />
              </button>
              <a href="#" className="text-3xl font-bold text-blue-500 hover:text-blue-600 transition duration-300">Zantra</a>
            </div>
            <ul className="flex items-center space-x-8">
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Men</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Women</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Kids</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Ethnic</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Footwear</a></li>
            </ul>
            <div className="flex items-center ml-8">
              <form className="relative mr-8">
                <input type="search" placeholder="Search Zantra" className="w-80 py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-400 hover:text-blue-500 transition duration-300" />
                </button>
              </form>
              <ul className="flex items-center space-x-6">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300"><FontAwesomeIcon icon={faUser} className="text-xl" /></a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300"><FontAwesomeIcon icon={faShoppingBag} className="text-xl" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className={`slide-navbar fixed top-0 left-0 h-screen w-80 bg-white shadow-lg p-6 transition-all duration-300 ease-in-out transform ${isSlideNavbarActive ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={toggleSlideNavbar} className="absolute top-4 right-4 text-gray-600 hover:text-blue-500 focus:outline-none">
          <FontAwesomeIcon icon={faTimes} className="text-xl" />
        </button>
        <ul className="space-y-4 mt-8">
          <li><a href="#" className="block text-gray-600 hover:text-blue-500 transition duration-300">Home</a></li>
          <li><a href="#" className="block text-gray-600 hover:text-blue-500 transition duration-300">Shop</a></li>
          <li><a href="#" className="block text-gray-600 hover:text-blue-500 transition duration-300">Categories</a></li>
          <li><a href="#" className="block text-gray-600 hover:text-blue-500 transition duration-300">About Us</a></li>
          <li><a href="#" className="block text-gray-600 hover:text-blue-500 transition duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;