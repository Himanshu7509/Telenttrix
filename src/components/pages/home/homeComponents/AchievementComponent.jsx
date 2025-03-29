import React, { useState } from 'react';
import image from '../../../../assets/Video-screenshot.png'; // Assuming you have the poster image
import video from '../../../../assets/Intelligence-AV.mp4';

const AchievementComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 flex flex-col md:flex-row items-center overflow-hidden gap-8">
      {/* Text Content Section */}
      <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
        <h1 className="text-[20px] md:text-[30px] font-medium text-[#253e91]">
          Achieve Optimized Efficiencies Intelligently.
        </h1>
        
        <div className="text-gray-700 space-y-3 sm:space-y-4">
          <p className="text-[14px] font-semibold">
            Workforce Solutions to Managed Services, today most organizations need a complete spectrum of intelligent business solutions. They need experienced partners with expertise who can provide value, flexibility and financial predictability.
          </p>
          
          <p className="text-[14px] font-semibold">
            Plus talent needs opportunities to apply their intellect and progress in their career.
          </p>
          
          <p className="text-[14px] font-semibold">
            We empower both and are the eco system that connects people, technologies and opportunities with intelligence.
          </p>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
        <div className="aspect-video w-full relative">
          {!isPlaying ? (
            <div className="relative w-full h-full overflow-hidden">
              <img 
                src={image} 
                alt="Artech Intelligence" 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={handleVideoToggle}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                aria-label="Play video"
              >
                <span className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 bg-white/25 hover:bg-white/40 rounded-full transition-colors">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </span>
              </button>
            </div>
          ) : (
            <div className="overflow-hidden">
              <video 
                src={video}
                className="w-full h-full object-cover"
                controls
                autoPlay
                onEnded={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementComponent;