import React from "react";
import Img1 from "../../../../assets/11.png";
import Img2 from "../../../../assets/12.png";
import Img3 from "../../../../assets/13.png";
import Img4 from "../../../../assets/14.png";
import Img5 from "../../../../assets/15.png";

const cardData = [
  {
    img: Img1,
    title: "Contingent Staffing",
    text: "Digital Content Management UI/UX Design Accessibility Compliance and Conformance Collaboration & Productivity",
    borderColor: "border-b-yellow-500",
  },
  {
    img: Img2,
    title: "Project Staffing",
    text: "Application Services Application & Cloud Modernization",
    borderColor: "border-b-red-500",
  },
  {
    img: Img3,
    title: "Master Vendor",
    text: "Application Performance Monitoring DevOps & Application Maintenance Data Center Operations Workplace Services Enterprise Monitoring & NOC",
    borderColor: "border-b-teal-500",
  },
  {
    img: Img4,
    title: "RPO – Projects & Programs",
    text: "Contract Compliance & Support Marketing Operations SOW Optimization for Procurement Organizations Travel & Immigration",
    borderColor: "border-b-blue-500",
  },
  {
    img: Img5,
    title: "Direct Hire",
    text: "Adobe Platform Services",
    borderColor: "border-b-purple-500",
  },
];

const OurApproach = () => {
  return (
    <div className="py-16 flex justify-center w-full text-center">
      <div className="w-[90%] sm:w-[80%]">
        <div className="flex items-center justify-center">
          <div className="w-[25%] sm:w-[30%] border-t-8 border-[#fba91e]"></div>
          <h2 className="text-blue-900 text-2xl sm:text-3xl font-bold mx-4">
            Our Three Step Approach
          </h2>
          <div className="w-[25%] sm:w-[30%] border-t-8 border-[#fba91e]"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-10">
          <div className="w-full sm:w-[90%] lg:w-[30%] border-2 border-red-500 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold">BUILD</h3>
            <div className="w-20 border-t-3 border-red-500 mx-auto my-2"></div>
            <p className="text-gray-700 text-[14px] font-bold">
              Design, build and support custom technology solutions, delivered
              on-time and budget. Our customer-centric solutions include custom
              web and application development, content management, commerce,
              mobile apps and cloud or on-premise hosting infrastructure.
            </p>
            <p className="text-gray-700 mt-2 text-[14px] font-bold">
              Upon launch, partner with our team for ongoing support.
            </p>
          </div>

          <div className="w-full sm:w-[90%] lg:w-[30%] border-2 border-teal-500 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold">OPERATE</h3>
            <div className="w-20 border-t-3 border-teal-500 mx-auto my-2"></div>
            <p className="text-gray-700 text-[14px] font-bold">
              Manage complex IT infrastructure, projects or programs using
              skilled teams of specialized resources, tuned to supporting your
              application portfolio, infrastructure or both.
            </p>
            <p className="text-gray-700 mt-2 text-[14px] font-bold">
              Manage performance and security, provide updates and patches to
              existing applications, and ensure that your organization never has
              downtime or embarrassing outages.
            </p>
          </div>

          <div className="w-full sm:w-[90%] lg:w-[30%] border-2 border-blue-900 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold">OPTIMIZE</h3>
            <div className="w-20 border-t-3 border-blue-900 mx-auto my-2"></div>
            <p className="text-gray-700 text-[14px] font-bold">
              Deliver innovative services including contract compliance,
              marketing optimization process automation, SOW procurement
              bundling for spend optimization or custom sales and support
              solutions, delivered on-site or using our global centers.
            </p>
            <p className="text-gray-700 mt-2 text-[14px] font-bold">
              We tailor each unique business solution to the specific
              requirements of our client.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-10 mt-14">
          {cardData.map((card, index) => (
            <div key={index} className={`text-center bg-white border-b-4 ${card.borderColor} w-full sm:w-[48%] lg:w-[30%]`}>
              <div className="mt-12">
                <img src={card.img} alt={card.title} className="w-full h-60" />
              </div>
              <h3 className="text-lg font-semibold mt-8">{card.title}</h3>
              <div className="w-full flex justify-center mt-4">
                <div className={`w-20 border-b-3 ${card.borderColor}`} />
              </div>
              <p className="text-[#4300ff] font-bold text-[14px] mt-12 mb-12">
                {card.text}
              </p>
            </div>
          ))}
          <div className="mt-auto lg:mt-40 flex-col justify-center items-center h-full">
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

export default OurApproach;
