import React from 'react';
import CertifiedImg from '../../../../assets/leftbanner.png';
import ArtechRightImg from '../../../../assets/rightbanner.jpg';

const Certification = () => {
  return (
    <div className="bg-blue-900 text-white py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <img src={CertifiedImg} alt="Great Place to Work Certification" className="w-40 relative top-[-45px]" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Great Place to Work™ Certification
          </h2>
          <div className="w-16 h-1 bg-[#fba91e] mb-6"></div>
          <p className="mb-4 text-[14px]">
            The certificates were received after extremely positive feedback from our employees on established parameters including:
          </p>
          <ul className="list-disc pl-5 text-[14px] font-semibold space-y-2">
            <li>Fairness: irrespective of age, gender, orientation, or race</li>
            <li>Respect: for the safety and dignity of all</li>
            <li>Credibility: evinced by the responsibility given to our people</li>
            <li>Pride: in what we accomplish at work</li>
            <li>Camaraderie: at the workplace</li>
            <li>Credibility of Management</li>
            <li>Training and Development</li>
          </ul>
          <p className="mt-4 text-[14px]">
            These certificates are testaments to our belief that people thrive when you show confidence in them and nurture growth. We are proud of our people and the organization that we are!
          </p>
        </div>

        {/* Right Side */}
        <div className="">
          <img src={ArtechRightImg} alt="Team Collaboration" className="" />
        </div>
      </div>
    </div>
  );
};

export default Certification;
