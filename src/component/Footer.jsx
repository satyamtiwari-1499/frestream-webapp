import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer w-full bg-[#023A63] font-black text-2xl pt-14  p-16">
      <div className="footer-container text-white  flex flex-col gap-6 items-center justify-center px-4">
        <div className="social flex  gap-8 flex-wrap justify-center">
          {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
            <Icon 
              key={i} 
              size={30} 
              className="cursor-pointer transition-colors duration-300 hover:text-red-500" 
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-col md:justify-center md:gap-2 gap-6 text-center">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-14">
            <li className="cursor-pointer border-b border-[#023A68] hover:text-gray-500/100   hover:border-white hover:border-b transition-colors duration-300">Audio Description</li>
            <li className="cursor-pointer border-b border-[#023A68] hover:text-gray-500/100   hover:border-white hover:border-b transition-colors duration-300">Help Center</li>
            <li className="cursor-pointer border-b border-[#023A68] hover:text-gray-500/100   hover:border-white hover:border-b transition-colors duration-300">Gift Cards</li>
            <li className="cursor-pointer border-b border-[#023A68]  hover:text-gray-500/100  hover:border-white  hover:border-b transition-colors duration-300">Media Centre</li>
          </ul>

          <ul className="flex flex-wrap justify-center gap-6 md:gap-14">
            <li className="cursor-pointer border-b border-[#023A68] hover:text-gray-500 hover:border-b  hover:border-white transition-colors duration-300">Investor Relation</li>
            <li className="cursor-pointer border-b border-[#023A68] hover:text-gray-500 hover:border-b  hover:border-white transition-colors duration-300">Jobs</li>
            <li className="cursor-pointer border-b border-[#023A68] hover:text-gray-500 hover:border-b  hover:border-white transition-colors duration-300">Terms of use</li>
            <li className="cursor-pointer border-b border-[#023A68] hover:text-gray-500 hover:border-b  hover:border-white transition-colors duration-300">Privacy</li>
          </ul>

          <ul className=" hidden md:flex flex-wrap justify-center gap-6 md:gap-14">
            <li className="cursor-pointer border-b border-[#023A68] hover:text-gray-500 hover:border-b  hover:border-white transition-colors duration-300">Legal Notices</li>
            <li className="cursor-pointer border-b border-[#023A68] hover:text-gray-500 hover:border-b  hover:border-white transition-colors duration-300">Cookies Preferences</li>
            <li className="cursor-pointer border-b border-[#023A68] hover:text-gray-500 hover:border-b  hover:border-white transition-colors duration-300">Corporate Information</li>
            <li className="cursor-pointer border-b border-[#023A68] hover:text-gray-500 hover:border-b  hover:border-white transition-colors duration-300">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
