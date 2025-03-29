import React from 'react'
import img1 from '../../../../../src/assets/Largest.jpg'
import img2 from '../../../../assets/925-Million.jpg'
import img3 from '../../../../assets/11500.jpg'
import img4 from '../../../../assets/Preferred.jpg'

const WhyArtech = () => {
    const data = [
      {
        image: img1,
        title: "Largest Women-Owned IT Staffing Firm in the US",
      },
      {
        image: img2,
        title: "$925+ Million Global Revenue Run Rate",
      },
      {
        image: img3,
        title: "11,500+ Global Workforce",
      },
      {
        image: img4,
        title: "Preferred Supplier to 100+ Fortune 500 Clients",
      },
    ];
  
    return (
      <div>
        <section className="bg-[#dd3333] text-white py-6 md:py-10">
          <h2 className="text-center text-2xl md:text-3xl font-semibold px-4">Why Artech?</h2>
        </section>
        <section className="bg-white text-[#253e91] py-6 md:py-8 px-4 md:px-6">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {data.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center w-full sm:w-5/12 md:w-4/12 lg:w-1/4 p-4 mb-4"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-[50px] h-[50px] object-contain" 
                />
                <p className="mt-3 md:mt-4 font-semibold text-sm md:text-base">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

export default WhyArtech