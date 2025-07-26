
// import React from 'react'
// import logo from "../assets/Img/logo.png"
// import { navbarLinks } from '../constants/NavbarLinks';

// const Navbar = () => {
//   return (
//     <div  className='flex  flex-col sm:flex-row items-center gap-4 bg-red-500 justify-between  sticky top-0 z-50 '>
//       <header className="bg-white px-2 py-3 z-[70] w-full sticky top-0 z-50;">
//         <nav className="flex justify-between items-center mx-auto sticky top-0 z-50;">
//           <a href="/">
//             <div className="z-50">
//               <img
//                 className="w-20 cursor-pointer ml-10"
//                 src={logo}
//                 alt="Logo"
//               />
//             </div>
//           </a>

//           <div className="duration-300 lg:static absolute bg-white lg:min-h-fit left-0 z-40 top-[60px] lg:w-auto w-full flex items-center px-5 lg:px-0">
//             <ul className="flex font-medium py-3 lg:flex-row flex-col lg:items-center gap-10 w-full lg:w-auto items-center justify-center">
//               {navbarLinks.map((link, index) => {
//                 if (link.type === "button") {
//                   return (
//                     <li key={index} className="relative group z-50 md:z-auto">
//                       <button className="hover:text-[#eb6734] text-base font-semibold cursor-pointer">
//                         {link.label}
//                       </button>
//                     </li>
//                   );
//                 }
//                 if (link.type === "tripIdeas") {
//                   return (
//                     <li key={index}>
//                       <button className="bg-[#071835] flex items-center gap-1 justify-center text-white px-2 py-2 rounded-xl hover:bg-[#1a2f53] text-xl relative">
//                         {link.label}
//                       </button>
//                     </li>
//                   );
//                 }
//                 if (link.href && link.target === "_blank") {
//                   return (
//                     <li key={index}>
//                       <a
//                         className="bg-gradient-to-r from-blue-500 to-blue-900 text-white px-4 py-2 rounded-md"
//                         href={link.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {link.label}
//                       </a>
//                     </li>
//                   );
//                 }
//                 return (
//                   <li key={index} className="relative">
//                     <a
//                       className="hover:text-[#eb6734] text-base font-semibold"
//                       href={link.href}
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 );
//               })}

//               {/* Mobile-only Trip Planners */}
//               <li className="flex items-center gap-6 lg:mt-0 lg:hidden">
//                 <button className="bg-[#163263] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#3d71cc] text-xl">
//                   Trip Planners
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Hamburger or Close icon */}
//           <div className="text-2xl cursor-pointer lg:hidden z-50">
//             <svg
//               className="h-6 w-6 text-gray-700 transition-transform transform rotate-90"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </div>

//           {/* Desktop Trip Planners */}
//           <div className="flex items-center gap-6 hidden lg:flex md:hidden">
//             <button className="bg-[#163263] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#3d71cc] text-xl">
//               Trip Planners
//             </button>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }

// export default Navbar;
//<<<<<<<<<<<<<<<<<<<<........................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// import React from 'react';
// import logo from "../../public/logo.png";
// import { navbarLinks } from '../constants/NavbarLinks';

// const Navbar = () => {
//   return (
//     <div className='flex flex-col sm:flex-row items-center gap-4 bg-red-500 justify-between sticky top-0 z-50'>
//       <header className="bg-white px-2 py-3 z-[70] w-full sticky top-0 z-50">
//         <nav className="flex justify-between items-center mx-auto sticky top-0 z-50">
//           <a href="/">
//             <div className="z-50">
//               <img className="w-20 cursor-pointer ml-10" src={logo} alt="Logo" />
//             </div>
//           </a>

//           <div className="duration-300 lg:static absolute bg-white lg:min-h-fit left-0 z-40 top-[60px] lg:w-auto w-full flex items-center px-5 lg:px-0">
//             <ul className="flex font-medium py-3 lg:flex-row flex-col lg:items-center gap-10 w-full lg:w-auto items-center justify-center">
//               <li className="relative">
//                 <a className="hover:text-[#eb6734] text-base font-semibold" href="/">Home</a>
//               </li>
//               <li className="relative">
//                 <a className="hover:text-[#eb6734] text-base font-semibold" href="/about">About</a>
//               </li>
//               <li className="relative">
//                 <span className="hover:text-[#eb6734] text-base font-semibold cursor-pointer">Packages</span>
//               </li>
//               <li className="relative">
//                 <span className="hover:text-[#eb6734] text-base font-semibold cursor-pointer">Destination</span>
//               </li>
//               <li className="relative">
//                 <a className="hover:text-[#eb6734] text-base font-semibold" href="/blog">Blogs</a>
//               </li>
//               <li className="relative">
//                 <a className="hover:text-[#eb6734] text-base font-semibold" href="/testimonials">Testimonials</a>
//               </li>
//               <li className="relative">
//                 <a className="hover:text-[#eb6734] text-base font-semibold" href="/b2b-login">B2B Login</a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Button */}
//           <div className="hidden lg:flex items-center">
//             <a className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700" href="/contact">Contact</a>
//           </div>

//           {/* Hamburger or Close icon */}
//           {/* <div className="text-2xl cursor-pointer lg:hidden z-50">
//             <svg className="h-6 w-6 text-gray-700 transition-transform transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </div> */}

//           {/* Desktop Trip Planners */}
//           {/* <div className="flex items-center gap-6 hidden lg:flex md:hidden">
//             <button className="bg-[#163263] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#3d71cc] text-xl">
//               Trip Planners
//             </button>
//           </div> */}
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import logo from "/logo.png"; // ✅ use /logo.png because it’s in public/
// import { navbarLinks } from '../constants/NavbarLinks';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='flex flex-col sm:flex-row items-center gap-4 justify-between sticky top-0 z-50'>
//       <header className="bg-white px-2 py-3 z-[70] w-full sticky top-0">
//         <nav className="flex justify-between items-center mx-auto relative">
//           <a href="/">
//             <div className="z-50">
//               <img className="w-20 cursor-pointer ml-4" src={logo} alt="Logo" />
//             </div>
//           </a>

//           {/* Desktop Links */}
//           <div
//             className={`duration-300 lg:static absolute bg-white left-0 top-[60px] lg:w-auto w-full flex items-center px-5 lg:px-0 ${
//               isOpen ? 'block' : 'hidden'
//             } lg:flex`}
//           >
//             <ul className="flex font-medium py-3 lg:flex-row flex-col lg:items-center gap-10 w-full lg:w-auto items-center justify-center">
//               <li><a className="hover:text-[#eb6734] text-base font-semibold" href="/">Home</a></li>
//               <li><a className="hover:text-[#eb6734] text-base font-semibold" href="/about">About</a></li>
//               <li><span className="hover:text-[#eb6734] text-base font-semibold cursor-pointer">Packages</span></li>
//               <li><span className="hover:text-[#eb6734] text-base font-semibold cursor-pointer">Destination</span></li>
//               <li><a className="hover:text-[#eb6734] text-base font-semibold" href="/blog">Blogs</a></li>
//               <li><a className="hover:text-[#eb6734] text-base font-semibold" href="/testimonials">Testimonials</a></li>
//               <li><a className="hover:text-[#eb6734] text-base font-semibold" href="/b2b-login">B2B Login</a></li>
//            {/* Desktop Contact Button */}
//           <div className="hidden lg:flex items-center">
//             <a className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700" href="/contact">Contact</a>
//           </div>
//             </ul>
//           </div>

//           Desktop Contact Button
//           <div className="hidden lg:flex items-center">
//             <a className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700" href="/contact">Contact</a>
//           </div>

//           {/* Hamburger Button */}
//           <div
//             className="text-3xl cursor-pointer lg:hidden z-50 px-4"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? (
//               // X icon
//               <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               // Hamburger icon
//               <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import logo from "/logo.png";
import { navbarLinks } from '../constants/NavbarLinks';
// import { Link } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row items-center gap-4 justify-between sticky top-0 z-50'>
      <header className="bg-white px-2 py-3 z-[70] w-full sticky top-0">
        <nav className="flex justify-between items-center mx-auto relative">
          <a href="/">
            <div className="z-50">
              <img className="w-20 cursor-pointer ml-4" src={logo} alt="Logo" />
            </div>
          </a>

          {/* Nav Links */}
          <div
            className={`duration-300 lg:static absolute bg-white left-0 top-[60px] lg:w-auto w-full flex items-center px-5 lg:px-0 ${
              isOpen ? 'block' : 'hidden'
            } lg:flex`}
          >
            <ul className="flex font-medium py-3 lg:flex-row flex-col lg:items-center gap-10 w-full lg:w-auto items-center justify-center">



              <li><Link className="hover:text-[#eb6734] text-base font-semibold" to="/">Home</Link></li>




              <li><Link to="/about-us" className="hover:text-[#eb6734] text-base font-semibold" >About</Link></li>





              <li><span className="hover:text-[#eb6734] text-base font-semibold cursor-pointer">Packages</span></li>
              <li><span className="hover:text-[#eb6734] text-base font-semibold cursor-pointer">Destination</span></li>
              <li><a className="hover:text-[#eb6734] text-base font-semibold" href="/Blogs">Blogs</a></li>
              <li><a className="hover:text-[#eb6734] text-base font-semibold" href="/testimonials">Testimonials</a></li>
              <li><a className="hover:text-[#eb6734] text-base font-semibold" href="/b2b-login">B2B Login</a></li>
              <li className="lg:hidden"><a className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700" href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center">
            <a className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700" href="/contact">Contact</a>
          </div>

          {/* Hamburger Button */}
          <div
            className="text-3xl cursor-pointer lg:hidden z-50 px-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
