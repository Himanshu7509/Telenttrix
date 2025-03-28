import React from "react";
import sideImg from "../../../../assets/mgsv.png";

const ManageService = () => {
  return (
    <div className="bg-blue-900 text-white py-16 w-full flex justify-center">
      <div className="w-[80%] flex flex-col lg:flex-row items-start gap-10">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[90%]">
            <img src={sideImg} alt="Managed Services" className="w-full" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-yellow-400 text-3xl font-bold">
            Managed Services and Project Delivery
          </h2>
          <hr className="w-16 border-yellow-400 my-3" />

          <h3 className="text-xl font-bold mt-4">
            Delivering Innovation at the Intersection of{" "}
            <span className="text-white">
              BUSINESS + EXPERIENCE + TECHNOLOGY
            </span>
          </h3>

          <p className="mt-4 text-gray-200 text-[14px] font-bold">
            At Artech, we provide intelligent consulting solutions to our
            clients, for a wide range of requirements.
          </p>
          <p className="mt-2 text-gray-200 text-[14px] font-bold">
            With extensive experience in consulting and access to the latest
            technology platforms, we provide customized solutions that leverage
            the best of traditional consulting, combined with the industry's
            most powerful staffing engine.
          </p>

          <div className="mt-6 w-full text-center">
            <button className="mt-3 bg-white text-blue-900 px-[35px] py-[10px] rounded-4xl text-[15px] border font-semibold hover:bg-blue-900 hover:text-white transition">
              CONTACT US TODAY!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
