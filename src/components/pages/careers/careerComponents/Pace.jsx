import React from "react";
import PaceImg from "../../../../assets/pace.png";

const Pace = () => {
  return (
    <div className="w-full flex-col justify-between items-center mt-6 mb-6">
      <div className="w-full flex justify-center items-center bg-[#253e91]">
        <img src={PaceImg} alt="" className="p-5 w-auto md:w-[300px ]" />
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[90%] md:w-[80%]">
          <div className="w-full flex justify-center">
            <div className="text-center mt-8 mb-8 w-full md:w-[80%]">
              <p className="text-[14px] font-semibold">
                At Artech, we believe that intelligence is inherent in each of
                us. We invest in our employees and have deployed a structured
                recruitment & trainee program, aimed at identifying,
                on-boarding, and nurturing intellect.
              </p>
              <p className="text-[14px] font-semibold mt-2">
                We are creating tomorrow’s leaders, through our interventions,
                today.
              </p>
              <p className="text-[14px] font-semibold mt-2">
                Candidates through our recruitment initiative, join Artech as a
                part of our Management Trainee Program: <strong>PACE</strong>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-3 md:px-6 mt-8">
            {/* Perform */}
            <div className="bg-[#ed4a42] text-white py-12 px-3 text-center flex-col justify-center items-center rounded-lg">
              <h3 className="text-xl font-semibold">Perform</h3>
              <div className="flex w-full justify-center">
                <div className="w-10 h-1 bg-[#fba91e] my-2"></div>
              </div>
              <p className="mt-2 text-[14px] font-semibold">
                Perform from the very beginning and make an impactful head start
                in the journey with Artech. The program is designed to enhance
                capability, capacity, productivity, and performance.
              </p>
            </div>

            {/* Accelerate */}
            <div className="bg-[#05b6b2] text-white py-12 px-3 text-center flex-col justify-center items-center rounded-lg">
              <h3 className="text-xl font-semibold">Accelerate</h3>
              <div className="flex w-full justify-center">
                <div className="w-10 h-1 bg-[#fba91e] my-2"></div>
              </div>
              <p className="mt-2 text-[14px] font-semibold">
                Accelerate learning during the training program which packs in
                both classroom and on-the-job training. This multi-dimensional
                approach helps trainees in learning faster and better.
              </p>
            </div>

            {/* Connect */}
            <div className="bg-[#253e91] text-white py-12 px-3 text-center flex-col justify-center items-center rounded-lg">
              <h3 className="text-xl font-semibold">Connect</h3>
              <div className="flex w-full justify-center">
                <div className="w-10 h-1 bg-[#fba91e] my-2"></div>
              </div>
              <p className="mt-2 text-[14px] font-semibold">
                Connect with multiple colleagues, mentors, and trainers. A
                trainee gets to network early on in their career with multiple
                stakeholders, ensuring a highly productive work environment in
                the long run.
              </p>
            </div>

            {/* Educate */}
            <div className="bg-[#6c348d] text-white py-12 px-3 text-center flex-col justify-center items-center rounded-lg">
              <h3 className="text-xl font-semibold">Educate</h3>
              <div className="flex w-full justify-center">
                <div className="w-10 h-1 bg-[#fba91e] my-2"></div>
              </div>
              <p className="mt-2 text-[14px] font-semibold">
                Trainees are educated and trained under the most talented,
                proficient, and qualified trainers in the recruitment industry.
                All trainers possess a diverse skill set and rich work
                experience.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <p className="text-center text-[14px] font-semibold mt-8 px-6 w-full md:w-[70%]">
              If you are a fresher and are looking for an opportunity to
              kick-start your career with a global, fast-growing organization,
              apply for a position with us.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 mb-3 w-full text-center">
        <p className=" text-lg">Explore Opportunities</p>
        <button className="mt-3 bg-blue-900 text-white px-[35px] py-[10px] rounded-4xl text-[15px] border hover:bg-white hover:text-blue-900 transition">
          Apply Now
        </button>
      </div>
      <div className="w-full flex justify-center mb-12">
        <p className="text-center text-[14px] font-semibold mt-8 px-6 w-full md:w-[80%]">
          Artech is an equal employment opportunity employer. For job
          opportunities in the US, if you need accommodation for any part of the
          application process because of a disability, please send an email to
          <a href="#" className="text-blue-600 hover:text-blue-900">
            AskHR@artech.com
          </a>{" "}
          or call
          <a href="#" className="text-blue-600 hover:text-blue-900">
            973 998 2500
          </a>{" "}
          to let us know the nature of your request.​ For job opportunities in
          India,{" "}
          <a href="#" className="text-blue-600 hover:text-blue-900">
            visit here for Consultant roles
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:text-blue-900">
            here for Corporate roles.​
          </a>
        </p>
      </div>
    </div>
  );
};

export default Pace;
