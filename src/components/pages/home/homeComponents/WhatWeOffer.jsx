import React from "react";
import img1 from "../../../../assets/Project-Delivery.jpg";
import img2 from "../../../../assets/Workforce-Solutions.jpg";
import img3 from "../../../../assets/Diversity-and-Inclusion.jpg";

const WhatWeOffer = () => {
  const services = [
    {
      title: "Managed Services and Project Delivery",
      tagline: "Value/Flexibility/Predictability",
      descriptionOne:
        "Artech Solutions leverages the larger talent-sourcing engine to build optimized delivery teams to achieve exceptional business results for our customers. We provide you with a combination of people, processes, tools and technologies that can help you maximize productivity, improve operations, facilitate agility and scale, reshape spending, and deliver innovation.",
      services: [
        "Application Services",
        "Cloud and Infrastructure",
        "Business Resiliency",
        "Digital Experience",
      ],
      imageSrc: img1,
    },
    {
      title: "Workforce Solutions",
      description:
        "Our Workforce Solutions Teams don't just deliver staffing solutions - they provide business solutions by understanding of clients needs, unique talent supply chain, high-performing teams, and flexible engagement models help us empower businesses by delivering human intellect that can make a difference to an organization.",
      services: [
        "Contingent Staffing",
        "Project Staffing",
        "Master Vendor",
        "RPO - Projects and Programs",
        "Direct Hire",
        "Payroll and Transition Services",
      ],
      imageSrc: img2,
    },
    {
      title: "Diversity and Inclusion Programs",
      description:
        "At Artech, Diversity is in our DNA and is an organizing principle in how we do business. As a certified minority and women-owned business, we are at the forefront of diverse hiring in the United States for three decades.",
      additionalText: [
        "We are committed to inclusive hiring practices internally, with our suppliers, and for our clients and outperform the national average by leaps and bounds.",
        "By partnering with Artech, clients benefit from the workforce representation we have already attained.",
      ],
      imageSrc: img3,
    },
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">
          <span className="inline-block border-b-4 border-orange-400 pb-2 text-blue-800">
            What We Offer
          </span>
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col w-full md:w-1/3 mb-8 h-auto lg:h-[684px] justify-between"
            >
              <div className="w-full flex justify-center mb-4 relative">
                <div className="w-full overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <h2 className="text-[26px] font-semibold text-[#dc2914] text-center mb-1">
                  {service.title}
                </h2>

                {service.tagline && (
                  <p className="font-bold text-center text-gray-800 text-[18px] mb-3">
                    {service.tagline}
                  </p>
                )}

                <p className="text-sm text-gray-900 font-semibold text-center mb-4 px-2">
                  {service.descriptionOne}
                </p>

                <p className="text-sm text-gray-900 text-center mb-4 px-2 font-semibold">
                  {service.description}
                </p>
                {service.services && service.services.length > 0 && (
                  <ul className="text-center w-full mb-4 space-y-1">
                    {service.services.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[#dc2914] font-medium text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {service.additionalText &&
                  service.additionalText.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-gray-900 font-semibold text-center mb-2 mt-2 px-2"
                    >
                      {text}
                    </p>
                  ))}

                <div className="mt-auto pt-4 flex justify-center">
                  <button className="bg-[#253e91] text-white py-2 px-6 rounded-3xl border hover:bg-white hover:text-[#253e91] transition duration-300 text-sm">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
