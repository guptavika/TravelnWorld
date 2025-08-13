import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
 import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#00004a] text-white px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
       
        {/* Left Column */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Policy</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Privacy Policy</li>
            <li><Link to="/TermsAndConditions">Terms Of Use</Link></li>
          </ul>
          <h4 className="font-semibold text-lg mt-6 mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li> <Link to="/contact"> Contact Us </Link> </li>
            <li><Link to="/about-us"> About </Link></li>
          </ul>
        </div>
 
        {/* Middle Column */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
             <li><Link to="/"> Home </Link></li>
            <li>Trending Destination</li>
            <li>Popular Destination</li>
              <li><Link to="/destination/domestic"> Domestic Destination </Link></li>
            

               <li><Link to="/destination/international"> International </Link></li>
          </ul>
        </div>
 
        {/* Right Column */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us on</h4>
          <div className="flex gap-4 mb-4">
  <a
    href="https://www.facebook.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 text-xl hover:scale-110 transition-transform"
  >
    <FaFacebookF />
  </a>
 
  <a
    href="https://www.instagram.com/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-500 text-xl hover:scale-110 transition-transform"
  >
    <FaInstagram />
  </a>
 
  <a
    href="https://www.youtube.com/yourchannel"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-600 text-xl hover:scale-110 transition-transform"
  >
    <FaYoutube />
  </a>
</div>
 
          <h4 className="font-semibold text-lg mb-2"> <Link to="/B2bLogin"> B2BLogin </Link></h4>
          <p className="text-sm text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email id"
              className="p-2 rounded-l-md text-black flex-1"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 rounded-r-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
 
      <div className="text-center text-sm text-gray-300 mt-10">
        © Travelnworld 2025, All rights reserved.
      </div>
    </footer>
  );
};
 
export default Footer;
 