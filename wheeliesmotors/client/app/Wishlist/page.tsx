// components/YamahaR15.tsx
import React from 'react';

const YamahaR15: React.FC = () => {
  return (
    <div className="flex bg-white p-4 rounded-lg shadow-md">
      {/* Left side: Images */}
      <div className="w-1/2">
        {/* Display multiple small images */}
        {/* Main large image */}
        <img
          src="/path/to/matte-black-motorcycle.jpg"
          alt="Yamaha R15S STD BS6 - Matte Black"
          className="w-full rounded-lg"
        />
      </div>

      {/* Right side: Specifications */}
      <div className="w-1/2 ml-4">
        <h2 className="text-xl font-semibold">Yamaha R15S STD BS6 - Matte Black</h2>
        <ul className="mt-4">
          <li>Transmission: Manual</li>
          <li>Start System: Self Start</li>
        </ul>

        {/* Color options */}
        <div className="mt-4">
          <p className="font-semibold">Color:</p>
          <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-black"></div>
          </div>
        </div>

        {/* Yellow arrow button */}
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default YamahaR15;
