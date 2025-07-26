import React from 'react';
import {
  MapPin,
  Calendar,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const TravelersTestimonialpagelay = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the experiences that make our journeys unforgettable through the words of our adventurous travelers
        </p>
      </div>

      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">

          {/* Image Side */}
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=300&fit=crop"
              alt="Kyoto, Japan"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Kyoto, Japan</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">April 2024</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                alt="Emma Rodriguez"
                className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Emma Rodriguez</h3>
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Madrid, Spain
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-6">
              {Array(5).fill().map((_, index) => (
                <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-sm text-gray-600">5/5</span>
            </div>

            <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
              "The cherry blossom season in Kyoto was magical, and this travel company made it even more special.
              The traditional ryokan stay, the private tea ceremony, and the guided temple visits created memories
              that will last forever. Exceptional service throughout!"
            </blockquote>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mb-6">
              {[0, 1, 2, 3, 4].map((dot, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    dot === 2 ? 'bg-blue-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group">
          <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group">
          <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1 mt-6">
        <div className="bg-blue-500 h-1 rounded-full transition-all duration-300" style={{ width: '60%' }}></div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
          <div className="text-gray-600">Happy Travelers</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
          <div className="text-gray-600">Average Rating</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
          <div className="text-gray-600">Destinations</div>
        </div>
      </div>
    </div>
  );
};

export default TravelersTestimonialpagelay;
