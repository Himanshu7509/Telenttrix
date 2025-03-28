import React from 'react'
import Banner from '../../../../assets/Careers-banner.png';

const HeroSec = () => {
  return (
    <div
          className="relative flex flex-col items-end justify-center text-center p-5 bg-cover bg-center h-[451px]"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className="bg-transparent bg-opacity-90 p-5 w-[43%]">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              Empowering your career. <br /> Maximizing your intelligence
            </h1>
           
            <p className="mt-6 text-white text-lg">Explore Opportunities</p>
            <div className='w-full flex justify-center'>
            <div className='flex justify-between items-center w-[74%] mt-2'>
            <button className=" bg-white text-blue-900 font-semibold py-2 px-8 rounded-full text-lg shadow-md hover:bg-gray-200">
              Consulting Jobs
            </button>
            <button className=" bg-white text-blue-900 font-semibold py-2 px-8 rounded-full text-lg shadow-md hover:bg-gray-200">
              Corporate Jobs
            </button>
            </div>
            </div>
          </div>
        </div>
  )
}

export default HeroSec