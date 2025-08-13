

// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

// import img1 from "../../public/VerifiedTranspoetsImg/ayodhya darshan yatra[1].jpg";
// import img2 from "../../public/VerifiedTranspoetsImg/RAM RATH TOUR AND TREVELS.jpg";
// import img3 from "../../public/VerifiedTranspoetsImg/TripathiCarBooking.jpg";
// import img4 from "../../public/VerifiedTranspoetsImg/ExploreTheIndia.jpg";
// import img5 from "../../public/VerifiedTranspoetsImg/DuniyaDekho.jpg";

// export default function VerifiedTransports() {
//   const [sliderRef, instanceRef] = useKeenSlider({
//     slides: {
//       perView: 1,
//       spacing: 15,
//     },
//     breakpoints: {
//       "(min-width: 640px)": {
//         slides: { perView: 2, spacing: 15 },
//       },
//       "(min-width: 1024px)": {
//         slides: { perView: 4, spacing: 15 },
//       },
//     },
//   });

//   const transports = [img1, img2, img3, img4, img5].map((img, i) => ({
//     img,
//     name: ["Ayodhya Darshan Yatra", "RAM RATH TOUR AND TREVELS", "TripathiCarBooking", "Explore The India", "Duniya Dekho Travels"][i],
//     location: ["Jharkhandi, Rikabganj, Ayodhya", "Jharkhandi, Rikabganj, Ayodhya", "Delhi, India", "Greater Noida, India", "Lucknow U.P INDIA"][i],
//     rating: [4.8, 4.8, 4.7, 4.7, 4.9][i],
//     reviews: [120, 120, 98, 98, 150][i],
//     verified: true,
//     url: [
//       "https://ayodhyadarshanyatra.com/",
//       "https://ayodhyadarshanyatra.com/",
//       "https://example.com/skyline-travels",
//       "https://example.com/skyline-travels",
//       "https://duniyadekhotravels.com"
//     ][i]
//   }));

//   return (
//     <section className="w-full h-[32rem] py-10 bg-gray-50">
//       <h2 className="text-center text-3xl font-bold mb-8 text-[#01055b]">Verified Transports</h2>
//       <div className="relative w-full h-full px-4">
//         <div ref={sliderRef} className="keen-slider h-full w-full">
//           {transports.map((item, i) => (
//             <div
//               key={i}
//               className="keen-slider__slide bg-white shadow-md rounded-lg overflow-hidden h-full"
//             >
//               <img src={item.img} alt={item.name} className="w-full h-1/2 object-cover" />
//               <div className="p-4 h-1/2 flex flex-col justify-between">
//                 <div>
//                   <div className="flex items-center justify-between mb-1">
//                     <h3 className="text-lg font-semibold">{item.name}</h3>
//                     {item.verified && (
//                       <span className="text-green-600 flex items-center">
//                         <CheckCircle className="w-4 h-4 mr-1" /> Verified
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-gray-500 text-sm mb-1">📍 {item.location}</p>
//                   <p className="text-yellow-500 text-sm mb-1">⭐ {item.rating} ({item.reviews} reviews)</p>
//                 </div>
//                 <div className="text-center">
//                   <button onClick={() => window.open(item.url, '_blank')} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">View Profile</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={() => instanceRef.current?.prev()}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow"
//         >
//           <ChevronLeft />
//         </button>
//         <button
//           onClick={() => instanceRef.current?.next()}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow"
//         >
//           <ChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const transports = [
  {
    id: 1,
    img: "public/VerifiedTranspoetsImg/ayodhya darshan yatra[1].jpg",
    name: "Ayodhya Darshan Yatra",
    slug: "ayodhya-darshan-yatra",
    location: "Jharkhandi, Rikabganj, Ayodhya",
    rating: 4.8,
    reviews: 120,
    verified: true,
    url: "https://ayodhyadarshanyatra.com/"
  },
  {
    id: 2,
    img: "public/VerifiedTranspoetsImg/RAM RATH TOUR AND TREVELS.jpg",
    name: "Ram Rath Tour and Travels",
    slug: "ram-rath-tour-and-travels",
    location: "Jharkhandi, Rikabganj, Ayodhya",
    rating: 4.8,
    reviews: 120,
    verified: true,
    url: "https://ayodhyadarshanyatra.com/"
  },
  {
    id: 3,
    img: "public/VerifiedTranspoetsImg/TripathiCarBooking.jpg",
    name: "Tripathi Car Booking",
    slug: "tripathi-car-booking",
    location: "Jharkhandi, Rikabganj, Ayodhya",
    rating: 4.8,
    reviews: 120,
    verified: true,
    url: "https://ayodhyadarshanyatra.com/"
  },
  {
    id: 4,
    img: "public/VerifiedTranspoetsImg/DuniyaDekho.jpg",
    name: "Duniya Dekho Travels",
    slug: "duniya-dekho-travels",
    location: "Jharkhandi, Rikabganj, Ayodhya",
    rating: 4.8,
    reviews: 120,
    verified: true,
    url: "https://ayodhyadarshanyatra.com/"
  },
  {
    id: 5,
    img: "public/VerifiedTranspoetsImg/DuniyaDekho.jpg",
    name: "Duniya Dekho Travels",
    slug: "duniya-dekho-travels",
    location: "Jharkhandi, Rikabganj, Ayodhya",
    rating: 4.8,
    reviews: 120,
    verified: true,
    url: "https://ayodhyadarshanyatra.com/"
  },
  // ... other transport items
];

export default function VerifiedTransports() {
  const navigate = useNavigate();
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
  });

  const handleCardClick = (slug) => {
    navigate(`/transport/${slug}`);
  };

  const handleViewMore = (slug, e) => {
    e.stopPropagation();
    navigate(`/transport/${slug}`);
  };

  return (
    <section className="w-full h-[32rem] py-10 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#01055b]">Verified Transports</h2>
      <div className="relative w-full h-full px-4">
        <div ref={sliderRef} className="keen-slider h-full w-full">
          {transports.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide bg-white shadow-md rounded-lg overflow-hidden h-full cursor-pointer"
              onClick={() => handleCardClick(item.slug)}
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-1/2 object-cover"
              />
              <div className="p-4 h-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold hover:text-blue-600">
                      {item.name}
                    </h3>
                    {item.verified && (
                      <span className="text-green-600 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" /> Verified
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-1">📍 {item.location}</p>
                  <p className="text-yellow-500 text-sm mb-1">⭐ {item.rating} ({item.reviews} reviews)</p>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={(e) => handleViewMore(item.slug, e)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(item.url, '_blank');
                    }}
                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 text-sm"
                  >
                    Website
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation arrows */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}