import React from 'react';

const CoreServicesSection = () => {
  return (
    <section className="text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-red-600 mb-10">
          Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white text-blue-800 p-8 rounded-lg shadow-xl text-lg font-semibold flex items-center justify-center hover:scale-105 transition-transform">
            B2B Travel Networking
          </div>
          <div className="bg-white text-blue-800 p-8 rounded-lg shadow-xl text-lg font-semibold flex items-center justify-center hover:scale-105 transition-transform">
            Brand Promotion
          </div>
          <div className="bg-white text-blue-800 p-8 rounded-lg shadow-xl text-lg font-semibold flex items-center justify-center hover:scale-105 transition-transform">
            Digital Marketing &amp; Social Media
          </div>
          <div className="bg-white text-blue-800 p-8 rounded-lg shadow-xl text-lg font-semibold flex items-center justify-center hover:scale-105 transition-transform">
            Website &amp; SEO Optimization
          </div>
          <div className="bg-white text-blue-800 p-8 rounded-lg shadow-xl text-lg font-semibold flex items-center justify-center hover:scale-105 transition-transform">
            Exclusive Business Listings
          </div>
          <div className="bg-white text-blue-800 p-8 rounded-lg shadow-xl text-lg font-semibold flex items-center justify-center hover:scale-105 transition-transform">
            Travel Industry Events &amp; Webinars
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
