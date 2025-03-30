import React from "react";
import sixth from "../../../../assets/csr6.png";
import seven from "../../../../assets/csr7.png";
import eigth from "../../../../assets/csr8.png";
import nine from "../../../../assets/csr9.jpg";

export default function Contribution() {
  return (
    <>
      <section className="w-full mx-auto px-14 py-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
            Contributing as One Artech
          </h2>

          <div className="w-36 md:w-64 lg:w-80 h-1 bg-orange-300 mx-auto my-2"></div>
          <p className="mt-8  text-justify font-semibold text-gray-900">
            At Artech, we believe that each of us is equally invested in
            creating a better tomorrow. As a part of our various efforts, our
            employees collectively walked more than 50 million steps to raise
            money for various charities.
          </p>
          <p className="mt-3  text-justify font-semibold text-gray-900">
            As part of our health and wellness program, Artech instituted a 100
            Days of Summer Challenge in 2017 for employees to walk a collective
            50 million steps. At the end of the successful program, Artech
            donated $5,000 to various charitable organizations including St.
            Jude Children’s Research Hospital, The Waterboys Foundation, and the
            Wounded Warrior Project. Artech has continued this program for the
            past four years.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12 gap-12 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <img src={sixth} alt="St. Jude Children's Research Hospital" />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-900">
              St. Jude Children’s Research Hospital
            </h3>

            <div className="w-36 h-1 bg-orange-300 my-2 mx-auto md:mx-0"></div>
            <p className="mt-6  text-justify font-semibold text-gray-700">
              St. Jude Children’s Research Hospital is dedicated to advancing
              cures and prevention for childhood cancer and other
              life-threatening diseases through research and treatment. It
              strongly believes that no child should be denied treatment based
              on race, religion, or a family’s ability to pay.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-900">Waterboys</h3>
            <div className="w-36 h-1 bg-orange-300 my-2 mx-auto md:mx-0"></div>
            <p className="text-gray-900  text-justify font-semibold mt-6">
              Named for one of the most overlooked but integral positions on any
              team, Waterboys unites professional athletes and fans in support
              of a single shared cause: providing clean, accessible drinking
              water to communities in need. Waterboys Foundation teams up with
              local crews domestically and internationally to provide
              sustainable water access that communities rely on.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <img src={seven} alt="Waterboys" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <img src={eigth} alt="Wounded Warrior Project" />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-900">
              Wounded Warrior Project
            </h3>
            <div className="w-36 h-1 bg-orange-300 my-2 mx-auto md:mx-0"></div>
            <p className="text-gray-900  text-justify font-semibold mt-6">
              Wounded Warrior Project is a charity and veterans service
              organization that offers a variety of programs, services, and
              events for wounded veterans of the military actions following
              September 11, 2011. They run a variety of support programs for
              veterans like family support programs, helping them find work that
              fits their skill sets, and mental wellness programs.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full mx-auto py-12">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-between mb-12 gap-8 md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-900">Vision Aid</h3>
            <div className="w-36 h-1 bg-orange-300 my-2 mx-auto md:mx-0"></div>
            <p className="text-gray-700  text-justify font-semibold">
              Artech contributed to the Vision Aid Charitable Society, which
              works to help the visually challenged lead near-normal lives. Such
              initiatives reflect our intent as an organization to contribute
              positively and meaningfully to society.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <div className="relative w-full max-w-md">
              <img src={nine} alt="Vision Aid" className="rounded-lg" />
            </div>
          </div>
        </div>

        <div className="bg-blue-200 py-12 px-6 text-center w-full">
          <h3 className="text-2xl font-semibold text-blue-900">
            STEM Initiatives
          </h3>
          <div className="w-36 h-1 bg-orange-300 my-2 mx-auto"></div>
          <p className="text-gray-900  mt-8 font-semibold mx-auto">
            Beyond its own ecosystem, Artech is also impacting Diversity &
            Inclusion by implementing a social responsibility program with a
            strong focus on STEM initiatives, as well as supporting and
            mentoring women in STEM careers.
          </p>
        </div>
      </section>
    </>
  );
}
