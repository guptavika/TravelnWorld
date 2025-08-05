// import React, { useEffect, useState } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

// export default function Testimonials() {
//   const [testimonials, setTestimonials] = useState([
//     // ✅ Dummy data: fallback jab tak API na aaye
//     {
//       name: "Ravi Kumar",
//       location: "Delhi, India",
//       text: "Fantastic service! Highly recommend to everyone.",
//       stars: 4,
//       image: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//       name: "Priya Sharma",
//       location: "Mumbai, India",
//       text: "A wonderful experience from start to finish.",
//       stars: 4,
//       image: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//       name: "Rajesh Gupta",
//       location: "Bangalore, India",
//       text: "Exceeded all my expectations. Will book again!",
//       stars: 4,
//       image: "https://randomuser.me/api/portraits/men/55.jpg",
//     },
//   ]);

//   const [loading, setLoading] = useState(false);

//   // Keen Slider setup
//   const [sliderRef] = useKeenSlider({
//     loop: true,
//     mode: "snap",
//     slides: {
//       perView: 1,
//       spacing: 15,
//     },
//     breakpoints: {
//       "(min-width: 768px)": {
//         slides: { perView: 2, spacing: 15 },
//       },
//       "(min-width: 1024px)": {
//         slides: { perView: 3, spacing: 20 },
//       },
//     },
//   });

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("/api/testimonials.json");
//         const data = await response.json();

//         if (data && data.length > 0) {
//           setTestimonials(data); // ✅ Real API data overwrite karega dummy ko
//         }
//       } catch (error) {
//         console.error("Error fetching testimonials:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   return (
//     <div className="py-10 bg-yellow-50 flex flex-col gap-10 pt-10">
//       <h1 className="text-center text-[#01055b] text-3xl md:text-5xl font-bold mb-4">
//         Testimonials
//       </h1>

//       {loading ? (
//         <p className="text-center text-gray-500">Loading testimonials...</p>
//       ) : (
//         <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto px-4">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="keen-slider__slide">
//               <div className="mx-5">
//                 <div className="relative max-w-md mx-auto bg-gray-100 p-6 rounded-xl">
//                   <div className="absolute top-0 left-0 w-16 h-16 bg-blue-400 rounded-br-full flex items-center justify-center">
//                     <svg
//                       className="text-white rotate-180"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 512 512"
//                       fill="currentColor"
//                     >
//                       <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
//                     </svg>
//                   </div>

//                   <p className="text-gray-600 text-center mb-6 mt-4 p-2">
//                     {testimonial.text}
//                   </p>

//                   <div className="flex justify-center mb-4">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
//                     />
//                   </div>

//                   <h3 className="text-center text-lg font-semibold mb-1">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-center text-sm text-gray-500 mb-2">
//                     {testimonial.location}
//                   </p>

//                   <div className="flex justify-center">
//                     {[...Array(testimonial.stars || 4)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className="w-6 h-6 text-yellow-400 fill-current"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                       </svg>
//                     ))}
//                   </div>

//                   <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-400 rounded-tl-full flex items-center justify-center">
//                     <svg
//                       className="text-white"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 512 512"
//                       fill="currentColor"
//                     >
//                       <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulate API response with images
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
                image:
                  "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                id: 2,
                name: "Priya Singh",
                company: "TravelBuddy",
                message:
                  "Amazing experience from start to finish. Their team handled everything perfectly!",
                image:
                  "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                id: 3,
                name: "Ravi Kumar",
                company: "CloudNine Inc.",
                message: "Professional and reliable team!",
                image:
                  "https://randomuser.me/api/portraits/men/55.jpg",
              },
              {
                id: 4,
                name: "Sneha Das",
                company: "Wanderlust",
                message:
                  "They made my trip unforgettable! Highly recommended.",
                image:
                  "https://randomuser.me/api/portraits/women/68.jpg",
              },
              {
                id: 5,
                name: "Karan Mehta",
                company: "InnovateX",
                message:
                  "Smooth process and great communication. I’ll work with them again!",
                image:
                  "https://randomuser.me/api/portraits/men/75.jpg",
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
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials]);

  const getVisibleTestimonials = () => {
    if (testimonials.length < 3) return testimonials;

    let visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-600">
          Hear from Our Happy Clients
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center h-[400px] transition-all duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-900"
              />
              <p className="text-gray-700 italic mb-4 line-clamp-5">
                "{testimonial.message}"
              </p>
              <h3 className="text-lg font-bold text-blue-900">
                {testimonial.name}
              </h3>
              <span className="text-sm text-gray-500">{testimonial.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
