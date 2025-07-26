import React from 'react';

const HeroVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full md:h-[80vh] object-cover"
    >
      <source src="../../public/AboutVideos/jodhpur 4.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroVideo;

