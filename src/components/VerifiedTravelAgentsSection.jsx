// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const VerifiedTravelAgentsSection = ({
//   title = "Verified Travel Agents",
//   description = "",
//   showDots = true,
//   autoSlide = true,
//   slideInterval = 5000,
//   customClass = "",
// }) => {
//   // ✅ Hardcoded agents (or you can pass via props instead)
//   const agents = [
//     { image: "https://www.easemytrip.com/images/offer-img/emt2023-lp.png", name: "CWT", link: "#" },
//     {
//       image: "https://images.r.cruisecritic.com/features/ships/top-25-tips/travel-agent-pros.jpg",
//       name: "Easy My Trip",
//       link: "#",
//     },
//     {
//       image: "https://www.easemytrip.com/offer-img/emt2021-lp.png",
//       name: "Expedia Group",
//       link: "#",
//     },
//     {
//       image: "https://www.easemytrip.com/images/offer-img/vistara-13dec23-lp.png",
//       name: "Expedia",
//       link: "#",
//     },
//     {
//       image: "https://www.bollywoodshaadis.com/img/article-2022925812434645826000.jpg",
//       name: "Ixigo",
//       link: "#",
//     },
//     {
//       image: "https://www.easemytrip.com/images/bus-img/flight_new_OG_tag.png",
//       name: "Kesari",
//       link: "#",
//     },
//     {
//       image: "https://www.easemytrip.com/images/offer-img/domestic-flight-lp.png",
//       name: "Travel Guru",
//       link: "#",
//     },
//     // Add more if needed
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const nextSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === adjustedAgents.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? adjustedAgents.length - 1 : prev - 1
//     );
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (!autoSlide) return;
//     const interval = setInterval(() => {
//       nextSlide();
//     }, slideInterval);
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const getAgentsPerSlide = () => {
//     if (windowWidth < 768) return 2;
//     if (windowWidth < 992) return 4;
//     return 6;
//   };

//   const getAdjustedAgents = () => {
//     const perSlide = getAgentsPerSlide();
//     const newGroups = [];
//     for (let i = 0; i < agents.length; i += perSlide) {
//       newGroups.push(agents.slice(i, i + perSlide));
//     }
//     return newGroups;
//   };

//   const adjustedAgents = getAdjustedAgents();

//   return (
//     <section
//       className={`w-full bg-gray-50 flex flex-col items-center justify-center px-5 mx-auto pt-7 ${customClass}`}
//     >
//       <div className="max-w-7xl w-full mx-auto">
//         <div className="text-center mb-10">
//           <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative inline-block">
//             {title}
//             <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-400 to-red-300 rounded"></span>
//           </h3>
//           {description && (
//             <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
//               {description}
//             </p>
//           )}
//         </div>

//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {adjustedAgents.map((agentGroup, groupIndex) => (
//               <div
//                 key={groupIndex}
//                 className="min-w-full flex justify-center flex-wrap"
//               >
//                 {agentGroup.map((agent, index) => (
//                   <div
//                     key={index}
//                     className="flex justify-center items-center p-2 border-[1.5px] border-dashed border-gray-500 m-2"
//                     style={{ minWidth: "150px", maxWidth: "150px" }}
//                   >
//                     <a
//                       href={agent.link || "#"}
//                       className="flex justify-center items-center h-full w-full"
//                     >
//                       <img
//                         src={agent.image}
//                         alt={agent.name}
//                         className="max-h-full max-w-full"
//                       />
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {windowWidth >= 768 && (
//             <>
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-10 transition-all duration-300 text-red-400 hover:bg-red-400 hover:text-white"
//               >
//                 <FaChevronLeft />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-10 transition-all duration-300 text-red-400 hover:bg-red-400 hover:text-white"
//               >
//                 <FaChevronRight />
//               </button>
//             </>
//           )}
//         </div>

//         {showDots && (
//           <div className="flex justify-center mt-8">
//             {adjustedAgents.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-3 h-3 rounded-full border-none m-0 p-0 cursor-pointer transition-all duration-300 mx-1 ${
//                   currentSlide === index ? "bg-red-400" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default VerifiedTravelAgentsSection;

// import React, { useRef, useState } from 'react';

// const agents = [
//   {
//     name: "Claire Robinson",
//     verified: true,
//     specialization: "Honeymoon Packages",
//     rating: 4.8,
//     reviews: 120,
//     location: "Mumbai, India",
//     photo: "https://via.placeholder.com/100"
//   },
//   {
//     name: "Raj Malhotra",
//     verified: true,
//     specialization: "Adventure Tours",
//     rating: 4.7,
//     reviews: 95,
//     location: "Delhi, India",
//     photo: "https://via.placeholder.com/100"
//   },
//   {
//     name: "Sarah Khan",
//     verified: true,
//     specialization: "Luxury Cruises",
//     rating: 4.9,
//     reviews: 150,
//     location: "Goa, India",
//     photo: "https://via.placeholder.com/100"
//   },
//   {
//     name: "Raj Malhotra",
//     verified: true,
//     specialization: "Adventure Tours",
//     rating: 4.7,
//     reviews: 95,
//     location: "Delhi, India",
//     photo: "https://via.placeholder.com/100"
//   },
//   {
//     name: "Michael Patel",
//     verified: true,
//     specialization: "Budget Trips",
//     rating: 4.6,
//     reviews: 80,
//     location: "Bangalore, India",
//     photo: "https://via.placeholder.com/100"
//   }
// ];

// export default function VerifiedTravelAgents() {
//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const scrollLeft = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollLeft -= 300;
//       setActiveIndex((prev) => Math.max(prev - 1, 0));
//     }
//   };

//   const scrollRight = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollLeft += 300;
//       setActiveIndex((prev) => Math.min(prev + 1, agents.length - 1));
//     }
//   };

//   return (
//     <div className="relative p-6 overflow-hidden">
//       <h2 className="text-center text-3xl font-bold mb-8 text-[#01055b]">
//         Verified Transports
//       </h2>
//       <button onClick={scrollLeft} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10">⟨</button>
//       <div
//         ref={containerRef}
//         className="flex overflow-x-scroll scroll-smooth space-x-4"
//         style={{ scrollbarWidth: 'none' }}
//       >
//         {agents.map((agent, index) => (
//           <div
//             key={index}
//             className="min-w-[250px] flex-shrink-0 bg-white shadow-md rounded-lg p-2 text-center"
//           >
//             <img
//               src={agent.photo}
//               alt={agent.name}
//               className="w-24 h-24 rounded-full mx-auto mb-4"
//             />
//             <h2 className="text-lg font-bold mb-1">{agent.name}</h2>
//             {agent.verified && (
//               <p className="text-green-600 font-medium">✔ Verified</p>
//             )}
//             <p className="text-gray-700 mb-1">{agent.specialization}</p>
//             <p className="text-yellow-500 mb-1">⭐ {agent.rating} ({agent.reviews} reviews)</p>
//             <p className="text-gray-500 mb-3">📍 {agent.location}</p>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Profile</button>
//           </div>
//         ))}
//       </div>
//       <button onClick={scrollRight} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10">⟩</button>
//       <div className="flex justify-center mt-4 space-x-2">
        
//         {agents.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === activeIndex ? 'bg-blue-600' : 'bg-gray-400'
//             }`}
//           ></div>
//         ))}
//       </div>
//       <style jsx>{`
//         div::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }


