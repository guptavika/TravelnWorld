// import React, { useState } from "react";
// import goaImg from "../../public/Tourpackageimage/image6.jpg";
// import darjeelingImg from "../../public/Tourpackageimage/image5.jpg";
// import kashmirImg from "../../public/Tourpackageimage/image7.jpg";
// import dubaiImg from "../../public/Tourpackageimage/image2.jpg";
// import parisImg from "../../public/Tourpackageimage/image3.jpg";
// import tajmahalImg from "../../public/Tourpackageimage/image8.jpg";
 
// const data = [
//   { title: "Goa", desc: "Forem ipsum...", img: goaImg },
//   { title: "Darjeeling", desc: "Forem ipsum...", img: darjeelingImg },
//   { title: "Kashmir", desc: "Forem ipsum...", img: kashmirImg },
//   { title: "Dubai", desc: "Forem ipsum...", img: dubaiImg },
//   { title: "Paris", desc: "Forem ipsum...", img: parisImg },
//   { title: "Taj Mahal", desc: "Forem ipsum...", img: tajmahalImg },
// ];
 
// const PlacesToVisit = () => {
//   const [start, setStart] = useState(0);
 
//   const handleExplore = () => {
//     setStart((prev) => (prev + 1 > data.length - 3 ? 0 : prev + 1));
//   };
 
//   const visibleCards = data.slice(start, start + 3);
 
//   return (
//     <div className="px-6 sm:px-12 py-16">
//       <div className="flex justify-between items-center gap-96">
//         <h2 className="text-base sm:text-lg font-bold text-blue-700 ml-44 mb-3">
//         Places to Visits
//       </h2>
//       <button
//         onClick={handleExplore}
//         className="bg-blue-800 text-white px-5 py-1.5 rounded-md text-sm mr-44 mb-3"
//       >
//         Explore All
//       </button>
//       </div>
//       <div className="flex justify-center gap-4">
//         {visibleCards.map((item, index) => (
//           <div
//             key={index}
//             className="relative w-[350px] rounded-2xl overflow-hidden shadow-lg text-center"
//           >
//             {/* Heading inside top-left of first card */}
//             {index === 0 && (
//               <div className="absolute top-3 left-3 z-10 bg-white/80 px-2 py-1 rounded"></div>
//             )}
 
//             {/* Button inside top-right of third card */}
//             {index === 2 && <div className="absolute top-3 right-3 z-10"></div>}
 
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-[350px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
//               <h3 className="text-white text-lg font-bold">{item.title}</h3>
//               <p className="text-gray-300 text-sm">{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
     
//     </div>
//   );
// };
 
// export default PlacesToVisit;
 
//  import React, { useState, useEffect } from "react";
// import goaImg from "../assets/Tourpackageimage/image6.jpg";
// import darjeelingImg from "../assets/Tourpackageimage/image5.jpg";
// import kashmirImg from "../assets/Tourpackageimage/image7.jpg";
// import dubaiImg from "../assets/Tourpackageimage/image2.jpg";
// import parisImg from "../assets/Tourpackageimage/image3.jpg";
// import tajmahalImg from "../assets/Tourpackageimage/image8.jpg";
// import vietnamImg from "../assets/Tourpackageimage/image1.jpg";
// import kidsImg from "../assets/Tourpackageimage/image4.jpg";
// import React, { useState } from "react";
//   import goaImg from "../../public/Tourpackageimage/image6.jpg";
// import darjeelingImg from "../../public/Tourpackageimage/image5.jpg";
//  import kashmirImg from "../../public/Tourpackageimage/image7.jpg";
//  import dubaiImg from "../../public/Tourpackageimage/image2.jpg";
//  import parisImg from "../../public/Tourpackageimage/image3.jpg";
//  import tajmahalImg from "../../public/Tourpackageimage/image8.jpg";
//  import vietnamImg from "../../public/Tourpackageimage/image1.jpg";
//  import kidsImg from "../../public/Tourpackageimage/image4.jpg";
 
// const data = [
//   { title: "Goa", desc: "Forem ipsum...", img: goaImg },
//   { title: "Darjeeling", desc: "Forem ipsum...", img: darjeelingImg },
//   { title: "Kashmir", desc: "Forem ipsum...", img: kashmirImg },
//   { title: "Dubai", desc: "Forem ipsum...", img: dubaiImg },
//   { title: "Paris", desc: "Forem ipsum...", img: parisImg },
//   { title: "Taj Mahal", desc: "Forem ipsum...", img: tajmahalImg },
//   { title: "Vietnam", desc: "Forem ipsum...", img: vietnamImg },
//   { title: "Kids Special", desc: "Forem ipsum...", img: kidsImg },
// ];
 
// const PlacesToVisit = () => {
//   const [start, setStart] = useState(0);
  
//   const [cardsToShow, setCardsToShow] = useState(4);
//   const [isMobile, setIsMobile] = useState(false);
 
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 640);
     
//       if (width < 480) {
//         setCardsToShow(1);
//       } else if (width < 768) {
//         setCardsToShow(2);
//       } else if (width < 1024) {
//         setCardsToShow(3);
//       } else {
//         setCardsToShow(4);
//       }
//     };
 
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
 
//   const handleNext = () => {
//     setStart((prev) => (prev + 1 > data.length - cardsToShow ? 0 : prev + 1));
//   };
 
//   const handlePrev = () => {
//     setStart((prev) => (prev - 1 < 0 ? data.length - cardsToShow : prev - 1));
//   };
 
//   const visibleCards = data.slice(start, start + cardsToShow);
 
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
//         <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
//           Places to Visit
//         </h2>
//         <button
//           onClick={handleNext}
//           className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg text-sm sm:text-base transition-colors duration-300"
//         >
//           Explore All
//         </button>
//       </div>
 
//       <div className="relative">
//         {/* Navigation Arrows */}
//         {!isMobile && (
//           <>
//             <button
//               onClick={handlePrev}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transform transition-transform hover:scale-110"
//               aria-label="Previous"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button
//               onClick={handleNext}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transform transition-transform hover:scale-110"
//               aria-label="Next"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </>
//         )}
 
//         {/* Cards Container */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible">
//           {visibleCards.map((item, index) => (
//             <div
//               key={index}
//               className="relative rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl"
//             >
//               {/* Image with hover effect */}
//               <div className="overflow-hidden aspect-square">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
//                   loading="lazy"
//                 />
//               </div>
 
//               {/* Overlay content */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
//                 <h3 className="text-white text-lg sm:text-xl font-bold">{item.title}</h3>
//                 <p className="text-gray-200 text-sm sm:text-base">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
 
//         {/* Mobile Navigation Dots */}
//         {isMobile && (
//           <div className="flex justify-center mt-6 gap-2">
//             {Array.from({ length: data.length - cardsToShow + 1 }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setStart(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${start === index ? 'bg-blue-800 w-6' : 'bg-gray-300'}`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
 
// export default PlacesToVisit;
import React, { useState, useEffect } from "react";
 import goaImg from "../Assest/Tourpackageimage/image6.jpg";
import darjeelingImg from "../Assest/Tourpackageimage/image5.jpg";
 import kashmirImg from "../Assest/Tourpackageimage/image7.jpg";
import dubaiImg from "../Assest/Tourpackageimage/image2.jpg";
import parisImg from "../Assest/Tourpackageimage/image3.jpg";
import tajmahalImg from "../Assest/Tourpackageimage/image8.jpg";
import vietnamImg from "../Assest/Tourpackageimage/image1.jpg";
import kidsImg from "../Assest/Tourpackageimage/image4.jpg";
 
const data = [
  { title: "Goa", desc: "Forem ipsum...", img: goaImg },
  { title: "Darjeeling", desc: "Forem ipsum...", img: darjeelingImg },
  { title: "Kashmir", desc: "Forem ipsum...", img: kashmirImg },
  { title: "Dubai", desc: "Forem ipsum...", img: dubaiImg },
  { title: "Paris", desc: "Forem ipsum...", img: parisImg },
  { title: "Taj Mahal", desc: "Forem ipsum...", img: tajmahalImg },
  { title: "Vietnam", desc: "Forem ipsum...", img: vietnamImg },
  { title: "Kids Special", desc: "Forem ipsum...", img: kidsImg },
];
 
const PlacesToVisit = () => {
  const [start, setStart] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
     
      if (width < 480) {
        setCardsToShow(1);
      } else if (width < 768) {
        setCardsToShow(2);
      } else if (width < 1024) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };
 
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  const handleNext = () => {
    setStart((prev) => (prev + 1 > data.length - cardsToShow ? 0 : prev + 1));
  };
 
  const handlePrev = () => {
    setStart((prev) => (prev - 1 < 0 ? data.length - cardsToShow : prev - 1));
  };
 
  const visibleCards = data.slice(start, start + cardsToShow);
 
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
          Places to Visit
        </h2>
        <button
          onClick={handleNext}
          className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg text-sm sm:text-base transition-colors duration-300"
        >
          Explore All
        </button>
      </div>
 
      <div className="relative">
        {/* Navigation Arrows */}
        {!isMobile && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transform transition-transform hover:scale-110"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transform transition-transform hover:scale-110"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
 
        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible">
          {visibleCards.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl"
            >
              {/* Image with hover effect */}
              <div className="overflow-hidden aspect-square">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
 
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-bold">{item.title}</h3>
                <p className="text-gray-200 text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
 
        {/* Mobile Navigation Dots */}
        {isMobile && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: data.length - cardsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStart(index)}
                className={`w-3 h-3 rounded-full transition-all ${start === index ? 'bg-blue-800 w-6' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
 
export default PlacesToVisit;
 
 