import Ranjni from "../../../../assets/Ranjini-About-us.png";
import Ajay from "../../../../assets/ajay-about-us.png";

const OurLeadership = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-blue-900 flex justify-center items-center p-8">
        <h3 className="text-white text-2xl font-semibold">
          Our <span className="border-b-4 border-orange-500">Leaders</span>hip
        </h3>
      </div>

      {/* Leaders Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center">
          {/* Leader 1 */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64">
              <img
                src={Ranjni}
                alt="Ranjini Poddar"
                className="w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mt-4">
              Ranjini Poddar
            </h3>
            <p className="font-semibold text-sm">CEO & Co-Founder</p>
            <p className="font-semibold text-xs mt-4 px-4 max-w-sm">
              CEO and Founder of Artech, America’s largest women-owned IT
              staffing company, Ranjini Poddar is used to rewriting the rules,
              not only on gender expectations in the IT sector but on
              innovation...
            </p>
            <button className="bg-blue-800 w-6/12 text-white px-6 py-1 rounded-full mt-4 hover:bg-blue-900 transition duration-300">
              Read More
            </button>

            <div className="border-b-[6px] border-blue-900 w-full mt-6"></div>
          </div>

          {/* Leader 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64">
              <img src={Ajay} alt="Ajay Poddar" className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mt-4">
              Ajay Poddar
            </h3>
            <p className="font-semibold text-sm">
              Co-Founder & Executive Vice President
            </p>
            <p className="font-semibold text-xs mt-4 px-4 max-w-sm">
              Co-Founder and Executive Vice President at Artech, Ajay possesses
              a B.S., M.S., in Computer Engineering and Finance Science and an
              MBA in Finance from the Stern School of Business (NYU)...
            </p>
            <button className="bg-blue-800 w-6/12 text-white px-6 py-1 rounded-full mt-4 hover:bg-blue-900 transition duration-300">
              Read More
            </button>

            <div className="border-b-[6px] border-blue-900 w-full mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLeadership;
