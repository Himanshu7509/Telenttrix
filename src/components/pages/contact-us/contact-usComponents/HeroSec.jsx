import React from "react";
import contactImg from "../../../../assets/contactbanner.jpg";
import { useState } from "react";
import ContactModal from "../../../common/modal/ContactModal";

const HeroSec = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

        <div className="w-full flex justify-center sm:justify-end px-4 sm:px-6 md:px-12 relative z-10">
          <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center text-center">
            <h2 className="text-lg sm:text-xl lg:text-3xl text-white font-bold ml-4 sm:ml-6">
              Questions? Queries? Feedback?
            </h2>
            <p className="mt-2 sm:mt-4 md:mt-12 text-base sm:text-lg text-white font-semibold">
              Click below to
            </p>
            <div>
              <a
                onClick={() => setIsModalOpen(true)}
                href="#"
                className="inline-block mt-2 px-4 py-2 bg-white text-blue-900 font-semibold rounded-2xl shadow-md hover:bg-black hover:text-white transition"
              >
                CONTACT US TODAY!
              </a>
            </div>
          </div>
        </div>

        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </>
  );
};

export default HeroSec;
