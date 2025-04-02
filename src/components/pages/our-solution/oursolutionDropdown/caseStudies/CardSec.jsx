import React from "react";
import Img1 from "../../../../../assets/61.png";
import Img2 from "../../../../../assets/62.png";
import Img3 from "../../../../../assets/63.png";
import Img4 from "../../../../../assets/64.png";
import Img5 from "../../../../../assets/65.png";
import Img6 from "../../../../../assets/66.jpg";
import Img7 from "../../../../../assets/67.jpg";
import Img8 from "../../../../../assets/68.png";
import Img9 from "../../../../../assets/69.png";
import Img10 from "../../../../../assets/70.png";
import Img11 from "../../../../../assets/71.png";
import Img12 from "../../../../../assets/72.png";
import { Link } from "react-router-dom";

const cardData = [
  {
    img: Img1,
    title: "Forms Modernization for Federal Health Insurance Exchange",
    para: "Improving compliance and enhancing user experience",
  },
  {
    img: Img2,
    title:
      "Content Migration & Experience Optimization for Leading Chip Manufacturer",
    para: "Boosting efficiency and user productivity through site migration",
  },
  {
    img: Img3,
    title: "Seamless Migration & Redesign for Global Technology Leader",
    para: "Enhancing digital presence with a unified global website",
  },
  {
    img: Img4,
    title:
      "Expanded Automation for Remote Workforce Operations in a Western State",
    para: "Enhancing operational continuity with automated remote workflows",
  },
  {
    img: Img5,
    title:
      "Modernized Correspondence for Top-Ranked Healthcare & Research Leader",
    para: "Enhancing patient engagement with modernized correspondence systems",
  },
  {
    img: Img6,
    title:
      "Successfully Empowering Diversity For A Prominent Player In The Tech Industry",
    para: "Enhancing Diversity via active contingent workforce",
  },
  {
    img: Img7,
    title:
      "Enhanced Efficiency and Cost Savings with Artech’s Master Vendor Program",
    para: "Big-Picture Visibility Over Contingent Workforce Spends",
  },
  {
    img: Img8,
    title: "Field Support Program for Nationwide Project",
    para: "Dispatch Support for Large Projects",
  },
  {
    img: Img9,
    title: "Support Services Optimization",
    para: "Improved Customer Experience in Higher Education",
  },
  {
    img: Img10,
    title: "Service Management Excellence",
    para: "Improved Business Outcomes & Compliance",
  },
  {
    img: Img11,
    title: "Network Operation Center focused on Higher Education Client",
    para: "Ensuring Uptime and Performance",
  },
  {
    img: Img12,
    title: "Access and Audit Control",
    para: "Comprehensive management of more than 17,000 users",
  },
];

const CardSec = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto mt-7 mb-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="w-full border-2 border-[#253e91] h-auto md:h-[587px] flex flex-col justify-between py-6 px-3 rounded-none"
        >
          <img src={card.img} alt={card.title} className="w-full h-[228px]" />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-[20px] sm:text-[26px] font-semibold text-gray-800">
              {card.title}
            </h3>
            
            
            <p className="text-gray-900 text-[14px] leading-relaxed flex-grow mt-4">
              {card.para}
            </p>
        
            <div className="mt-auto w-full h-[2px] bg-[#fba91e] my-4">
              <Link to="#" className="text-[#4300ff] font-medium block mt-4">
                View the Case Study →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSec;