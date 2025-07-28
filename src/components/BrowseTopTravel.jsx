// import React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
 
// const travelData = [
//   {
//     id: 1,
//     title: "Star Link Holidays",
//     agent: "Abcd",
//     phone: "1234567890",
//     email: "abcd@gmail.com",
//     image: "https://media.istockphoto.com/id/1440399157/photo/international-airport-terminal-asian-beautiful-woman-with-luggage-and-walking-in-airport.jpg?s=2048x2048&w=is&k=20&c=27WCQ4KJ1e9AGQT9xuvmXuJlMAcJ92wkidj38G45Ubs=",
//   },
//   {
//     id: 2,
//     title: "Star Link Holidays",
//     agent: "Abcd",
//     phone: "1234567890",
//     email: "abcd@gmail.com",
//     image: "https://media.istockphoto.com/id/1465916031/photo/the-way-to-the-plane.jpg?s=612x612&w=0&k=20&c=jTalv0DdGZa76E6qrSjH-2rmTp2NNHvdgSbQBED3pP8=",
//   },
//   {
//     id: 3,
//     title: "Star Link Holidays",
//     agent: "Abcd",
//     phone: "1234567890",
//     email: "abcd@gmail.com",
//     image: "https://media.istockphoto.com/id/933815798/video/passengers-walking-in-a-glass-jet-bridge-at-the-airport.avif?s=640x640&k=20&c=ZM1lzSH92h6RWPwi0sS3y0qOaVwXxbqzpTE8J-g_yB4=",
//   },
// ];
 
// const TravelCard = ({ item }) => (
//   <div className="w-[350px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden mx-2 border border-gray-200">
//     {/* Image container with consistent 12px margins */}
//     <div className="w-full h-48 p-3 bg-gray-50">
//       <div className="w-full h-full overflow-hidden rounded-lg">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//       </div>
//     </div>
//     <div className="p-4">
//       <h3 className="text-md font-semibold text-gray-900">{item.title}</h3>
//       <p className="text-sm text-red-500 font-semibold mt-1">{item.agent}</p>
//       <div className="mt-3 flex items-center text-sm text-gray-700 gap-2">
//         <FaPhoneAlt className="text-blue-500" /> {item.phone}
//       </div>
//       <div className="flex items-center text-sm text-gray-700 gap-2 mt-2">
//         <FaEnvelope className="text-blue-500" /> {item.email}
//       </div>
//     </div>
//   </div>
// );
 
// const TopTravelSlider = () => {
//   const [currentIndex, setCurrentIndex] = React.useState(0);
 
//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % travelData.length);
//   };
 
//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + travelData.length) % travelData.length);
//   };
 
//   // Display exactly 3 cards at a time
//   const visibleCards = [];
//   for (let i = 0; i < 3; i++) {
//     const index = (currentIndex + i) % travelData.length;
//     visibleCards.push(travelData[index]);
//   }
 
//   return (
//     <div className="px-4 py-10 bg-white">
//       <h2 className="text-2xl font-semibold text-center text-blue-900 mb-8">
//         Browse Top Travel
//       </h2>
 
//       <div className="relative max-w-[1020px] mx-auto">
//         <div className="flex justify-center items-center gap-4">
//           {/* Left Arrow */}
//           <button
//             onClick={handlePrev}
//             className="bg-white rounded-full shadow-md p-2 cursor-pointer hover:bg-gray-100 z-10 border border-gray-200"
//           >
//             <ChevronLeft className="text-blue-600" size={24} />
//           </button>
 
//           {/* Visible Cards */}
//           <div className="flex gap-4">
//             {visibleCards.map((item) => (
//               <TravelCard key={item.id} item={item} />
//             ))}
//           </div>
 
//           {/* Right Arrow */}
//           <button
//             onClick={handleNext}
//             className="bg-white rounded-full shadow-md p-2 cursor-pointer hover:bg-gray-100 z-10 border border-gray-200"
//           >
//             <ChevronRight className="text-blue-600" size={24} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default TopTravelSlider;
 import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
 
const travelData = [
  {
    id: 1,
    title: "Star Link Holidays",
    agent: "Abcd",
    phone: "1234567890",
    email: "abcd@gmail.com",
    image: "https://media.istockphoto.com/id/1440399157/photo/international-airport-terminal-asian-beautiful-woman-with-luggage-and-walking-in-airport.jpg?s=2048x2048&w=is&k=20&c=27WCQ4KJ1e9AGQT9xuvmXuJlMAcJ92wkidj38G45Ubs=",
  },
  {
    id: 2,
    title: "Star Link Holidays",
    agent: "Abcd",
    phone: "1234567890",
    email: "abcd@gmail.com",
    image: "https://media.istockphoto.com/id/1465916031/photo/the-way-to-the-plane.jpg?s=612x612&w=0&k=20&c=jTalv0DdGZa76E6qrSjH-2rmTp2NNHvdgSbQBED3pP8=",
  },
  {
    id: 3,
    title: "Star Link Holidays",
    agent: "Abcd",
    phone: "1234567890",
    email: "abcd@gmail.com",
    image: "https://media.istockphoto.com/id/933815798/video/passengers-walking-in-a-glass-jet-bridge-at-the-airport.avif?s=640x640&k=20&c=ZM1lzSH92h6RWPwi0sS3y0qOaVwXxbqzpTE8J-g_yB4=",
  },
  {
    id: 4,
    title: "Star Link Holidays",
    agent: "Abcd",
    phone: "1234567890",
    email: "abcd@gmail.com",
    image: "https://media.istockphoto.com/id/933815798/video/passengers-walking-in-a-glass-jet-bridge-at-the-airport.avif?s=640x640&k=20&c=ZM1lzSH92h6RWPwi0sS3y0qOaVwXxbqzpTE8J-g_yB4=",
  },
];
 
const TravelCard = ({ item }) => (
  <div className="w-full sm:w-[250px] md:w-[280px] lg:w-[240px] xl:w-[280px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden mx-2 border border-gray-200">
    {/* Image container with consistent 12px margins */}
    <div className="w-full h-48 p-3 bg-gray-50">
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-md font-semibold text-gray-900">{item.title}</h3>
      <p className="text-sm text-red-500 font-semibold mt-1">{item.agent}</p>
      <div className="mt-3 flex items-center text-sm text-gray-700 gap-2">
        <FaPhoneAlt className="text-blue-500" /> {item.phone}
      </div>
      <div className="flex items-center text-sm text-gray-700 gap-2 mt-2">
        <FaEnvelope className="text-blue-500" /> {item.email}
      </div>
    </div>
  </div>
);
 
const TopTravelSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [cardsToShow, setCardsToShow] = React.useState(4); // Default to 4 cards
 
  // Handle window resize to adjust number of visible cards
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Mobile
        setCardsToShow(1);
      } else if (window.innerWidth < 768) { // Small tablet
        setCardsToShow(2);
      } else if (window.innerWidth < 1024) { // Tablet/Laptop
        setCardsToShow(3);
      } else { // Desktop (≥1024px)
        setCardsToShow(4);
      }
    };
 
    // Set initial value
    handleResize();
   
    // Add event listener
    window.addEventListener('resize', handleResize);
   
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % travelData.length);
  };
 
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + travelData.length) % travelData.length);
  };
 
  // Display the appropriate number of cards based on screen size
  const visibleCards = [];
  for (let i = 0; i < Math.min(cardsToShow, travelData.length); i++) {
    const index = (currentIndex + i) % travelData.length;
    visibleCards.push(travelData[index]);
  }
 
  return (
    <div className="px-4 py-10 bg-white">
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-blue-900 mb-8">
        Browse Top Travel
      </h2>
 
      <div className="relative max-w-[1400px] mx-auto">
        <div className="flex justify-center items-center gap-2 sm:gap-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="bg-white rounded-full shadow-md p-2 sm:p-2 cursor-pointer hover:bg-gray-100 z-10 border border-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-blue-600" size={24} />
          </button>
 
          {/* Visible Cards */}
          <div className="flex gap-2 sm:gap-4 overflow-x-auto w-full justify-center sm:justify-start">
            {visibleCards.map((item) => (
              <TravelCard key={item.id} item={item} />
            ))}
          </div>
 
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="bg-white rounded-full shadow-md p-2 sm:p-2 cursor-pointer hover:bg-gray-100 z-10 border border-gray-200"
            aria-label="Next slide"
          >
            <ChevronRight className="text-blue-600" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default TopTravelSlider;
 