import React, { useState, useEffect } from "react";
import banner1 from "../../../../assets/homebannernew.png";
import banner2 from "../../../../assets/banner22.jpg";

const HeroSec = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      backgroundImage: banner1,
    },
    {
      backgroundImage: banner2,
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.backgroundImage}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full ${
              index === 1 ? "object-contain" : "object-cover"
            }`}
          />

          {/* Workforce Solutions Navigation */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 pb-4">
              <div className="bg-white/90 rounded-lg max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-center py-4 px-2 space-y-4 md:space-y-0">
                  <a
                    href="#"
                    className="text-black hover:text-blue-600 font-medium text-center underline px-2 md:px-4 lg:px-6"
                  >
                    <span className="block">Managed Services and</span>
                    <span className="block">Project Delivery</span>
                  </a>
                  <div className="hidden md:block border-l border-gray-400 h-8 mx-2 lg:mx-6"></div>
                  <a
                    href="#"
                    className="text-black hover:text-blue-600 font-medium text-center underline px-2 md:px-4 lg:px-6"
                  >
                    <span className="block">Workforce</span>
                    <span className="block">Solutions</span>
                  </a>
                  <div className="hidden md:block border-l border-gray-400 h-8 mx-2 lg:mx-6"></div>
                  <a
                    href="#"
                    className="text-black hover:text-blue-600 font-medium text-center underline px-2 md:px-4 lg:px-6"
                  >
                    <span className="block">Diversity and Inclusion</span>
                    <span className="block">Programs</span>
                  </a>
                  <div className="hidden md:block border-l border-gray-400 h-8 mx-2 lg:mx-6"></div>
                  <a
                    href="#"
                    className="text-black hover:text-blue-600 font-medium text-center underline px-2 md:px-4 lg:px-6"
                  >
                    <span className="block">Consulting</span>
                    <span className="block">Opportunities</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSec;
