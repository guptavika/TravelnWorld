import React, { useState } from "react";
import goaImg from "../../public/Tourpackageimage/image6.jpg";
import darjeelingImg from "../../public/Tourpackageimage/image5.jpg";
import kashmirImg from "../../public/Tourpackageimage/image7.jpg";
import dubaiImg from "../../public/Tourpackageimage/image2.jpg";
import parisImg from "../../public/Tourpackageimage/image3.jpg";
import tajmahalImg from "../../public/Tourpackageimage/image8.jpg";
 
const data = [
  { title: "Goa", desc: "Forem ipsum...", img: goaImg },
  { title: "Darjeeling", desc: "Forem ipsum...", img: darjeelingImg },
  { title: "Kashmir", desc: "Forem ipsum...", img: kashmirImg },
  { title: "Dubai", desc: "Forem ipsum...", img: dubaiImg },
  { title: "Paris", desc: "Forem ipsum...", img: parisImg },
  { title: "Taj Mahal", desc: "Forem ipsum...", img: tajmahalImg },
];
 
const PlacesToVisit = () => {
  const [start, setStart] = useState(0);
 
  const handleExplore = () => {
    setStart((prev) => (prev + 1 > data.length - 3 ? 0 : prev + 1));
  };
 
  const visibleCards = data.slice(start, start + 3);
 
  return (
    <div className="px-6 sm:px-12 py-16">
      <div className="flex justify-between items-center gap-96">
        <h2 className="text-base sm:text-lg font-bold text-blue-700 ml-44 mb-3">
        Places to Visits
      </h2>
      <button
        onClick={handleExplore}
        className="bg-blue-800 text-white px-5 py-1.5 rounded-md text-sm mr-44 mb-3"
      >
        Explore All
      </button>
      </div>
      <div className="flex justify-center gap-4">
        {visibleCards.map((item, index) => (
          <div
            key={index}
            className="relative w-[350px] rounded-2xl overflow-hidden shadow-lg text-center"
          >
            {/* Heading inside top-left of first card */}
            {index === 0 && (
              <div className="absolute top-3 left-3 z-10 bg-white/80 px-2 py-1 rounded"></div>
            )}
 
            {/* Button inside top-right of third card */}
            {index === 2 && <div className="absolute top-3 right-3 z-10"></div>}
 
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-bold">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};
 
export default PlacesToVisit;
 
 