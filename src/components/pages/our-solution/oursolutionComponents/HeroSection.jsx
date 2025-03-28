import React from 'react';
import Banner from '../../../../assets/Our-solutions-banner-1.png';

const HeroSection = () => {
  return (
    <div
      className="relative flex flex-col items-end justify-end text-center p-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="bg-transparent bg-opacity-90 p-10 rounded-lg">
        <h1 className="text-white text-3xl md:text-4xl font-bold">
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
