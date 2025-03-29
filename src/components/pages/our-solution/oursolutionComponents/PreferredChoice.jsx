import React from "react";
import Img1 from "../../../../assets/21.png";
import Img2 from "../../../../assets/22.png";
import Img3 from "../../../../assets/23.png";
import Img4 from "../../../../assets/24.png";
import Img5 from "../../../../assets/25.png";

const features = [
  {
    image: Img1,
    title: "CONSULTATIVE PARTNER",
    description:
      "ASA Board, WBENC Board, Frequent Speaker at SIA Forums and Conferences, Federal Reserve Small and Medium Sized Advisory Board Member",
    color: "text-red-500",
  },
  {
    image: Img2,
    title: "MATURE OPERATIONS PROCESS CONTROLS",
    description:
      "Daily/Weekly Productivity Reporting, MRMs, Bi-weekly Business Review meetings, Monthly Market Review, QBR’s, Recruitment and Sales Training Academy",
    color: "text-teal-500",
  },
  {
    image: Img3,
    title: "FINANCIAL STABILITY",
    description:
      "Financial strength and stability; scalable, flexible, privately held and willing to invest",
    color: "text-yellow-500",
  },
  {
    image: Img4,
    title: "STATE OF THE ART TECHNOLOGY INFRASTRUCTURE INVESTMENTS",
    description:
      "Innovative technology infrastructure and operational backbone",
    color: "text-purple-500",
  },
  {
    image: Img5,
    title: "NATIONAL AND GLOBAL GEOGRAPHIC PRESENCE",
    description:
      "Financial strength and stability; scalable, flexible, privately held and willing to invest",
    color: "text-blue-500",
  },
];

const PreferredChoice = () => {
  return (
    <div className="py-10">
      <div className="bg-blue-900 py-6 text-center">
        <h2 className="text-white text-[24px] sm:text-[28px] font-semibold">
          Preferred Choice for Clients
        </h2>
        <div className="w-36 border-t-4 border-[#fba91e] mx-auto mt-2"></div>
      </div>

      <div className="flex justify-center">
        <div className="w-[90%] sm:w-[80%]">
          <div className="flex flex-wrap justify-start gap-10 px-4 sm:px-10 mt-12 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start justify-start space-x-4 max-w-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain"
                />
                <div>
                  <h3 className={`text-md font-semibold ${feature.color}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-[14px] sm:text-md font-bold mt-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="font-semibold text-md sm:text-lg">
              To find out how we can help you
            </p>
            <button className="mt-3 bg-blue-900 text-white px-6 py-2 rounded-full text-[14px] sm:text-[15px] border border-blue-900 font-semibold hover:bg-white hover:text-blue-900 transition">
              CONTACT US TODAY!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferredChoice;
