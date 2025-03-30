import React from "react";
import { useState } from "react";
import ContactModal from "../../../common/modal/ContactModal";

const CountriesBranches = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-red-500 text-white text-center py-5 font-bold text-3xl">
        Canada
      </div>
      <div className="p-6 text-center">
        <p className="font-medium mb-4">Telenttrix Technology Canada Limited</p>
        <p>6700 Century Avenue, Suite 204</p>
        <p className="mb-4">Mississauga, Ontario L5N 6A4</p>
        <p>Phone Number:</p>
        <p>+1 (365) 601-9570</p>
        <div className="text-center mt-8">
          <p className="mb-2">To find out how we can help you</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-red-500 text-white px-8 py-2 rounded-full mb-8 border-2 border-red-500 transition-all duration-300 hover:bg-white hover:text-red-500"
          >
            CONTACT US TODAY
          </button>
        </div>
      </div>

      <div className="bg-blue-800 text-white text-center py-5 font-bold text-3xl">
        India
      </div>

      <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div>
          <p className="font-medium mb-4">Telenttrix India Headquarters</p>
          <p>Telenttrix Infosystems Pvt Ltd</p>
          <p>Candor Techspace,</p>
          <p>Plot No. 2, Tower-5, Fifth Floor, Sector 62, Noida,</p>
          <p>Uttar Pradesh – 201307</p>
          <p className="mt-4">Phone: 91-120-666-6333</p>
          <p>Fax: 91-120-666-6366</p>
        </div>
        <div>
          <p className="font-medium mb-4">Bengaluru Regional Office</p>
          <p>Telenttix Infosystems Pvt Ltd</p>
          <p>Cyber Park, 1st Floor, Block B,</p>
          <p>Plot No. 76 & 77, Electronic City Phase 1</p>
          <p>Doddathogur, Hosur Road </p>
          <p>Bengaluru 560100</p>
          <p className="mt-4">Phone: +91-080-67344999</p>
        </div>
        <div>
          <p className="font-medium mb-4">Bhopal Regional Office</p>
          <p>Telenttrix Infosystems Pvt Ltd</p>
          <p>IT Park, 2nd Floor, Village Bidwai</p>
          <p>Adjacent to Rajiv Gandhi Proudyogiki</p>
          <p>Vishwavidayalaya</p>
          <p>Bhopal 462036</p>
          <p className="mt-4">Phone: +91-755-664080</p>
        </div>
      </div>

      <div className="bg-blue-300 text-center py-6 mt-4">
        <h2 className="text-lg md:text-xl font-medium text-gray-800">
          Other Telenttrix India offices and service delivery locations include:
        </h2>
      </div>

      <div className="p-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-28">
          <span className="font-medium">Chennai</span>
          <span className="font-medium">Hyderabad</span>
        </div>
        <p className="py-2 mt-12 font-medium">
          To find out how we can help you
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-800 text-white px-8 py-2 rounded-full mb-20 border-2 border-blue-800 transition-all duration-300 hover:bg-white hover:text-blue-800"
        >
          CONTACT US TODAY
        </button>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CountriesBranches;
