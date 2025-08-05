// import React from 'react';
// import {
//   MapPin,
//   Calendar,
//   Star,
//   ChevronLeft,
//   ChevronRight
// } from 'lucide-react';

// const TravelersTestimonialpagelay = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Discover the experiences that make our journeys unforgettable through the words of our adventurous travelers
//         </p>
//       </div>

//       <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
//         <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">

//           {/* Image Side */}
//           <div className="relative overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=300&fit=crop"
//               alt="Kyoto, Japan"
//               className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

//             <div className="absolute bottom-4 left-4 text-white">
//               <div className="flex items-center gap-2 mb-2">
//                 <MapPin className="w-4 h-4" />
//                 <span className="text-sm font-medium">Kyoto, Japan</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-4 h-4" />
//                 <span className="text-sm">April 2024</span>
//               </div>
//             </div>
//           </div>

//           {/* Content Side */}
//           <div className="p-8 md:p-12 flex flex-col justify-center">
//             <div className="flex items-center gap-4 mb-6">
//               <img
//                 src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
//                 alt="Emma Rodriguez"
//                 className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
//               />
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800">Emma Rodriguez</h3>
//                 <p className="text-gray-600 text-sm flex items-center gap-1">
//                   <MapPin className="w-3 h-3" /> Madrid, Spain
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-1 mb-6">
//               {Array(5).fill().map((_, index) => (
//                 <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
//               ))}
//               <span className="ml-2 text-sm text-gray-600">5/5</span>
//             </div>

//             <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
//               "The cherry blossom season in Kyoto was magical, and this travel company made it even more special.
//               The traditional ryokan stay, the private tea ceremony, and the guided temple visits created memories
//               that will last forever. Exceptional service throughout!"
//             </blockquote>

//             {/* Carousel Dots */}
//             <div className="flex justify-center gap-2 mb-6">
//               {[0, 1, 2, 3, 4].map((dot, idx) => (
//                 <button
//                   key={idx}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     dot === 2 ? 'bg-blue-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group">
//           <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
//         </button>
//         <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group">
//           <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
//         </button>
//       </div>

//       {/* Progress Bar */}
//       <div className="w-full bg-gray-200 rounded-full h-1 mt-6">
//         <div className="bg-blue-500 h-1 rounded-full transition-all duration-300" style={{ width: '60%' }}></div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//         <div className="text-center p-6 bg-white rounded-xl shadow-lg">
//           <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
//           <div className="text-gray-600">Happy Travelers</div>
//         </div>
//         <div className="text-center p-6 bg-white rounded-xl shadow-lg">
//           <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
//           <div className="text-gray-600">Average Rating</div>
//         </div>
//         <div className="text-center p-6 bg-white rounded-xl shadow-lg">
//           <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
//           <div className="text-gray-600">Destinations</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelersTestimonialpagelay;
import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              {
                id: 1,
                name: "Amit Verma",
                company: "Tech Solutions",
                message: "Excellent service and support!",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                id: 2,
                name: "Priya Singh",
                company: "TravelBuddy",
                message:
                  "Amazing experience from start to finish. Their team handled everything perfectly!",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                id: 3,
                name: "Ravi Kumar",
                company: "CloudNine Inc.",
                message: "Professional and reliable team!",
                image: "https://randomuser.me/api/portraits/men/55.jpg",
              },
              {
                id: 4,
                name: "Sneha Das",
                company: "Wanderlust",
                message: "They made my trip unforgettable! Highly recommended.",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
              },
              {
                id: 5,
                name: "Karan Mehta",
                company: "InnovateX",
                message:
                  "Smooth process and great communication. I’ll work with them again!",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
              },
              {
                id: 6,
                name: "Neha Sharma",
                company: "GoTrip India",
                message: "Their planning was top notch and hassle-free.",
                image: "https://randomuser.me/api/portraits/women/60.jpg",
              },
              {
                id: 7,
                name: "Suresh Rao",
                company: "XploreTech",
                message: "Very responsive and easy to work with.",
                image: "https://randomuser.me/api/portraits/men/40.jpg",
              },
            ]),
          500
        )
      );
      setTestimonials(response);
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  const getVisibleTestimonials = () => {
    if (testimonials.length <= 6) return testimonials;

    let visible = [];
    for (let i = 0; i < 6; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();
  const firstRow = visibleTestimonials.slice(0, 3);
  const secondRow = visibleTestimonials.slice(3, 6);

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-600">
          Hear from Our Happy Clients
        </h2>

        {/* First Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {firstRow.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center h-[400px]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-900"
              />
              <p className="text-gray-700 italic mb-4 line-clamp-5">
                "{testimonial.message}"
              </p>
              <h3 className="text-lg font-bold text-blue-900">{testimonial.name}</h3>
              <span className="text-sm text-gray-500">{testimonial.company}</span>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {secondRow.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center h-[400px]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-900"
              />
              <p className="text-gray-700 italic mb-4 line-clamp-5">
                "{testimonial.message}"
              </p>
              <h3 className="text-lg font-bold text-blue-900">{testimonial.name}</h3>
              <span className="text-sm text-gray-500">{testimonial.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

