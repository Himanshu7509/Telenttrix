import React from "react";
import Img1 from "../../../../assets/51.jpg";

const OurCulture = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row items-center px-4 sm:px-6 py-10">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h2 className="text-[#6b3096] font-bold text-2xl sm:text-3xl">
              Our Culture
            </h2>
            <div className="w-20 h-1 bg-[#fba91e] mx-auto md:mx-0 my-2"></div>

            <p className="text-gray-800 text-sm sm:text-[14px] font-semibold mt-4">
              At Artech, we provide a fun, dynamic, performance-oriented work
              environment, based on the principles of mutual respect, open
              communication, trust, and accountability.
            </p>

            <p className="text-gray-800 text-sm sm:text-[14px] font-semibold mt-4">
              At the heart of our culture is ownership. Of our vision. Of our
              values. Of our purpose.
            </p>

            <p className="text-gray-800 text-sm sm:text-[14px] font-semibold mt-4">
              We’re driven by a common, shared goal and a focus on individual and
              team achievement, which manifests itself through clarity of thought,
              decisive action, empowerment and development of our people, and
              strong, inclusive leadership. We focus on the needs of our clients
              and our deployed workforce working as one to deliver on our promises
              and commitments.
            </p>

            <p className="text-gray-800 text-sm sm:text-[14px] mt-4 font-semibold">
              We’re proud to be who we are. We are Artech.
            </p>
          </div>

          {/* Right Side: Image Section */}
          <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
            <img src={Img1} alt="Culture 1" className="w-full max-w-[450px] md:max-w-[555px] rounded-md shadow-md" />
          </div>
        </div>
      </div>

      {/* Apply Now Section */}
      <div className="mt-10 mb-12 w-full text-center px-4">
        <p className="text-lg sm:text-xl">Explore Opportunities</p>
        <button className="mt-3 bg-blue-900 text-white px-8 py-3 rounded-full text-sm sm:text-[15px] border hover:bg-white hover:text-blue-900 transition shadow-md">
          Apply Now
        </button>
      </div>
    </>
  );
};

export default OurCulture;
