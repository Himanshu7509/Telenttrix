import React from "react";
import certificationData from "../../../../assets/Group-certification.png";
import groupCertification from "../../../../assets/grate-place-to-work-banner.png";

const GreatCertification = () => {
  return (
    <div className="w-full bg-blue-800 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
        <div className="hidden sm:block">
          <img
            src={groupCertification}
            alt="Team Collaboration"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Certification Logos */}
          <div className="w-full flex justify-center relative">
            <img
              src={certificationData}
              alt="certification"
              className="max-w-full h-auto  relative bottom-8" // Adjusted margin-top and relative positioning to move image down
              style={{ maxWidth: "80%" }} // Reduced max-width for smaller size
            />
          </div>

          {/* Main Content */}
          <div className="space-y-2">
            <h2 className="text-white text-xl sm:text-2xl font-bold">
              <span className="border-b-2 border-orange-500"> Great </span>Place
              to Work™ Certification
            </h2>
            <p className="text-white text-base sm:text-xs text-justify font-semibold">
              We take great pride in being certified as a Great Place to Work in
              both the US and India. Our organization is dedicated to providing
              outstanding opportunities. We embrace diversity, foster
              collaboration and innovation, and actively support personal and
              professional growth. Experience a workplace that empowers and
              uplifts.
            </p>
          </div>

          {/* Know More Button */}

          <button className="bg-white text-blue-800 px-10 py-3 rounded-3xl hover:bg-gray-100 transition duration-300 w-48 mt-5">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreatCertification;
