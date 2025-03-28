import React from "react";
import Img1 from "../../../../assets/1.png";
import Img2 from "../../../../assets/2.png";
import Img3 from "../../../../assets/3.png";
import Img4 from "../../../../assets/4.png";
import Img5 from "../../../../assets/5.png";
import Img6 from "../../../../assets/6.png";

const cardData = [
  {
    img: Img1,
    title: "Contingent Staffing",
    borderColor: "border-b-yellow-500",
  },
  { img: Img2, title: "Project Staffing", borderColor: "border-b-red-500" },
  { img: Img3, title: "Master Vendor", borderColor: "border-b-teal-500" },
  {
    img: Img4,
    title: "RPO – Projects & Programs",
    borderColor: "border-b-blue-500",
  },
  { img: Img5, title: "Direct Hire", borderColor: "border-b-purple-500" },
  {
    img: Img6,
    title: "Payroll & Transition Services",
    borderColor: "border-b-indigo-500",
  },
];

const CardSection = () => {
  return (
    <div className="w-full flex justify-center mt-12 mb-10">
      <div className="w-[75%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`text-center bg-white border-b-4 ${card.borderColor}`}
            >
              <div className="relative overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-60" />
              </div>
              <h3 className="text-lg font-semibold text-[#4300ff] mt-4">
                {card.title}
              </h3>
              <button className="mt-4 mb-4 bg-blue-900 text-white px-7 py-2 rounded-4xl text-[10px] font-medium hover:text-blue-800 border hover:border-blue-900 hover:bg-white transition">
                Read More
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 w-full text-center">
            <p className="font-semibold text-lg">
              To find out how we can help you
            </p>
            <button className="mt-3 bg-blue-900 text-white px-[35px] py-[10px] rounded-4xl text-[15px] border font-semibold hover:bg-white hover:text-blue-900 transition">
              CONTACT US TODAY!
            </button>
          </div>
      </div>
    </div>
  );
};

export default CardSection;
