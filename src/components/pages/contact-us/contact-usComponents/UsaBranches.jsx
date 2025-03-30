import React from "react";
import { useState } from "react";
import ContactModal from "../../../common/modal/ContactModal";

const locations = [
  {
    state: "New Jersey",
    address: "360 Mt. Kemble Avenue Suite 2000, Morristown, NJ 07960",
    phone: "+1 (973) 998-2572",
  },
  {
    state: "Virginia",
    address: "2010 Corporate Ridge Road Suite 520, McLean, VA 22102",
    phone: "+1 (571) 580-0131",
  },
  {
    state: "North Carolina",
    address: "121 West Trade Street Suite 2190, Charlotte, NC 28202",
    phone: "+1 (980) 256-5000",
  },
  {
    state: "Georgia",
    address: "1050 Crown Pointe Parkway Suite 400, Atlanta, GA 30338",
    phone: "+1 (470) 763-0112",
  },
  {
    state: "Texas",
    address:
      "TX, Addison – Spaces The Colonnade, 15305 Dallas Parkway, 12th Floor, Addison, Texas 75001",
    phone: "+1 (214) 281-4880",
  },
  {
    state: "Washington",
    address: "11808 Northup Way, Suite W160, Bellevue, WA 98005",
    phone: "+1 (425) 800-8703",
  },
  {
    state: "California",
    address: "39300 Civic Center Drive, Suite 310, Fremont, CA 94538",
    phone: "+1 (510) 896-2600",
  },
  {
    state: "Minnesota",
    address: "30 South 9th Street, 7th Floor, Minneapolis, MN 55402",
    company: "Scalence, an Artech Company",
    phone: "+1 (651) 634-1400",
  },
  {
    state: "Michigan",
    address: "900 Wilshire Drive, Suite 280, Troy, MI 48084",
    company: "DAKO, an Artech Company",
    phone: "+1 (248) 655-0100",
  },
  {
    state: "Tennessee",
    address: "6443 Bonny Oaks Drive, Suite A, Chattanooga, TN 37416",
    company: "DAKO, an Artech Company",
    phone: "+1 (423) 643-2506",
  },
];

const locations2 = [
  ["Boston, MA", "Philadelphia, PA", "Orlando, FL", "Chicago, IL"],
  ["Columbia, MO", "Denver, CO", "Tampa, FL", "San Francisco, CA"],
  ["Phoenix, AZ", "Portland, OR", "Los Angeles, CA", "Cincinnati, OH"],
];

const UsaBranches = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="bg-blue-900 text-white text-center py-6 font-bold text-2xl">
        USA
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="bg-white max-w-5xl text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-8">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="text-md font-bold mb-4">{location.state}</h3>
              <p className="text-sm font-semibold mb-2">{location.address}</p>
              {location.company && (
                <p className=" font-medium">{location.company}</p>
              )}
              <p className="font-semibold mt-2">Phone Number:</p>
              <p className="text-blue-600">{location.phone}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-300 text-center py-6">
        <h2 className="text-lg md:text-xl font-medium text-gray-800">
          Other Artech U.S. offices and service delivery locations include:
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-6">
          {locations2.map((column, index) => (
            <div key={index}>
              {column.map((city, idx) => (
                <p key={idx} className="font-semibold">
                  {city}
                </p>
              ))}
            </div>
          ))}
        </div>
        <p className="py-2 mt-4 font-medium">To find out how we can help you</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-800 text-white px-8 py-2 rounded-full mb-10 border-2 border-blue-800 transition-all duration-300 hover:bg-white hover:text-blue-800"
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

export default UsaBranches;
