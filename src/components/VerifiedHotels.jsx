// import React from 'react';
// import img1 from "../../public/1.jpg"
// import img2 from "../../public/1.jpg"
// import img3 from "../../public/1.jpg"
// import img4 from "../../public/1.jpg"
// import img5 from "../../public/1.jpg"
// import img6 from "../../public/1.jpg"
// import img7 from "../../public/1.jpg"
// import img8 from "../../public/1.jpg"

 
// const topLogos = [img1, img2, img3, img4];
// const bottomLogos = [img5, img6, img7, img8];
 
// const VerifiedHotels = () => {
//   return (
    
//     <section className="w-full bg-gray-50 flex flex-col items-center justify-center px-5 pt-10 gap-10 overflow-hidden">
//     <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative inline-block">Verified Hotels<span class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-400 to-red-300 rounded"></span></h3>
//       {/* Top Row - Right to Left */}
//       <div className="w-full whitespace-nowrap overflow-hidden relative">
//         <div className="flex animate-marquee gap-4">
//           {[...topLogos, ...topLogos, ...topLogos, ...topLogos].map((logo, index) => (
//             <div key={`top-${index}`} className="min-w-[248px] max-w-[248px] p-2 border border-dashed border-gray-500 flex justify-center items-center">
//               <img src={img1} alt={`Client ${index % topLogos.length + 1}`} className="max-h-full max-w-full object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
 
//       {/* Bottom Row - Left to Right */}
//       <div className="w-full whitespace-nowrap overflow-hidden relative">
//         <div className="flex animate-marquee-reverse gap-4">
//           {[...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos].map((logo, index) => (
//             <div key={`bottom-${index}`} className="min-w-[248px] max-w-[248px] p-2 border border-dashed border-gray-500 flex justify-center items-center">
//               <img src={logo} alt={`Client ${index % bottomLogos.length + 1}`} className="max-h-full max-w-full object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
 
//     </section>
//   );
// };
 
// export default VerifiedHotels;
// import React from 'react';
 
// const ClientSlider = () => {
//   const topLogos = [
//     "https://travelnworld.com/Images/hotelsLogo/sangrilla.png",
//     "https://travelnworld.com/Images/hotelsLogo/royalHeritageLogo.png",
//     "https://travelnworld.com/Images/hotelsLogo/reefValley.png",
//     "https://travelnworld.com/Images/hotelsLogo/pineViewLogo.png"
//   ];
 
//   const bottomLogos = [
//     "https://travelnworld.com/Images/hotelsLogo/pillicanLogo.png",
//     "https://travelnworld.com/Images/hotelsLogo/periyarNest.png",
//     "https://travelnworld.com/Images/hotelsLogo/munnarCastle.png",
//     "https://travelnworld.com/Images/hotelsLogo/grandThekaddy.png",
//     "https://travelnworld.com/Images/hotelsLogo/casaMontana.png"
//   ];
 
//   return (
//     <div>
//       {/* Header */}
//       <div className="text-center mt-10">
//         <h2 className="text-3xl font-bold text-gray-800 mb-2">Verified Hotels</h2>
//       </div>
 
//       <section className="w-full bg-gray-50 flex flex-col items-center justify-center px-5 pt-10 gap-10 overflow-hidden">
//         {/* Top Row - Right to Left */}
//         <div className="w-full whitespace-nowrap overflow-hidden relative">
//           <div className="flex animate-marquee gap-4">
//             {[...topLogos, ...topLogos, ...topLogos, ...topLogos].map((logo, index) => (
//               <div
//                 key={`top-${index}`}
//                 className="min-w-[248px] max-w-[248px] p-2 border border-dashed border-gray-350 flex justify-center items-center"
//               >
//                 <img
//                   src={logo}
//                   alt={`Client ${index % topLogos.length + 1}`}
//                   className="max-h-full max-w-full object-contain"
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
 
//         {/* Bottom Row - Left to Right */}
//         <div className="w-full whitespace-nowrap overflow-hidden relative">
//           <div className="flex animate-marquee-reverse gap-4">
//             {[...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos].map((logo, index) => (
//               <div
//                 key={`bottom-${index}`}
//                 className="min-w-[248px] max-w-[248px] p-2 border border-dashed border-gray-350 flex justify-center items-center"
//               >
//                 <img
//                   src={logo}
//                   alt={`Client ${index % bottomLogos.length + 1}`}
//                   className="max-h-full max-w-full object-contain"
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
 
// export default ClientSlider;
 
import { Verified } from 'lucide-react';
import React from 'react';
 
const VerifiedHotels = () => {
  const hotels = {
    topRow: [
      {
        name: "Sangrilla",
        logo: "https://travelnworld.com/Images/hotelsLogo/sangrilla.png",
        url: "https://www.shangri-la.com/"
      },
      {
        name: "Royal Heritage",
        logo: "https://travelnworld.com/Images/hotelsLogo/royalHeritageLogo.png",
        url: "https://www.royalheritagehaveli.com/"
      },
      {
        name: "Reef Valley",
        logo: "https://travelnworld.com/Images/hotelsLogo/reefValley.png",
        url: "https://www.reefvalleyresort.com/"
      },
      {
        name: "Pine View",
        logo: "https://travelnworld.com/Images/hotelsLogo/pineViewLogo.png",
        url: "https://www.pineviewhotels.com/"
      }
    ],
    bottomRow: [
      {
        name: "Pillican",
        logo: "https://travelnworld.com/Images/hotelsLogo/pillicanLogo.png",
        url: "https://www.pillican.com/"
      },
      {
        name: "Periyar Nest",
        logo: "https://travelnworld.com/Images/hotelsLogo/periyarNest.png",
        url: "https://periyarnestresort.com/"
      },
      {
        name: "Munnar Castle",
        logo: "https://travelnworld.com/Images/hotelsLogo/munnarCastle.png",
        url: "https://www.munnarcastle.co.in/"
      },
      {
        name: "Grand Thekaddy",
        logo: "https://travelnworld.com/Images/hotelsLogo/grandThekaddy.png",
        url: "https://grandthekkady.in/"
      },
      {
        name: "Casa Montana",
        logo: "https://travelnworld.com/Images/hotelsLogo/casaMontana.png",
        url: "https://casamontanamunnar.com/"
      }
    ]
  };
 
  // Number of times to repeat the logos for seamless animation
  const REPEAT_COUNT = 4;
 
  return (
    <div className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Verified Hotels</h2>
        <p className="text-gray-600">Trusted by the best hospitality partners</p>
      </div>
 
      {/* Slider Container */}
      <div className="overflow-hidden">
        {/* Top Row - Right to Left */}
        <div className="relative py-4">
          <div className="flex animate-marquee gap-8">
            {Array(REPEAT_COUNT).fill().map((_, i) => (
              hotels.topRow.map((hotel, index) => (
                <a
                  key={`top-${i}-${index}`}
                  href={hotel.url}
                  className="flex-shrink-0 w-64 h-32 px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center border border-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={hotel.logo}
                    alt={hotel.name}
                    className="max-h-20 max-w-full object-contain"
                    loading="lazy"
                  />
                </a>
              ))
            ))}
          </div>
        </div>
 
        {/* Bottom Row - Left to Right */}
        <div className="relative py-4">
          <div className="flex animate-marquee-reverse gap-8">
            {Array(REPEAT_COUNT).fill().map((_, i) => (
              hotels.bottomRow.map((hotel, index) => (
                <a
                  key={`bottom-${i}-${index}`}
                  href={hotel.url}
                  className="flex-shrink-0 w-64 h-32 px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center border border-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={hotel.logo}
                    alt={hotel.name}
                    className="max-h-20 max-w-full object-contain"
                    loading="lazy"
                  />
                </a>
              ))
            ))}
          </div>
        </div>
      </div>
 
      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
 
export default VerifiedHotels;

 
 