import React from 'react';

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row-reverse items-center gap-12">
      {/* Right Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="../../public/AboutVideos/AboutSection.png"
          alt="Company Overview"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Left Side - Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl font-bold text-blue-700 mb-6">
          Company Overview
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Travel n World is a global B2B travel platform, empowering travel professionals
          with marketing, networking, and expansion solutions. We help travel agents grow their
          business by providing reliable B2B travel services across India. As a travel agent supplier,
          we work closely with agents to offer great deals on hotels, tours, and transport. With our
          DMC travel partnerships in India, we make it easier for agents to arrange complete travel
          experiences, from local sightseeing to full holiday packages.
        </p>
        <ul className="space-y-3 text-lg">
          <li>
            <strong>Company Name:</strong> Travel n World
          </li>
          <li>
            <strong>Tagline:</strong> Grow Your Travel Business Digitally!
          </li>
          <li>
            <strong>Business Type:</strong> B2B Travel Promotion &amp; Networking Platform
          </li>
          <li>
            <strong>Establishment Year:</strong> 2021
          </li>
          <li>
            <strong>Headquarters:</strong> Delhi, India
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
