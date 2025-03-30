import React from "react";
import IndiaImg from "../../../../assets/IND.jpg";
import USAImg from "../../../../assets/USA.jpg";
import CanadaImg from "../../../../assets/Canada.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import ContactModal from "../../../common/modal/ContactModal";

const GlobalSec = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-20 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12">
      <div className="flex flex-wrap justify-center gap-8 md:gap-28 mb-6">
        <div className="text-center">
          <img src={USAImg} alt="USA" className="w-20 h-20 mx-auto" />
          <button className="bg-red-500 text-white px-8 py-1 rounded-full mt-8 border-2 border-red-500 transition-all duration-300 hover:bg-white hover:text-red-500">
            USA
          </button>
        </div>
        <div className="text-center">
          <img src={CanadaImg} alt="Canada" className="w-20 h-20 mx-auto" />
          <button className="bg-red-500 text-white px-8 py-1 rounded-full mt-8 border-2 border-red-500 transition-all duration-300 hover:bg-white hover:text-red-500">
            CANADA
          </button>
        </div>
        <div className="text-center">
          <img src={IndiaImg} alt="India" className="w-20 h-20 mx-auto" />
          <button className="bg-red-500 text-white px-8 py-1 rounded-full mt-8 border-2 border-red-500 transition-all duration-300 hover:bg-white hover:text-red-500">
            INDIA
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-t from-blue-900 to-blue-700 text-white text-center px-6 py-2 rounded-full mb-4 mt-8 shadow-md">
        Also present in Mexico, Ireland, Poland & Singapore
      </div>

      <div className="flex flex-col md:flex-row gap-12 p-6">
        <div className="md:w-1/2">
          <h3 className="font-bold text-md text-gray-800 mb-8 mt-4">
            Global Corporate Headquarters
          </h3>
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-red-500 w-10 h-10 rounded-full flex items-center justify-center">
              <FaLocationDot className="text-white text-xl" />
            </div>
            <p className="text-gray-700 font-semibold">
              Artech L.L.C.
              <br />
              360 Mt. Kemble Ave., Suite 2000
              <br />
              Morristown, NJ 07960
            </p>
          </div>
          <div className="flex items-center gap-4 mt-10">
            <div className="bg-red-500 w-10 h-10 rounded-full flex items-center justify-center">
              <FaPhone className="text-white text-xl" />
            </div>
            <p className="text-gray-700 font-semibold">973.998.2500</p>
          </div>
        </div>

        <div className="md:w-1/2">
          <h3 className="font-bold text-md text-gray-800 mb-2">
            Have any questions or concerns?
          </h3>
          <h3 className="font-bold text-md text-gray-800 mb-6">
            Contact us at the following email addresses:
          </h3>

          <ul className="text-sm text-gray-600 space-y-2 list-[circle] pl-4">
            <li className="font-bold">
              General information -{" "}
              <a
                href="mailto:info2@artech.com"
                className="text-blue-500 hover:underline"
              >
                info2@artech.com
              </a>
            </li>
            <li className="font-bold">
              Employment verification -{" "}
              <a
                href="mailto:employmentverification@artech.com"
                className="text-blue-500 hover:underline"
              >
                employmentverification@artech.com
              </a>
            </li>
            <li className="font-bold">
              Inquiry about your W2 -{" "}
              <a
                href="mailto:w2@artech.com"
                className="text-blue-500 hover:underline"
              >
                w2@artech.com
              </a>
            </li>
            <li className="font-bold">
              Media inquiries -{" "}
              <a
                href="mailto:pr@artech.com"
                className="text-blue-500 hover:underline"
              >
                pr@artech.com
              </a>
            </li>
            <li className="font-bold">
              All other issues and concerns -{" "}
              <a
                href="mailto:employeeservice2@artech.com"
                className="text-blue-500 hover:underline"
              >
                employeeservice2@artech.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="mb-2">To find out how we can help you</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-500 text-white px-8 py-2 rounded-full mb-8 border-2 border-red-500 transition-all duration-300 hover:bg-white hover:text-red-500"
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

export default GlobalSec;
