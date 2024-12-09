import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-50 h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/interior.jpg"
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative bg-white/80 rounded-lg shadow-lg p-10 max-w-md text-center">
        <h5 className="text-gray-500 font-medium tracking-wide mb-2">
          New Arrival
        </h5>
        <h1 className="text-3xl font-bold text-yellow-800 mb-4">
          Discover Our New Collection
        </h1>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-500">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Hero;

