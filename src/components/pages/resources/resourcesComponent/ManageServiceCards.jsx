import React from "react";
import Mag from "../../../../assets/managed-services-1.png";
import Mag2 from "../../../../assets/Managed-Services-2.jpg";
import Mag3 from "../../../../assets/Workforce-Solutions-3.jpg";

const ManageServiceCards = () => {
  return (
    <div className=" mx-auto px-4 py-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=" p-4">
          <img src={Mag} alt="Managed Services" />
          <p className="mt-4  text-black text-[12px] font-semibold text-center">
            As businesses struggle to reinvent themselves in the post-COVID
            world, Managed Services can provide them with the leverage they need
            to accelerate transformation.
          </p>
        </div>
        <div className=" p-4">
          <img src={Mag2} alt="Managed Services vs Outsourcing" />
          <p className="mt-4  text-black text-[12px] font-semibold text-center">
            Confused whether to opt for Managed Services or traditional
            outsourcing? Use the Five Key Questions approach to understand which
            model is best suited to meet your business requirements.
          </p>
        </div>
        <div className="p-4">
          <img src={Mag3} alt="Workforce Solutions" />
          <p className="mt-4  text-black text-[12px] font-semibold text-center">
            8 essential criteria to identify a robust workforce partner capable
            of delivering effective solutions amidst the ever-changing talent
            demands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceCards;
