import React from "react";
import second from "../../../../assets/csr2.png";
import third from "../../../../assets/csr3.png";
import fourth from "../../../../assets/csr4.png";
import fifth from "../../../../assets/csr5.png";

export default function School() {
  return (
    <>
      <section className="w-full">
        <div className="bg-blue-900 text-white text-center py-8 px-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Community Building
          </h2>
          <div className="w-36 h-1 bg-orange-400 my-4 mx-auto"></div>
          <div className="mt-10 mx-auto">
            <p className="text-lg font-semibold">
              We believe that real change and progress can only come from a
              change in thinking at every level of society.
              <br />
              Our community building initiatives aim to educate and empower the
              underprivileged to dream big and achieve more.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 px-6 md:px-12 py-12">
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-lg">
              <img
                src={second}
                alt="Yale School of Medicine"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              Yale School of Medicine
            </h3>
            <div className="w-32 h-1 bg-orange-300 my-2 mx-auto md:mx-0"></div>
            <p className="text-gray-900 text-justify font-semibold text-lg leading-relaxed">
              In November 2015, Artech donated $1 million to the Yale School of
              Medicine to fund Dermatology-Autoimmune Research.
            </p>
            <p className="text-gray-900 text-justify font-semibold text-lg leading-relaxed mt-4">
              With this donation, Artech established the Artech Resource Fund
              for Dermatology Diseases, thus, re-iterating its commitment
              towards advanced research in the field of science and medicine.
            </p>
            <p className="text-gray-900 text-justify font-semibold text-lg leading-relaxed mt-4">
              The funds provided by the Ranjini and Ajay Poddar Resource Fund
              for Dermatologic Diseases Research aided in studies that led the
              researchers to theorize that Janus Kinase (JAK) – signal
              transducer and activator of transcription (STAT) signaling could
              play a role in treating certain forms of sarcoidosis.
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl px-6 py-12 mx-auto gap-12 md:gap-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
              Hackensack University Medical Center
            </h2>

            <div className="w-32 h-1 bg-orange-300 my-2 mx-auto md:mx-0"></div>
            <h3 className="text-lg font-semibold mt-4">
              Funding Autoimmune Research
            </h3>
            <p className="mt-3 text-justify font-semibold text-gray-900">
              In August 2013, Artech donated $1 million to the Hackensack
              University Medical Center Foundation to fund the “Artech
              Autoimmune Cell Re-Education Study.” The donation funded the
              efforts of Dr. Yong Zhao, whose pioneering research and clinical
              trials on Type One Diabetes have been expanded to cover a wide
              range of autoimmune diseases.
            </p>
            <p className="mt-3 text-justify font-semibold text-gray-900">
              Artech believes that this funding will help millions of Americans
              who are inflicted with autoimmune diseases such as Type One
              Diabetes, Alopecia Areata, Multiple Sclerosis, Crohn’s Disease,
              Rheumatoid Arthritis, and Celiac Disease. This will in turn help
              advance this research to find a cure that will help millions of
              children in the U.S. and across the world.
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg">
              <img src={third} alt="Hackensack University Medical Center" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl px-6 py-12 mx-auto gap-12 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <img src={fourth} alt="Ekal Vidyalaya" />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
              Ekal Vidyalaya
            </h2>

            <div className="w-36 h-1 bg-orange-300 my-2 mx-auto md:mx-0"></div>
            <h3 className="text-lg font-semibold mt-4">
              Eradicating illiteracy from rural and tribal India
            </h3>
            <p className="mt-3 text-justify font-semibold text-gray-900">
              Artech is a long-term supporter of Ekal Vidyalaya, and the company
              to date has donated more than $450,000 to the organization.
            </p>
            <p className="mt-3 text-justify font-semibold text-gray-900">
              In February 2020, Artech invested in Ekal’s Gramothan Resource
              Center in Hoshangabad, India. The Ekal Gramothan Centers work
              towards positively transforming rural lives by creating
              micro-entrepreneurs across the country to create economically
              self-reliant village communities.
            </p>
            <p className="mt-3 text-justify font-semibold text-gray-900">
              In November 2017, Artech donated $250,000 to Ekal Vidyalaya which
              is working towards rendering basic primary education to children
              in rural & tribal India, to help eradicate illiteracy. The schools
              are engaged in imparting moral education, health care education
              and organic farming techniques to rural and tribal children in
              various remote locations of India.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12 gap-12 md:gap-16">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
            The Artech-Dalmia Center for IT
          </h2>

          <div className="w-36 h-1 bg-orange-300 my-2 mx-auto md:mx-0"></div>
          <p className="mt-6 text-justify font-semibold text-gray-900">
            In 2007, Artech’s diversity commitment went global with the
            construction of the Artech-Dalmia Center for IT, a state-of-the-art
            facility in Rajasthan, India.
          </p>
          <p className="mt-3 text-justify font-semibold text-gray-900">
            The Centre was inaugurated in January 2008. The facility, located at
            the prestigious all-women Banasthali University, provides women with
            training in software, hardware, and communication technologies
            necessary to obtain bachelor’s and master’s degrees in the field of
            IT. The goal of the Center is to empower women with cutting-edge
            technology skills and to improve the quality of life for its
            community.
          </p>
          <p className="mt-3 text-justify font-semibold text-gray-900">
            The Center is equipped with smart classrooms and high-end computing
            laboratories for Computer Aided Design, Scientific Computing,
            Microelectronics & VLSI design, and Computational Biology.
          </p>
          <p className="mt-3 text-justify font-semibold text-gray-900">
            As part of a 2019-2020 grant of $500,000 USD, Artech funded an
            expansion of the Athletic Center at the University. The facility
            will include racquet sports such as Squash, Badminton, and Table
            Tennis. Additionally, a gymnasium, running track as well as a
            yoga/meditation area will also be a part of the expansion.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <img src={fifth} alt="Artech-Dalmia Center for IT" />
          </div>
        </div>
      </section>
    </>
  );
}
