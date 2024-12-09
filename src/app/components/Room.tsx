// Room.tsx
import React from "react";

const Room = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-gray-50">
      <div className="w-1/2">
        <h2 className="text-3xl font-bold text-gray-900">50+ Beautiful rooms inspiration</h2>
        <p className="mt-4 text-lg text-gray-600">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button className="mt-6 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
          Explore More
        </button>
      </div>

      <div className="w-1/2 space-x-4">
        <div className="flex space-x-4">
          <div className="flex flex-col justify-start items-center">
            <img
              src="https://via.placeholder.com/300x400"
              alt="Room"
              className="w-40 h-56 object-cover rounded-lg shadow-md"
            />
            <div className="mt-4 text-center">
              <span className="text-sm font-medium text-gray-600">01 — Bed Room</span>
              <h3 className="text-xl font-semibold mt-1 text-gray-900">Inner Peace</h3>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center">
            <img
              src="https://via.placeholder.com/300x400"
              alt="Room"
              className="w-40 h-56 object-cover rounded-lg shadow-md"
            />
            <div className="mt-4 text-center">
              <span className="text-sm font-medium text-gray-600">02 — Dining Room</span>
              <h3 className="text-xl font-semibold mt-1 text-gray-900">Serene Dining</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;


