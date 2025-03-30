import React from 'react'
import sustainabilityImage from "../../../../assets/csr11.png";
import mentorImage from "../../../../assets/csr10.png";

export default function Initiatives() {
  return (
    <>
     <section className="w-full mx-auto py-12">

  <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-between mb-12 gap-8 md:gap-16">
   
    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
      <div className="relative w-full max-w-md">
        <img src={mentorImage} alt="Mentorship" className="rounded-lg" />
      </div>
    </div>

 
    <div className="md:w-1/2 text-center md:text-left">
      <p className="text-gray-900  text-justify font-semibold">
        On behalf of Artech, Ranjini Poddar is involved with several
        clients as a mentor to women-owned businesses. One of the
        significant programs is the NMSDC’s Emerging Young Entrepreneurs
        program. This program was created to support a commitment by the
        National Minority Supplier Development Council (NMSDC) to advance
        business opportunities for certified minority and women business
        enterprises and connect them to corporate members.
      </p>
      <p className="text-gray-900  text-justify font-semibold mt-4">
        Informally, Ranjini Poddar has been mentoring smaller minority and
        women business owners for years.
      </p>
      <p className="text-gray-900  text-justify font-semibold mt-4">
        In 2008, she engaged the Artech team in a program called AIM (Ask
        Impressive MBE) organized by the NY-NJ Minority Supplier
        Development Council.
      </p>
    </div>
  </div>


  <div className="bg-orange-400 py-12 px-8 md:px-36 text-center w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
   
    <div className="md:w-1/2 text-center md:text-left">
      <h3 className="text-2xl font-semibold text-gray-900">
        Sustainability Initiatives
      </h3>
      <div className="w-20 h-1 bg-gray-900 my-2 mx-auto md:mx-0"></div>
      <p className="text-gray-900  text-justify font-semibold">
        At Artech we are committed to building a sustainable future,
        through a multitude of interventions, aimed at creating a better
        tomorrow for the generations to come.
      </p>
    </div>

 
    <div className="md:w-1/2 flex justify-center">
      <div className="relative w-full max-w-md">
        <img src={sustainabilityImage} alt="Sustainability" className="rounded-lg" />
      </div>
    </div>
  </div>
</section>

    </>
  )
}