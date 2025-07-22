import React, { useEffect, useState } from "react";

const Loader = () => {
  const [percent, setPercent] = useState(0);
  const duration = 4000;
  const steps = 100;
  const intervalTime = duration / steps;

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);
    return () => clearInterval(interval);
  });

  
  const [containerSize, setContainerSize] = useState(200);
  const [containerHeight, setContainerHeight] = useState(220);
  const [fillBaseHeight, setFillBaseHeight] = useState(180);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { 
        setContainerSize(150);
        setContainerHeight(165);
        setFillBaseHeight(135);
      } else {
        setContainerSize(200);
        setContainerHeight(220);
        setFillBaseHeight(180);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fillHeight = (percent / 100) * fillBaseHeight - 3;
  const waveY = containerHeight - fillHeight;
  const waveOffset = Math.sin(percent / 5) * (containerSize / 20);
  const safeFillHeight = Math.max(0, Math.min(fillHeight, containerHeight));
  const y = containerHeight - safeFillHeight;

  return (
    <section className="w-full h-screen bg-black flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div 
          className="relative"
          style={{
            width: `${containerSize}px`,
            height: `${containerHeight}px`
          }}
        >
          {/* Clipped Blood Fill */}
          <div
            className="absolute w-full h-full"
            style={{
              clipPath: 'polygon(25% 100%, 75% 100%, 100% 0%, 0% 0%)',
              WebkitClipPath: 'polygon(25% 100%, 75% 100%, 100% 0%, 0% 0%)',
              overflow: "hidden",
            }}
          >
            {/* SVG Blood Fill with Wave Mask */}
            <svg
              className="w-full h-full"
              width={containerSize}
              height={containerHeight}
              xmlns="http://www.w3.org/2000/svg"
              viewBox={`0 0 ${containerSize} ${containerHeight}`}
              preserveAspectRatio="none"
            >
              <defs>
                <mask id="waveMask">
                  <rect width={containerSize} height={containerHeight} fill="black" />
                  <path
                    d={`
                      M0 ${waveY}
                      Q${containerSize/4} ${waveY + waveOffset}
                      ${containerSize/2} ${waveY}
                      T${containerSize} ${waveY}
                      L${containerSize} ${containerHeight} L0 ${containerHeight} Z
                    `}
                    fill="white"
                  />
                </mask>
              </defs>

              {/* Red Blood */}
              <rect
                x="0"
                y={y}
                width={containerSize}
                height={safeFillHeight}
                fill="#B91C1C"
                mask="url(#waveMask)"
              />
            </svg>
          </div>

          {/* Glass Outline */}
          <div className="absolute w-full h-full pointer-events-none">

            {/* Left Side \ */}
            <div
              className="absolute left-[25%] bottom-0 w-[2px] bg-white transform -rotate-[13.5deg] origin-bottom"
              style={{ 
                height: `${fillBaseHeight}px`,
                boxShadow: "0 0 4px rgba(255,255,255,0.6)" 
              }}
            />
            {/* Right Side / */}
            <div
              className="absolute right-[25%] bottom-0 w-[2px] bg-white transform rotate-[13.5deg] origin-bottom"
              style={{ 
                height: `${fillBaseHeight}px`,
                boxShadow: "0 0 4px rgba(255,255,255,0.6)" 
              }}
            />
            
            <div
              className="absolute bottom-0 left-[25%] right-[25%] w-[50%] h-[2px] bg-white"
              style={{ boxShadow: "0 0 4px rgba(255,255,255,0.6)" }}
            />
          </div>
        </div>

        {/* Percentage  */}
        <p className="mt-6 sm:mt-8 text-white text-xl sm:text-2xl font-mono font-bold drop-shadow-[0_0_4px_rgba(255,0,0,0.8)]">
          {percent}%
        </p>
      </div>
    </section>
  );
};

export default Loader;