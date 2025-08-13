import React from 'react'
// import Video1 from "../../public/AboutVideos/jaipur 1.mp4" 
// import video from "\src\Assest\AboutVideos\Blogs\blog.mp4"

import blogVideo from "../../Assest/AboutVideos/Blogs/blog.mp4"; // adjust the path if needed

const AboutHero = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={blogVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AboutHero;

