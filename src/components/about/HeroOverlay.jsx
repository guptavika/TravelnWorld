import React from 'react';

const HeroOverlay = () => {
  return (
    <div className="bg-gradient-to-r from-black to-transparent w-full h-[40rem] flex flex-col items-start justify-center text-left px-6 md:px-20 py-10">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        Travel n World
      </h1>
      <p className="text-lg md:text-2xl text-white max-w-2xl">
        Transforming Travel Businesses with Innovation and Connectivity
      </p>
    </div>
  );
};

export default HeroOverlay;
