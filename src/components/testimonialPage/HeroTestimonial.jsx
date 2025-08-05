import React from 'react';

const HeroTestimonial= () => {
  return (
    <section className="bg-[#f9f9f9] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4285e9] via-[#f1a7a6] to-[#CF1E27] drop-shadow-lg">
          Hear From Our Happy Travelers
        </h2>
        <p className="text-xl text-gray-600 mt-3">
          Real journeys, real stories. Watch what our travelers have to say!
        </p>
      </div>

      {/* Testimonial video grid - Add videos/cards here */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Placeholder: Add your video cards inside here */}
      </div>

      {/* <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-[#CF1E27] to-[#e74c3c] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          View All Testimonials
        </button>
      </div> */}
    </section>
  );
};

export default HeroTestimonial;

