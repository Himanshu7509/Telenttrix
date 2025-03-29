import React from "react";
import Video from "../../../../assets/values-video.mp4";

const OurValues = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header Section */}
      <div className="bg-[#253e91] text-white text-center py-6 text-xl sm:text-2xl md:text-[28px] font-semibold w-full">
        Our Values
        <div className="w-20 h-1 bg-[#fba91e] mx-auto my-2"></div>
      </div>

      {/* Content Section */}
      <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 mt-6 sm:mt-8">
        
        {/* Video Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <video className="w-full max-w-[450px] lg:max-w-[523px] h-auto" controls>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text & Buttons Section */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-8 text-center md:text-left">
          
          {/* EVOLVE Boxes */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {["E", "V", "O", "L", "V", "E"].map((letter, index) => (
              <div
                key={index}
                className={`text-white font-bold text-3xl sm:text-[40px] px-4 py-1 rounded ${
                  [
                    "bg-[#ed4a42]",
                    "bg-[#fba91e]",
                    "bg-[#11bcce]",
                    "bg-[#253e91]",
                    "bg-[#9cdbf5]",
                    "bg-[#6c348d]",
                  ][index]
                }`}
              >
                {letter}
              </div>
            ))}
          </div>

          {/* Visionary Text */}
          <div className="w-full mt-4">
            <h3 className="text-[#9cdbf5] font-semibold text-lg sm:text-xl">
              VISIONARY
            </h3>
            <p className="text-gray-900 mt-2 font-semibold text-sm sm:text-[14px]">
              We have a vision for the organization and actively create our
              future, in full awareness and understanding of the dynamics of
              this sector.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-6">
              <button className="bg-[#9cdbf5] text-white font-semibold py-2 px-8 sm:px-10 rounded-3xl shadow-md hover:bg-[#84cef1] transition w-full sm:w-auto">
                Watch Video
              </button>
              <button className="bg-[#9cdbf5] text-white font-semibold py-2 px-8 sm:px-10 rounded-3xl shadow-md hover:bg-[#84cef1] transition w-full sm:w-auto">
                Apply Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurValues;
