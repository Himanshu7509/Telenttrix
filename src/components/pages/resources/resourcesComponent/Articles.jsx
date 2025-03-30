import React from "react";
import ArticalImg from "../../../../assets/Articles.png";

const Articles = () => {
  return (
    <div
      className="relative bg-gray-50 bg-cover bg-center w-full lg:min-h-[70vh] flex items-center px-4 py-6"
      style={{ backgroundImage: `url(${ArticalImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      {/* Content - Consistent across all screen sizes */}
      <div className="relative z-10 w-full md:w-2/5 ml-auto mr-4 md:mr-10 flex flex-col items-center">
        <h2 className="text-[7px] md:text-2xl font-semibold leading-tight text-right text-blue-800">
          Knowledge Resources: <br /> Articles from Artech
        </h2>
        <p className="mt-2 text-[7px] md:text-sm text-black text-right">
          To find out how we can help you
        </p>

        <button className="mt-3 bg-white text-blue-700 text-[7px] md:text-sm font-semibold py-1 px-3 rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300">
          CONTACT US TODAY!
        </button>
      </div>
    </div>
  );
};

export default Articles;
