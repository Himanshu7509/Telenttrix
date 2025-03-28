import React from "react";
import Img1 from "../../../../assets/41.png";
import Img2 from "../../../../assets/42.png";
import Img3 from "../../../../assets/43.png";
import Img4 from "../../../../assets/44.png";
import Img5 from "../../../../assets/45.png";
import Img6 from "../../../../assets/46.png";

const TeamGallery = () => {
  return (
    <div className="w-full flex items-center flex-wrap">
      <div className="h-auto md:h-[335px] w-auto lg:w-[235px] rounded-md m-2">
        <img
          src={Img1}
          alt=""
          className="w-full rounded-md h-full object-cover"
        />
      </div>
      <div className="h-auto md:h-[335px] bg-[#253e91] text-white text-center w-auto lg:w-[235px] rounded-md m-2 p-2 flex flex-col justify-center items-center">
        <p className="text-sm font-semibold">Performance Oriented Culture</p>
        <p className="text-sm font-semibold mt-2">
          Performance oriented work environment that empowers you to thrive and
          shine
        </p>
        <p className="text-[16px] font-semibold mt-4 underline cursor-pointer">
          Watch Video
        </p>
      </div>

      <div className="h-auto md:h-[335px] w-auto lg:w-[235px] rounded-md m-2">
        <img
          src={Img2}
          alt=""
          className="w-full rounded-md h-full object-cover"
        />
      </div>

      <div className="h-auto md:h-[335px] bg-[#fba91e] text-white text-center w-auto lg:w-[235px] rounded-md m-2 p-2 flex flex-col justify-center items-center">
        <p className="text-sm font-semibold">Global Client Base</p>
        <p className="text-sm font-semibold mt-2">
          Work with the biggest and best organizations in the world
        </p>
        <p className="text-[16px] font-semibold mt-4 underline cursor-pointer">
          Watch Video
        </p>
      </div>

      <div className="h-auto md:h-[335px] w-auto lg:w-[235px] rounded-md m-2">
        <img
          src={Img3}
          alt=""
          className="w-full rounded-md h-full object-cover"
        />
      </div>

      <div className="h-auto md:h-[335px] bg-[#6c348d] text-white text-center w-auto lg:w-[235px] rounded-md m-2 p-2 flex flex-col justify-center items-center">
        <p className="text-sm font-semibold">Throught Leadership</p>
        <p className="text-sm font-semibold mt-2">
          Recognized and acknowledged thought leadership in shaffing
        </p>
        <p className="text-[16px] font-semibold mt-4 underline cursor-pointer">
          Watch Video
        </p>
      </div>

      <div className="h-auto md:h-[335px] bg-[#ed4a42] text-white text-center w-auto lg:w-[235px] rounded-md m-2 p-2 flex flex-col justify-center items-center">
        <p className="text-sm font-semibold">Diversity & Inclusion</p>
        <p className="text-sm font-semibold mt-2">
          Equal oppurtunity employer, founded on the principles of Diversity & Inclusion
        </p>
        <p className="text-[16px] font-semibold mt-4 underline cursor-pointer">
          Watch Video
        </p>
      </div>

      <div className="h-auto md:h-[335px] w-auto lg:w-[235px] rounded-md m-2">
        <img
          src={Img4}
          alt=""
          className="w-full rounded-md h-full object-cover"
        />
      </div>

      

      <div className="h-auto md:h-[335px] bg-[#11bcce] text-white text-center w-auto lg:w-[235px] rounded-md m-2 p-2 flex flex-col justify-center items-center">
        <p className="text-sm font-semibold">Rewards & Recognition</p>
        <p className="text-sm font-semibold mt-2">
          Be part of a work culture driven by Reward & Recognition
        </p>
        <p className="text-[16px] font-semibold mt-4 underline cursor-pointer">
          Watch Video
        </p>
      </div>

      <div className="h-auto md:h-[335px] w-auto lg:w-[235px] rounded-md m-2">
        <img
          src={Img5}
          alt=""
          className="w-full rounded-md h-full object-cover"
        />
      </div>

      <div className="h-auto md:h-[335px] bg-[#05b6b2] text-white text-center w-auto lg:w-[235px] rounded-md m-2 p-2 flex flex-col justify-center items-center">
        <p className="text-sm font-semibold">Learning & Development</p>
        <p className="text-sm font-semibold mt-2">
          Continous learning focus, providing opportunities to upskill and grow
        </p>
        <p className="text-[16px] font-semibold mt-4 underline cursor-pointer">
          Watch Video
        </p>
      </div>

      <div className="h-auto md:h-[335px] w-auto lg:w-[235px] rounded-md m-2">
        <img
          src={Img6}
          alt=""
          className="w-full rounded-md h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TeamGallery;
