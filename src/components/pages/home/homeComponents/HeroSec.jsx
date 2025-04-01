import React, { useState, useEffect } from "react";
import banner1 from "../../../../assets/homebannernew.png";
import banner2 from "../../../../assets/banner22.jpg";

const HeroSec = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      backgroundImage: banner1,
      title: "Empowering Businesses and Careers",
      subtitle: "through Applied Human Intelligence",
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

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

          {/* Text Overlay - Only for the first slide */}
          {index === 0 && slide.title && (
            <div className="absolute inset-0 flex flex-col items-center mt-8 ">
              <div className="px-4 max-w-4xl">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-white">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          )}

          {/* Workforce Solutions Navigation - Hidden on mobile */}
          <div className="absolute bottom-0 left-0 right-0 hidden md:block">
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

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={goToPrevSlide}
        className="hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300/80 rounded-full w-12 h-12 items-center justify-center focus:outline-none z-10"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNextSlide}
        className="hidden md:flex absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300/80 rounded-full w-12 h-12 items-center justify-center focus:outline-none z-10"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeroSec;
