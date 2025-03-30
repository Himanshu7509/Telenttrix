import React from "react";
import { useState } from "react";
import mainimg from "../../../../assets/csr-page-banner.png";
import first from "../../../../assets/csr1.png";
import ContactModal from "../../../common/modal/ContactModal";

export default function Building() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full">
      <section
        className="mt-16 md:mt-24 relative w-full h-[500px] md:h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${mainimg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

        <div className="w-full flex justify-end px-6 md:px-12 relative z-10">
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center">
            <h2 className="text-xl text-white lg:text-blue-900 lg:text-3xl font-bold">
              Creating a brighter future <br /> for generations to come
            </h2>{" "}
            <br /> <br />
            <p className="mt-4 text-lg text-white lg:text-black font-semibold">
              To find out how we can help you
            </p>
            <div>
              <a
                onClick={() => setIsModalOpen(true)}
                href="#"
                className="inline-block mt-6 px-4 py-2 bg-white text-blue-900 font-semibold rounded-full shadow-md hover:bg-black hover:text-white transition"
              >
                CONTACT US TODAY!
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-12 md:gap-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-900">
              Community First Initiatives
            </h2>
            <div className="w-40 h-1 bg-orange-400 my-4 mx-auto md:mx-0"></div>
            <p className="text-gray-700  text-justify mt-10 text-lg font-bold leading-relaxed">
              Discover how we prioritize and contribute to the betterment of our
              communities, making a positive impact through various initiatives.
              Together, we strive to create a brighter future for all.
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={first}
                alt="Community Initiatives"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
