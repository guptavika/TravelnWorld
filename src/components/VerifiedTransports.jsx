

// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

// import img1 from "../../public/VerifiedTranspoetsImg/ayodhya darshan yatra[1].jpg";
// import img2 from "../../public/VerifiedTranspoetsImg/RAM RATH TOUR AND TREVELS.jpg";
// import img3 from "../../public/VerifiedTranspoetsImg/TripathiCarBooking.jpg";
// import img4 from "../../public/VerifiedTranspoetsImg/ExploreTheIndia.jpg";
// import img5 from "../../public/VerifiedTranspoetsImg/DuniyaDekho.jpg"
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
//         slides: { perView: 3, spacing: 15 },
//       },
//     },
//   });

//   const transports = [
//     {
//       img: img1,
//       name: "Ayodhya Darshan Yatra",
//       location: "Jharkhandi, Rikabganj, Ayodhya",
//       rating: 4.8,
//       reviews: 120,
//       verified: true,
//       url: "https://ayodhyadarshanyatra.com/"

//     },
//      {
//       img: img2,
//       name: "RAM RATH TOUR AND TREVELS",
//       location: "Jharkhandi, Rikabganj, Ayodhya",
//       rating: 4.8,
//       reviews: 120,
//       verified: true,
//       url: "https://ayodhyadarshanyatra.com/"

//     },
//     {
//       img: img3,
//       name: "TripathiCarBooking",
//       location: "Delhi, India",
//       rating: 4.7,
//       reviews: 98,
//       verified: true,
//       url: "https://example.com/skyline-travels"
//     },
//     {
//       img: img4,
//       name: " Explore The India",
//       location: "Pi-1 Sctore-32 Greater Noida, India",
//       rating: 4.7,
//       reviews: 98,
//       verified: true,
//       url: "https://example.com/skyline-travels"
//     },
    
//     {
//       img: img5,
//       name: "Duniya Dekho Travels",
//       location: "Lucknow U.P INDIA",
//       rating: 4.9,
//       reviews: 150,
//       verified: true,
//       url: "https://duniyadekhotravels.com"

//     },
//   ];

//   return (
//     <section className="py-10">
//       <h2 className="text-center text-3xl font-bold mb-8 text-[#01055b]">
//         Verified Transports
//       </h2>

//       <div className="relative max-w-6xl mx-auto px-4">
//         <div ref={sliderRef} className="keen-slider">
//           {transports.map((item, i) => (
//             <div
//               key={i}
//               className="keen-slider__slide bg-white shadow-md rounded-lg overflow-hidden"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-4">
//                 <div className="flex items-center justify-between mb-1">
//                   <h3 className="text-lg font-semibold">{item.name}</h3>
//                   {item.verified && (
//                     <span className="text-green-600 flex items-center">
//                       <CheckCircle className="w-4 h-4 mr-1" /> Verified
//                     </span>
//                   )}
//                 </div>
//                 <p className="text-gray-500 text-sm mb-1">📍 {item.location}</p>
//                 <p className="text-yellow-500 text-sm mb-1">
//                   ⭐ {item.rating} ({item.reviews} reviews)
//                 </p>
//                 <div className="text-center mt-6">
//                   <button 
//                     onClick={() => window.open(item.url, '_blank')}
//                     className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
//                     View Profile
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={() => instanceRef.current?.prev()}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow"
//         >
//           <ChevronLeft />
//         </button>

//         <button
//           onClick={() => instanceRef.current?.next()}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow"
//         >
//           <ChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// }

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

import img1 from "../../public/VerifiedTranspoetsImg/ayodhya darshan yatra[1].jpg";
import img2 from "../../public/VerifiedTranspoetsImg/RAM RATH TOUR AND TREVELS.jpg";
import img3 from "../../public/VerifiedTranspoetsImg/TripathiCarBooking.jpg";
import img4 from "../../public/VerifiedTranspoetsImg/ExploreTheIndia.jpg";
import img5 from "../../public/VerifiedTranspoetsImg/DuniyaDekho.jpg";

export default function VerifiedTransports() {
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

  const transports = [img1, img2, img3, img4, img5].map((img, i) => ({
    img,
    name: ["Ayodhya Darshan Yatra", "RAM RATH TOUR AND TREVELS", "TripathiCarBooking", "Explore The India", "Duniya Dekho Travels"][i],
    location: ["Jharkhandi, Rikabganj, Ayodhya", "Jharkhandi, Rikabganj, Ayodhya", "Delhi, India", "Greater Noida, India", "Lucknow U.P INDIA"][i],
    rating: [4.8, 4.8, 4.7, 4.7, 4.9][i],
    reviews: [120, 120, 98, 98, 150][i],
    verified: true,
    url: [
      "https://ayodhyadarshanyatra.com/",
      "https://ayodhyadarshanyatra.com/",
      "https://example.com/skyline-travels",
      "https://example.com/skyline-travels",
      "https://duniyadekhotravels.com"
    ][i]
  }));

  return (
    <section className="w-full h-screen py-10 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#01055b]">Verified Transports</h2>
      <div className="relative w-full h-full px-4">
        <div ref={sliderRef} className="keen-slider h-full w-full">
          {transports.map((item, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-white shadow-md rounded-lg overflow-hidden h-full"
            >
              <img src={item.img} alt={item.name} className="w-full h-1/2 object-cover" />
              <div className="p-4 h-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    {item.verified && (
                      <span className="text-green-600 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" /> Verified
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-1">📍 {item.location}</p>
                  <p className="text-yellow-500 text-sm mb-1">⭐ {item.rating} ({item.reviews} reviews)</p>
                </div>
                <div className="text-center">
                  <button onClick={() => window.open(item.url, '_blank')} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
