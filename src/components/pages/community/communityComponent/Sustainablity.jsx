import React from "react";

export default function Sustainability() {
  return (
    <>
      <section className="w-full px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left border-b-4 border-orange-400 pb-6">
            <h3 className="text-xl text-center md:text-2xl font-semibold text-blue-800">
              Committed to <br /> a Sustainable Future
            </h3>
            <div className="w-24 h-1 bg-orange-300 my-2 mx-auto"></div>
            <p className="text-gray-900  text-justify mt-8 font-semibold">
              We are proud to announce that Artech LLC has developed ambitious
              targets in line with the{" "}
              <span className="text-blue-600 font-semibold">SBTi criteria</span>
              . The near-term target covers our Scope 1 and 2 GHG emissions. We
              are currently finalizing our Scope 3 target and will be submitting
              both to the SBTi for validation shortly. Stay tuned for further
              updates as we continue to work towards a more sustainable future.
            </p>
          </div>

          <div className="text-center md:text-left border-b-4 border-orange-400 pb-6">
            <h3 className="text-xl text-center md:text-2xl font-semibold text-blue-800">
              Environmentally Sustainable Practices <br /> (ESP)
            </h3>
            <div className="w-24 h-1 bg-orange-300 my-2 mx-auto"></div>
            <p className="text-gray-900  text-justify font-semibold mt-8">
              Artech has embarked on an initiative to align each of its
              Operational and Service Delivery (OSD) processes with current
              environmentally sustainable practices. The "Artech Green OSD"
              initiative is an executive order with strict definitions and
              deployment action items.
            </p>
            <p className="text-gray-900  text-justify font-semibold mt-8">
              Artech Green OSD is driven by the firm’s leadership team, which
              has fervently communicated the significance of this initiative to
              all senior staff, line managers, and employees throughout Artech’s
              global operations.
            </p>
          </div>

          <div className="text-center md:text-left border-b-4 border-orange-400 pb-6">
            <h3 className="text-xl text-center md:text-2xl font-semibold text-blue-800">
              Operations & Service Delivery <br /> (OSD)
            </h3>
            <div className="w-24 h-1 bg-orange-300 my-2 mx-auto"></div>
            <p className="text-gray-900  text-justify font-semibold mt-8">
              At Artech, each task is carried out to conserve energy in one form
              or another. Artech is an ISO 9001 certified company and has
              developed its global practices based on QMS methodologies. Within
              this quality framework, Artech continues to review each of its
              processes and determine which physical actions, usable materials,
              etc. , can be refined to conserve energy.
            </p>
          </div>

          <div className="text-center md:text-left border-b-4 border-orange-400 pb-6">
            <h3 className="text-xl text-center md:text-2xl font-semibold text-blue-800">
              Supply Chain Practices <br /> (SCP)
            </h3>
            <div className="w-24 h-1 bg-orange-300 my-2 mx-auto"></div>
            <p className="text-gray-900  text-justify font-semibold mt-8">
              As a global IT service provider, Artech is compliant with various
              social responsibility and environmentally sustainable programs and
              publicly discloses its status and progress at portals managed by
              the Carbon Disclosure Project, EICC, and others.
            </p>
            <p className="text-gray-900  text-justify mt-4 font-semibold">
              Artech’s supply chain compliance is bidirectional and applicable
              to both clients and suppliers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
