import React from "react";
import sideImg from "../../../../assets/mgsv.png";

const ManageService = () => {
  return (
    <div className="bg-blue-900 text-white py-16 w-full flex justify-center">
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] flex flex-col lg:flex-row items-center lg:items-start gap-10">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-[90%] sm:w-[80%] lg:w-full">
            <img src={sideImg} alt="Managed Services" className="w-full" />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-yellow-400 text-2xl sm:text-3xl font-bold">
            Managed Services and Project Delivery
          </h2>
          <hr className="w-16 border-yellow-400 mx-auto lg:mx-0 my-3" />

          <h3 className="text-lg sm:text-xl font-bold mt-4">
            Delivering Innovation at the Intersection of{" "}
            <span className="text-white">
              BUSINESS + EXPERIENCE + TECHNOLOGY
            </span>
          </h3>

          <p className="mt-4 text-gray-200 text-sm sm:text-[14px] font-bold">
            At Artech, we provide intelligent consulting solutions to our
            clients, for a wide range of requirements.
          </p>
          <p className="mt-2 text-gray-200 text-sm sm:text-[14px] font-bold">
            With extensive experience in consulting and access to the latest
            technology platforms, we provide customized solutions that leverage
            the best of traditional consulting, combined with the industry's
            most powerful staffing engine.
          </p>

          {/* Button */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="mt-3 bg-white text-blue-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-[15px] font-semibold border hover:bg-blue-900 hover:text-white transition">
              CONTACT US TODAY!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
