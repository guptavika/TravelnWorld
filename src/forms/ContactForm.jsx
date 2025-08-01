import React, { useState } from "react";
import Swal from "sweetalert2";
import { MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace this URL with your backend API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We will get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Could not send your message. Please check your network.",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-10 px-4 md:px-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Get in Touch
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-8 md:w-1/2">
          {/* Address */}
          <div className="flex gap-6 items-start">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
              <svg
                viewBox="0 0 512 512"
                height="40"
                width="40"
                fill="currentColor"
                style={{ color: "#01055b" }}
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                    
                  d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                
                >
                  
                </path>
                <circle
                  cx="256"
                  cy="192"
                  r="48"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  
                >
                    
                </circle>
                
              </svg>
              <MapPin />
              <p className=" text-base text-gray-800">
           
                34, Sewak Park (1st floor), Dwarka More Metro, Near Metro
                <br />
                Pillar No-772, New Delhi-110059
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-6 items-start">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                height="40"
                width="40"
                fill="currentColor"
                style={{ color: "#01055b" }}
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M20 15.45c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1 11.36 11.36 0 0 1-.57-3.57c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"></path>
              </svg>
              <div className="flex flex-col">
                <p className="text-base font-medium">Phone Number</p>
                <p className="text-base text-gray-800">1800-121-4252</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-6 items-start">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                height="40"
                width="40"
                fill="currentColor"
                style={{ color: "#01055b" }}
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4z"></path>
              </svg>
              <div className="flex flex-col">
                <p className="text-base font-medium">Email Us</p>
                <p className="text-base text-gray-800">info@travelnworld.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-8 md:w-1/2">
          <h2 className="text-xl font-semibold text-center">Leave a Reply</h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="flex gap-5 flex-col md:flex-row">
              <div className="relative w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-3 px-4 w-full"
                  required
                />
              </div>
              <div className="relative w-full md:w-1/2">
                <input
                  type="email"
                  placeholder="Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-3 px-4 w-full"
                  required
                />
              </div>
            </div>
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg py-3 px-4"
              required
            />
            <textarea
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="6"
              className="border border-gray-300 rounded-lg py-3 px-4"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white bg-[#01055b] rounded-lg w-full px-5 py-3 flex justify-center items-center transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
