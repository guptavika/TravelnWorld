import React from 'react'
// import Video1 from "../../public/AboutVideos/jaipur 1.mp4" 
const AboutHero = () => {
  return (
    <div>



    <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="public/AboutVideos/jaipur 1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
 


      
    </div>
  )
}

export default AboutHero
