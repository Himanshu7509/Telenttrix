import React from 'react';
import Banner from '../../../../assets/Careers-banner.png';

const HeroSec = () => {
  return (
    <div
      className="relative flex flex-col items-center md:items-end justify-center text-center p-5 bg-cover bg-center  h-auto lg:h-[451px]"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="bg-transparent bg-opacity-90 p-5 w-full md:w-[60%] lg:w-[48%]">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
          Empowering your career. <br className="hidden sm:block" /> Maximizing your intelligence
        </h1>

        <p className="mt-4 sm:mt-6 text-white text-sm sm:text-lg">Explore Opportunities</p>

        {/* Buttons Section */}
        <div className="w-full flex justify-center mt-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-[80%] md:w-[74%]">
            <button className="w-full sm:w-auto bg-white text-blue-900 font-semibold py-2 px-6 sm:px-8 rounded-full text-sm sm:text-lg shadow-md hover:bg-gray-200">
              Consulting Jobs
            </button>
            <button className="w-full sm:w-auto bg-white text-blue-900 font-semibold py-2 px-6 sm:px-8 rounded-full text-sm sm:text-lg shadow-md hover:bg-gray-200">
              Corporate Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
