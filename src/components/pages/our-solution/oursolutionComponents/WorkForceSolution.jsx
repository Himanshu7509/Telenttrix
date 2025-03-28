import React from "react";
import Sideimg from "../../../../assets/workforce.png";

const WorkForceSolution = () => {
  return (
    <div className="bg-[#fba91e] py-16 px-6 w-full flex justify-center">
      <div className="max-w-6xl flex flex-col md:flex-row items-start justify-between">
        <div className="max-w-2xl text-left text-black">
          <h2 className="text-3xl font-bold text-blue-900">
            Workforce Solutions
          </h2>
          <div className="w-16 h-1 bg-red-500 my-2"></div>
        <div className="w-[90%]">
        <p className="text-md font-bold mt-8">
            Artech understands that attracting and deploying specialized
            professionals is essential to meeting clients’ evolving business
            demands. The Artech team anticipates the needs of its clients and
            provides smart, effective, and proven workforce staffing solutions
            that deliver significant results.
          </p>

          <p className="text-md font-bold mt-4">
            We pride ourselves on high quality and timely deliverables. Our
            proven delivery models and unrivaled execution enable us to
            interpret and effectively respond to clients’ high-volume staffing
            requirements.
          </p>

          <p className="text-md font-bold mt-4">
            We have secured long-term partnerships with Fortune 500 and
            Government clients as a preferred go-to supplier across multiple
            regions and countries, offering consistent deliverables, terms,
            rates, and cost savings.
          </p>
        </div>
          

        <div className="mt-6 w-full text-center">
            <p className="font-semibold text-lg">
              To find out how we can help you
            </p>
            <button className="mt-3 bg-blue-900 text-white px-[35px] py-[10px] rounded-4xl text-[15px] border font-semibold hover:bg-white hover:text-blue-900 transition">
              CONTACT US TODAY!
            </button>
          </div>
        </div>
      

      <div className="hidden md:block w-1/2">
        <img src={Sideimg} alt="Workforce Solutions" className="w-full" />
      </div>
      </div>
    </div>
  );
};

export default WorkForceSolution;
