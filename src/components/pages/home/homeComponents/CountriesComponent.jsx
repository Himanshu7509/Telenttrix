import React from 'react';

// Import flags
import usaFlag from '../../../../assets/USA-85x85.png';
import canadaFlag from '../../../../assets/Canada-85x85.png';
import indiaFlag from '../../../../assets/India-85x85.png';
import philippinesFlag from '../../../../assets/philippines-flag.png';

const CountriesComponent = () => {
  const countries = [
    { name: 'USA', flag: usaFlag },
    { name: 'CANADA', flag: canadaFlag },
    { name: 'INDIA', flag: indiaFlag },
    { name: 'PHILIPPINES', flag: philippinesFlag }
  ];

  return (
    <div className="bg-[#253e91] text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        {/* Call to Action */}
        <div className="text-center md:text-left">
          <p className="text-[14px] font-semibold">To find out how we can empower you, contact us now!</p>
        </div>

        {/* Country Flags */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {countries.map((country) => (
            <div key={country.name} className="flex flex-col items-center">
              <img 
                src={country.flag} 
                alt={`${country.name} Flag`} 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mb-1 object-cover"
              />
              <span className="text-xs">{country.name}</span>
            </div>
          ))}
        </div>

        {/* Partner Locations */}
        <div className="text-center md:text-left md:ml-4">
          <p className="text-[14px] font-semibold">Our Partner Office Locations:</p>
          <p className="text-[14px] font-semibold">Singapore, Ireland, Poland, & Mexico</p>
        </div>
      </div>
    </div>
  );
};

export default CountriesComponent;