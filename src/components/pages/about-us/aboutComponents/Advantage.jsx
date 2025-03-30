import React from "react";
import Logo1 from "../../../../assets/about-logo1.jpg";
import Logo2 from "../../../../assets/alogo-2.jpg";
import Logo3 from "../../../../assets/alogo-3.jpg";
import Logo4 from "../../../../assets/alogo4.jpg";
import Logo5 from "../../../../assets/alogo-5.jpg";
import Logo6 from "../../../../assets/alogo6.jpg";
import Logo7 from "../../../../assets/alogo7.jpg";
import Logo8 from "../../../../assets/alogo8.jpg";
import Logo9 from "../../../../assets/alogo9.jpg";
import Logo10 from "../../../../assets/a-logo10.jpg";
import videoFile from "../../../../assets/Corporate-Film_updated_2023.mp4";

const Advantage = () => {
  const logoSize = "w-12 h-12";
  const logoContainerClasses = "p-3 text-blue-600 flex items-center gap-2";
  const logoTextStyle = "text-xs font-bold text-blue-800";
  const headingStyle = "text-2xl  text-blue-900 mb-4 "; // Added font-bold
  const paragraphStyle = "text-gray-700 mb-4 text-[14px] "; // Added font-bold

  const logos = [
    {
      src: Logo1,
      alt: " Artech is the Largest Women-Owned IT Staffing Firm in the US",
      text: "Largest Women-Owned IT Staffing Firm in the US",
    },
    {
      src: Logo2,
      alt: " Artech achieves $925+ Million Global Revenue Run Rate",
      text: "$925+ Million Global Revenue Run Rate",
    },
    {
      src: Logo3,
      alt: " Artech has a 11,500+ Global Workforce",
      text: "11,500+ Global Workforce",
    },
    {
      src: Logo4,
      alt: " Artech is a Preferred Supplier to 100+ Fortune 500 Clients",
      text: "Preferred Supplier to 100+ Fortune 500 Clients",
    },
    {
      src: Logo5,
      alt: " Artech has a Global Footprint in USA, Canada, India, China, Mexico, Ireland and Poland",
      text: "Global Footprint: USA, Canada, India, China, Mexico, Ireland and Poland",
    },
    {
      src: Logo6,
      alt: " Artech is NMSDC, WBENC, WEConnect, and CPUC Certified",
      text: "NMSDC, WBENC, WEConnect, and CPUC Certified",
    },
    {
      src: Logo7,
      alt: " Artech has Proven Expertise and Insightful Market Intelligence",
      text: "Proven Expertise and Insightful Market Intelligence",
    },
    {
      src: Logo8,
      alt: " Artech provides National Service Delivery",
      text: "National Service Delivery",
    },
    {
      src: Logo9,
      alt: " Artech is Great Place To Work Certified",
      text: "Great Place To Work Certified",
    },
    {
      src: Logo10,
      alt: " Artech has received Industry Recognitions",
      text: "Industry Recognitions",
    },
  ];

  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      {/* Left Column */}
      <div className="w-full lg:w-7/10 p-6">
        <div className={headingStyle}>
          <span style={{ borderBottom: "4px solid orange" }}>Abo</span>ut Us
        </div>
        <p className={paragraphStyle}>
          At the forefront of the staffing industry, Artech is a minority-and
          women-owned business enterprise (MWBE) committed to maximizing global
          workforce solutions on behalf of its clients, empowering businesses
          and talent through applied human intelligence.
        </p>
        <p className={paragraphStyle}>
          We are a preferred go-to supplier across multiple regions and
          countries providing consistent deliverables, terms, rates, and cost
          savings.
        </p>

        <div className={headingStyle}>
          <span style={{ borderBottom: "4px solid orange" }}>The Ar</span>tech
          Advantage
        </div>
        <p className={paragraphStyle}>
          Artech employs over 11,000 industry professionals, supported by over
          35 national and global locations across the United States, Canada,
          India, and China.
        </p>

        {/* Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {logos.map((logo, index) => (
            <div
              className={`${logoContainerClasses} items-start sm:items-center`}
              key={index}
            >
              <img src={logo.src} alt={logo.alt} className={logoSize} />
              <div className={`${logoTextStyle} font-bold`}> {logo.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-3/10 p-6">
        {/* Video Placeholder */}
        <div className=" text-white p-4 text-right mb-4">
          <video src={videoFile} width="100%" controls>
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Additional Text */}
        <p className={`${paragraphStyle} text-[13px]`}>
          {" "}
          {/* Reduced font size here */}
          At Artech, we take pride in our diverse, talented, and diligent
          workforce. Our employees are the driving force behind our global
          achievements. We believe that true human essence goes beyond physical
          attributes; it lies within intellectual capabilities. By connecting
          clients and talented individuals, we create opportunities that align
          perfectly.
        </p>

        <p className={`${paragraphStyle} text-[13px]`}>
          {" "}
          {/* Reduced font size here */}
          Our focus is not merely on providing staffing solutions, but on
          delivering business solutions through the application of human
          intelligence.
        </p>

        <p className={`${paragraphStyle} text-[13px]`}>
          {" "}
          {/* Reduced font size here */}
          With our deep understanding of client requirements, unique talent
          supply chain, high-performing teams, and flexible engagement models,
          we empower businesses. Our goal is to provide organizations with not
          just resources, but the transformative power of also human intellect
          that can truly make a difference.
        </p>

        {/* Know More Button */}
        <button className="bg-blue-800 text-white px-6 py-2 rounded font-bold">
          {" "}
          {/*added font-bold */}
          Know More
        </button>
      </div>
    </div>
  );
};

export default Advantage;
