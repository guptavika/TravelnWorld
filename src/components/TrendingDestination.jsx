// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
 
// const TrendingDestinations = () => {
//   const [isVisible, setIsVisible] = useState(false);
 
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);
 
//   const destinations = [
//     // First row
//     {
//       id: 1,
//       slug: "andaman",
//       name: "Andaman",
//       description: "Pristine beaches & coral reefs",
//       images: [
//         "https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
//         "https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       ],
//     },
//     {
//       id: 2,
//       slug: "vietnam",
//       name: "Vietnam",
//       description: "Vibrant culture & landscapes",
//       images: [
//         "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         "https://images.unsplash.com/photo-1526653057-f3f40ad7b724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       ],
//     },
//     {
//       id: 3,
//       slug: "kashmir",
//       name: "Kashmir",
//       description: "Paradise on earth",
//       images: [
//         "https://plus.unsplash.com/premium_photo-1697730277839-440df1a4415f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D",
//         "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D",
//         "https://plus.unsplash.com/premium_photo-1697730150003-26a1d469adb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D",
//       ],
//     },
//     {
//       id: 4,
//       slug: "leh-ladakh",
//       name: "Leh-ladakh",
//       description: "Majestic Himalayan beauty",
//       images: [
//         "https://images.unsplash.com/photo-1569670380685-4582bf29a24a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3JpJTIwbGFua2F8ZW58MHx8MHx8fDA%3D",
//         "https://images.unsplash.com/photo-1593118845043-359e5f628214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFkYWtofGVufDB8fDB8fHww",
//         "https://images.unsplash.com/photo-1709874859086-b50e500f4136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhZGFraHxlbnwwfHwwfHx8MA%3D%3D",
//       ],
//     },
//     // Second row
//     {
//       id: 5,
//       slug: "sri-lanka",
//       name: "Sri Lanka",
//       description: "Teardrop of the Indian Ocean",
//       images: [
//         "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
//         "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       ],
//     },
//     {
//       id: 6,
//       slug: "thailand",
//       name: "Thailand",
//       description: "Land of smiles & temples",
//       images: [
//         "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
//         "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       ],
//     },
//     {
//       id: 7,
//       slug: "uttarakhand",
//       name: "Uttarakhand",
//       description: "Devbhumi - Land of the Gods",
//       images: [
//         "https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D",
//         "https://images.unsplash.com/photo-1596599623428-87dbae5e7816?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D",
//         "https://images.unsplash.com/photo-1724864814923-548d7fd5f42e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D",
//       ],
//     },
//     {
//       id: 8,
//       slug: "sikkim",
//       name: "Sikkim",
//       description: "Himalayan wonderland",
//       images: [
//         "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
//         "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
//         "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
//       ],
//     },
//   ];
 
//   return (
//     <section className="py-20 px-5 text-center bg-gradient-to-b from-gray-50 to-white">
//       <h2
//         className={`text-4xl md:text-5xl font-extrabold text-red-600 mb-16 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//         }`}
//         style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
//       >
//         Trending Destinations
//       </h2>
     
//       {/* First row */}
//       <div className="flex justify-center gap-6 max-w-7xl mx-auto mb-8 flex-wrap">
//         {destinations.slice(0, 4).map((destination, index) => (
//           <DestinationCard
//             key={destination.id}
//             destination={destination}
//             isVisible={isVisible}
//             index={index}
//           />
//         ))}
//       </div>
     
//       {/* Second row */}
//       <div className="flex justify-center gap-6 max-w-7xl mx-auto flex-wrap">
//         {destinations.slice(4, 8).map((destination, index) => (
//           <DestinationCard
//             key={destination.id}
//             destination={destination}
//             isVisible={isVisible}
//             index={index + 4} // Offset index for staggered animation
//           />
//         ))}
//       </div>
//     </section>
//   );
// };
 
// const DestinationCard = ({ destination, isVisible, index }) => {
//   return (
//     <div
//       className={`w-72 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-zinc-300 hover:-translate-y-2 hover:shadow-xl ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//       }`}
//       style={{ transitionDelay: `${index * 100}ms` }}
//     >
     
// <a href={`/destinations/${destination.slug}`} className="no-underline text-inherit">
//         <div className="h-80 relative overflow-hidden">
//           <Swiper
//             modules={[Autoplay, EffectFade]}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             effect="fade"
//             speed={1000}
//             loop={true}
//             className="w-full h-full"
//           >
//             {destination.images.map((image, imgIndex) => (
//               <SwiperSlide key={imgIndex}>
//                 <img
//                   src={image}
//                   alt={destination.name}
//                   className="w-full h-full object-cover transition-transform duration-800 ease-in-out hover:scale-105"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
         
//           <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-left text-white transition-all duration-300 ease-in-out group-hover:-translate-y-2">
//             <h3 className="m-0 text-xl md:text-2xl font-bold mb-2">{destination.name}</h3>
//             <p className="m-0 text-sm md:text-base opacity-90">{destination.description}</p>
//           </div>
//         </div>
       
//         <div className="p-4 text-left bg-white">
//           <div className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-200">
//             {destination.name}
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// };
 
// export default TrendingDestinations;
 
// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import { ChevronRight, ChevronLeft } from "lucide-react";
// import "swiper/css";
// import "swiper/css/effect-fade";
 
// // ✅ Card Component‹
// const DestinationCard = ({
//   title,
//   description,
//   price,
//   images,
//   direction = "ltr",
// }) => {
//   return (
//     <div className="flex-shrink-0 w-[320px] flex flex-col md:flex-row bg-[#fffaf1] border border-gray-300 rounded-lg overflow-hidden shadow-md">
//       <div className="flex flex-col justify-between p-4 w-full md:w-2/3">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-800">
//             {title}Andaman
//           </h2>
//           <p className="text-sm text-gray-600 mt-2">
//             {description}Lorem ipsum dolor sir amet conc scelerisque faucibus
//             neque....
//           </p>
//         </div>
//         <div className="mt-3">
//           <p className="text-red-600 font-bold text-md">{price}4000.00 RS</p>
//           <button className="mt-2 px-4 py-1.5 bg-[#00004a] text-white text-sm rounded hover:bg-blue-900 transition">
//             Know more
//           </button>
//         </div>
//       </div>
 
//       <div className="w-full md:w-1/3 h-40 md:h-auto">
//         <Swiper
//           modules={[Autoplay, EffectFade]}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//             reverseDirection: direction === "rtl",
//           }}
//           loop
//           speed={1000}
//           effect="fade"
//           className="w-full h-full"
//         >
//           {images.map((img, idx) => (
//             <SwiperSlide key={idx}>
//               <img
//                 src={img}
//                 alt={`${title}-${idx}`}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };
 
// // ✅ Main Component
// const TrendingDestination = () => {
//   const scrollRef = useRef(null);
 
//   const scrollNext = () => {
//     const container = scrollRef.current;
//     if (container && container.children.length > 0) {
//       const card = container.children[0];
//       const cardWidth = card.getBoundingClientRect().width;
//       const gap = parseInt(getComputedStyle(container).gap || 24);
//       container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
//     }
//   };
 
//   const scrollPrev = () => {
//     const container = scrollRef.current;
//     if (container && container.children.length > 0) {
//       const card = container.children[0];
//       const cardWidth = card.getBoundingClientRect().width;
//       const gap = parseInt(getComputedStyle(container).gap || 24);
//       container.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
//     }
//   };
 

  
//   // Destination data - 6 unique destinations
//   const destinations = [
//     {
//       title: "",
//       description: " ",
//       price: " ",
//       images: [
//         "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=800&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800&auto=format&fit=crop",
//       ],
//       direction: "rtl",
//     },
//     {
//       title: " ",
//       description: " ",
//       price: " ",
//       images: [
//         "https://plus.unsplash.com/premium_photo-1697730277839-440df1a4415f?w=800&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&auto=format&fit=crop",
//         "https://plus.unsplash.com/premium_photo-1697730150003-26a1d469adb4?w=800&auto=format&fit=crop",
//       ],
//       direction: "ltr",
//     },
//     {
//       title: " ",
//       description: " ",
//       price: " ",
//       images: [
//         "https://images.unsplash.com/photo-1588411392791-71a7c42f0bc6?w=800&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800&auto=format&fit=crop",
//       ],
//       direction: "ltr",
//     },
//     {
//       title: " ",
//       description: " ",
//       price: " ",
//       images: [
//         "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop",
//       ],
//       direction: "rtl",
//     },
//     {
//       title: " ",
//       description: " ",
//       price: " ",
//       images: [
//         "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=800&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&auto=format&fit=crop",
//       ],
//       direction: "ltr",
//     },
//     {
//       title: " ",
//       description: " ",
//       price: " ",
//       images: [
//         "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1592906209472-36b846c4c2ef?w=800&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop",
//       ],
//       direction: "rtl",
//     },
//   ];
 
//   return (
//     <div className="flex flex-col items-center gap-8 p-10 bg-[#fefaf3] max-h-screen relative">
//       <h1 className="text-3xl font-bold text-[#00004a] mb-6">
//         Trending Destinations
//       </h1>
 
//       <div className="w-full max-w-7xl relative flex items-center">
//         {/* Prev Button */}
//         <button
//           onClick={scrollPrev}
//           className="absolute left-[-30px] z-10 bg-[#00004a] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-900 shadow-md"
//           aria-label="Previous destinations"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>
 
//         {/* Cards Container - scrollbar completely hidden */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto w-full no-scrollbar"
//           style={{
//             scrollSnapType: "x mandatory",
//             maxWidth: "100%",
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           {destinations.map((destination, index) => (
//             <DestinationCard
//               key={index}
//               title={destination.title}
//               description={destination.description}
//               price={destination.price}
//               images={destination.images}
//               direction={destination.direction}
//             />
//           ))}
//         </div>
 
//         {/* Next Button */}
//         <button
//           onClick={scrollNext}
//           className="absolute right-[-30px] z-10 bg-[#00004a] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-900 shadow-md"
//           aria-label="Next destinations"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// };
 
// export default TrendingDestination;
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
 
// Card component with Know More navigation
const DestinationCard = ({ id, title, description, price, images, direction }) => {
  const navigate = useNavigate();
 
  const handleKnowMore = () => {
    navigate(`/${id}`);
  };
 
  return (
    <div className="flex-shrink-0 w-[320px] flex flex-col md:flex-row bg-[#fffaf1] border border-gray-300 rounded-lg overflow-hidden shadow-md">
      <div className="flex flex-col justify-between p-4 w-full md:w-2/3">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mt-2">
            {description || "Explore top attractions and experiences."}
          </p>
        </div>
        <div className="mt-3">
          <p className="text-red-600 font-bold text-md">{price || "From"} 4000.00 RS</p>
          <button
            onClick={handleKnowMore}
            className="mt-2 px-4 py-1.5 bg-[#00004a] text-white text-sm rounded hover:bg-blue-900 transition"
          >
            Know more
          </button>
        </div>
      </div>
 
      <div className="w-full md:w-1/3 h-40 md:h-auto">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: direction === "rtl",
          }}
          loop
          speed={1000}
          effect="fade"
          className="w-full h-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`${title}-${idx}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
 
const TrendingDestination = () => {
  const scrollRef = useRef(null);
 
  const scrollNext = () => {
    const container = scrollRef.current;
    if (container && container.children.length > 0) {
      const card = container.children[0];
      const cardWidth = card.getBoundingClientRect().width;
      const gap = parseInt(getComputedStyle(container).gap || 24);
      container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    }
  };
 
  const scrollPrev = () => {
    const container = scrollRef.current;
    if (container && container.children.length > 0) {
      const card = container.children[0];
      const cardWidth = card.getBoundingClientRect().width;
      const gap = parseInt(getComputedStyle(container).gap || 24);
      container.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
    }
  };
 
  const destinations = [
    {
      id: "uttarakhand",
      title: "Uttarakhand",
      images: ["https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&auto=format&fit=crop"],
      direction: "rtl",
    },
    {
      id: "uttar-pradesh",
      title: "Uttar Pradesh",
      images: ["https://plus.unsplash.com/premium_photo-1697730277839-440df1a4415f?w=800&auto=format&fit=crop"],
      direction: "ltr",
    },
    {
      id: "himachal-pradesh",
      title: "Himachal Pradesh",
      images: ["https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800&auto=format&fit=crop"],
      direction: "ltr",
    },
    {
      id: "delhi",
      title: "Delhi",
      images: ["https://plus.unsplash.com/premium_photo-1697730150003-26a1d469adb4?w=800&auto=format&fit=crop"],
      direction: "rtl",
    },
    // {
    //   id: "rajastan",
    //   title: "Rajasthan",
    //   images: ["https://plus.unsplash.com/premium_photo-1697730150003-26a1d469adb4?w=800&auto=format&fit=crop"],
    //   direction: "rtl",
    // },
    {
      id: "madhya-pradesh",
      title: "Madhya Pradesh",
      images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop"],
      direction: "ltr",
    },
    {
      id: "goa",
      title: "Goa",
      images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"],
      direction: "ltr",
    },
    {
      id: "maharashtra",
      title: "Maharashtra",
      images: ["https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&auto=format&fit=crop"],
      direction: "rtl",
    },
    {
      id: "kerala",
      title: "Kerala",
      images: ["https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop"],
      direction: "ltr",
    },
    {
      id: "tamil-nadu",
      title: "Tamil Nadu",
      images: ["https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=800&auto=format&fit=crop"],
      direction: "ltr",
    },
    {
      id: "karnataka",
      title: "Karnataka",
      images: ["https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&auto=format&fit=crop"],
      direction: "rtl",
    },
    //  {
    //   id: "jammu-kashmir-ladakh",
    //   title: "jammu-kashmir-ladakh",
    //   images: ["https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=800&auto=format&fit=crop"],
    //   direction: "rtl",
    // },
   
    {
      id: "west-bengal",
      title: "West Bengal",
      images: ["https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&auto=format&fit=crop"],
      direction: "rtl",
    },
    {
      id: "odisha",
      title: "Odisha",
      images: ["https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800&auto=format&fit=crop"],
      direction: "ltr",
    },
    {
      id: "assam",
      title: "Assam",
      images: ["https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&auto=format&fit=crop"],
      direction: "rtl",
    },
    // {
    //   id: "sikkim",
    //   title: "Sikkim",
    //   images: ["https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800&auto=format&fit=crop"],
    //   direction: "ltr",
    // },
    //  {
    //   id: "Panjab",
    //   title: "Panjab",
    //   images: ["https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800&auto=format&fit=crop"],
    //   direction: "ltr",
    // },
  ];
 
  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-[#fefaf3] min-h-fit relative">
      {/* <Navbar /> */}
      <h1 className="text-3xl font-bold text-[#00004a] mb-4">Trending Destinations</h1>
 
      <div className="w-full max-w-7xl relative flex items-center">
        <button
          onClick={scrollPrev}
          className="absolute left-[-30px] z-10 bg-[#00004a] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-900 shadow-md"
          aria-label="Previous destinations"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
 
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto w-full no-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            maxWidth: "100%",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: 0,
            marginBottom: 0,
          }}
        >
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              title={destination.title}
              description={destination.description}
              price={destination.price}
              images={destination.images}
              direction={destination.direction}
            />
          ))}
        </div>
 
        <button
          onClick={scrollNext}
          className="absolute right-[-30px] z-10 bg-[#00004a] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-900 shadow-md"
          aria-label="Next destinations"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
     
    </div>
  );
};
 
export default TrendingDestination;
 
 