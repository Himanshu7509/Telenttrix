import React from 'react';
import Video from '../../../../assets/leftVideo.mp4';

const OurTalent = () => {
  return (
    <div className="bg-white py-10">
      {/* Header Section */}
      <div className="bg-[#ee4d42] text-white text-center py-6 text-[28px]  ">
        Our Talent Promise
        <div className="w-30 h-1 bg-[#fba91e] mx-auto my-2"></div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-18 items-center px-4 md:px-14 mt-10">
        {/* Video Section */}
        <div>
          <video controls className="w-full">
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Empowering your career. <br /> Maximizing your intelligence.
          </h2>
          <p className="border-b-3 border-[#fba91e] w-24 mb-4"></p>
          <p className="text-gray-700 mb-4 text-[14px] font-semibold">
            At Artech, we enable our team to maximize their intellect by providing unlimited opportunities for growth.
          </p>
          <p className="text-gray-700 mb-4 text-[14px] font-semibold">
            We have created a performance-oriented culture where our people are able to thrive while working with some of the largest organizations in the world, inspired by thought leaders among us, in a diverse and inclusive work environment that acknowledges and rewards performers while ensuring that they continue to learn and improve.
          </p>
          <p className="text-gray-700 text-[14px] font-semibold">
            Because when they are empowered, they become achievers in spirit and LIMITLESS at heart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTalent;