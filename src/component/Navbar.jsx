import React, { useState } from "react";
import { FaBars, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { PiSignOutBold } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navLinks = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "Browse by Language",
  ];

  return (
    <>
      <nav className=" backdrop-blur-sm bg-[#023A68] h-[14vh] text-2xl font-black text-white flex items-center justify-between md:justify-center md:gap-28 px-6 md:px-8  z-50 fixed top-0 left-0 border-b  w-full ">
        
       

        <div className="hidden md:flex items-center  gap-6">
          {navLinks.map((link, index) => (
            <Link
              to="/"
              key={index}
              className="cursor-pointer rounded-2xl px-4 py-1 hover:bg-white hover:text-black transition duration-300"
            >
              {link}
            </Link>
          ))}
          <button className="flex items-center gap-2 px-4 py-1 hover:bg-white hover:text-gray-400 transition duration-300">
           <FaSignOutAlt/>
          </button>
        </div>

        <button onClick={toggleMenu} className="md:hidden z-50">
          {menuOpen ? (
            <FiX size={28} color="white" />
          ) : (
            <FaBars size={28} color="white" />
          )}
        </button>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#023A68] text-2xl text-white flex flex-col items-center justify-center z-40 backdrop-blur-md transition-transform duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="space-y-6  font-medium">
          {navLinks.map((link, index) => (
            <p
              key={index}
              className="hover:text-green-400 cursor-pointer transition"
            >
              {link}
            </p>
          ))}
          <p className="hover:text-green-400 cursor-pointer flex items-center gap-3">
            Browse by Language
          </p>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
