// // VideoBackground.jsx
// import React from "react";
// import Video from "../../public/hero.mp4";


// const useState[()]
// const VideoBackground = () => {
//   return (
//     <>
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute z-0 top-0 left-0 w-full h-full object-cover pt-10 "
//       >
//         <source src={Video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="relative z-1 ml-auto w-full max-w-[320px] p-4 mt-10 mr-5 bg-white bg-opacity-100 text-gray-800 rounded-lg shadow-lg">
//         <h2 className="text-lg font-bold text-blue-800">
//           Tell us what you're looking for!
//         </h2>
//         <form className="space-y-2 ">
//           <input
//             id="name"
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
//           />
//           <input
//             id="company_name"
//             type="text"
//             name="company_name"
//             placeholder="Your Business Name"
//             required
//             className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
//           />
//           <input
//             id="phone"
//             type="number"
//             name="phone"
//             placeholder="Your Phone Number"
//             required
//             className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
//           />
//           <input
//             id="email"
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
//           />
//           <input
//             id="location"
//             type="text"
//             name="location"
//             placeholder="Your Location"
//             className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
//           />
//           <textarea
//             name="your_requirements"
//             id="your_requirements"
//             placeholder="Your Requirements"
//             className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-blue-900 text-white py-1 rounded hover:bg-blue-800 transition"
//             onSubmit={}
//           >
//             Submit
//           </button>
//           <div className="flex items-center">
//             <input type="checkbox" name="agree" className="mr-2" />
//             <label className="text-sm text-gray-800">
//               I agree to get all Email/SMS from you.
//             </label>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default VideoBackground;

// VideoBackground.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";
import Video from "../../public/hero.mp4";

const VideoBackground = () => {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    phone: "",
    email: "",
    location: "",
    your_requirements: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      Swal.fire({
        icon: "warning",
        title: "Please agree",
        text: "You must agree to get Email/SMS updates.",
      });
      return;
    }

    try {
      // Example POST request to your API
      const response = await fetch("/api/send-form", {
        
        
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(response);

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: "Thank you for your message. We will contact you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          company_name: "",
          phone: "",
          email: "",
          location: "",
          your_requirements: "",
          agree: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <>
      <video
        autoPlay
        loop
        mute
        className="absolute z-0 top-0 left-0 w-full h-[36rem] object-cover pt-10 mb-[100px] "
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 ml-auto w-full max-w-[320px] p-4 mt-10 mr-5 bg-white bg-opacity-100 text-gray-800 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-blue-800">
          Tell us what you're looking for!
        </h2>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          />
          <input
            id="company_name"
            type="text"
            name="company_name"
            placeholder="Your Business Name"
            value={formData.company_name}
            onChange={handleChange}
            required
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          />
          <input
            id="phone"
            type="number"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          />
          <input
            id="location"
            type="text"
            name="location"
            placeholder="Your Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          />
          <textarea
            name="your_requirements"
            id="your_requirements"
            placeholder="Your Requirements"
            value={formData.your_requirements}
            onChange={handleChange}
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          ></textarea>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm text-gray-800">
              I agree to get all Email/SMS from you.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-1 rounded hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default VideoBackground;
