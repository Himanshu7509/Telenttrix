import React from 'react';
import Banner from '../../../../assets/Our-solutions-banner-1.png';

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-end justify-center text-center p-5 bg-cover bg-right lg:bg-center h-auto lg:h-[451px]"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="bg-transparent bg-opacity-90 p-5 md:p-10 ">
        <h1 className="text-white text-1xl md:text-[26px] font-semibold">
          Empowering businesses through <br /> applied human intelligence
        </h1>
        <div className="mt-4 text-xl font-semibold text-yellow-400">
          <p>Innovative Talent Supply Chain</p>
          <p>High Performing Teams</p>
          <p>Flexible Engagement Models</p>
        </div>
        <p className="mt-6 text-white text-lg">To find out how we can help you</p>
        <button className="mt-4 bg-white text-blue-900 font-semibold py-3 px-6 rounded-full text-lg shadow-md hover:bg-gray-200">
          CONTACT US TODAY!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
