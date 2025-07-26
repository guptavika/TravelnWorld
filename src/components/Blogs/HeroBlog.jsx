import React from 'react'

const HeroBlog = () => {
return (
    <div className="w-full h-auto">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full md:h-[60vh] object-cover"
      >
        <source src="../../public/Blogs/blog.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


export default HeroBlog
