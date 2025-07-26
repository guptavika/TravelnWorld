import React, { useState } from "react";

export default function BusinessPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with text over image */}
      <section
        className="relative flex items-center justify-center h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/amazing-business-wallpaper-4k-background_839182-1646.jpg?w=2000')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Grow Your Business with Us</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Contact Form as Popup */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-lg relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-3 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-3 rounded"
              />
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 px-4 py-3 rounded"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
