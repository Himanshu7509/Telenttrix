import React from "react";
import Logo from "../../../assets/logo.png"
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  const [dropdown, setDropdown] = useState(null);

  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-20 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Telenttrix" className="h-12" />
      </div>
      <nav className="hidden md:flex items-center space-x-6 text-gray-700">
        <button className="bg-blue-800 text-white px-4 py-2 rounded-full">Home</button>
        <div className="relative" onMouseEnter={() => setDropdown('about')} onMouseLeave={() => setDropdown(null)}>
          <button className="flex items-end">About Us <span className="w-1 text-gray-400 font-light"><FaAngleDown/></span></button>
          {dropdown === 'about' && (
            <div className="absolute bg-white shadow-md py-2 w-40">
              <a href="#" className="block px-4 py-1">Company</a>
              <a href="#" className="block px-4 py-1">Leadership</a>
            </div>
          )}
        </div>
        <div className="relative" onMouseEnter={() => setDropdown('solutions')} onMouseLeave={() => setDropdown(null)}>
          <button>Our Solutions ▼</button>
          {dropdown === 'solutions' && (
            <div className="absolute bg-white shadow-md py-2 w-40">
              <a href="#" className="block px-4 py-1">Staffing</a>
              <a href="#" className="block px-4 py-1">Outsourcing</a>
            </div>
          )}
        </div>
        <div className="relative" onMouseEnter={() => setDropdown('careers')} onMouseLeave={() => setDropdown(null)}>
          <button>Careers ▼</button>
          {dropdown === 'careers' && (
            <div className="absolute bg-white shadow-md py-2 w-40">
              <a href="#" className="block px-4 py-1">Corporate Jobs</a>
              <a href="#" className="block px-4 py-1">Consultant Jobs</a>
            </div>
          )}
        </div>
        <button>Community First Initiatives</button>
        <div className="relative" onMouseEnter={() => setDropdown('resources')} onMouseLeave={() => setDropdown(null)}>
          <button>Resources ▼</button>
          {dropdown === 'resources' && (
            <div className="absolute bg-white shadow-md py-2 w-40">
              <a href="#" className="block px-4 py-1">Articles</a>
              <a href="#" className="block px-4 py-1">Blogs</a>
            </div>
          )}
        </div>
        <button>Contact Us</button>
      </nav>
      <div className="flex space-x-4 text-gray-700">
        
      </div>
    </header>
  );
};

export default Header;
