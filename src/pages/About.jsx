import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {gsap} from 'gsap'

const About = () => {
  useEffect(() => {
    gsap.from("main > *", {
      opacity:0,
      duration:1.4
    })
  }, [])
  
  return (
    <main className="font-cinzel min-h-screen w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-10 md:pb-12 lg:pb-14 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-[1800px] mx-auto">
      
      {/* Left Text Section */}
      <div className="w-full lg:w-[48%] xl:w-[50%] space-y-3 sm:space-y-4 md:space-y-5 text-left max-w-[600px] lg:max-w-none">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] xl:text-[3rem] 2xl:text-[3.5rem] font-bold leading-tight">
          We are the children of God.
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-300 font-semibold">
          God is our Father.
        </h3>

        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-400 leading-relaxed">
            A true father desires nothing more than the happiness of his children.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-400 leading-relaxed">
            Then why do we bow before Him, yet our prayers often go unanswered?
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-400 leading-relaxed">
            On the other hand, when we pray to Satan — our wishes come true.
          </p>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-red-400 mt-3 sm:mt-4 md:mt-5 leading-snug">
          So the question is:<br />Is God really the true God?
        </h3>

        
        
        <div className="pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold blink-red text-red-500 mb-3 sm:mb-4">
            Choose the Red Pill
          </h1>
          <NavLink to="/order-details">
            <button className="cursor-pointer px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2.5 md:py-3  bg-red-600 hover:bg-red-700 transition duration-300 rounded-lg font-medium shadow-md hover:shadow-lg hover:shadow-red-900/30 text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">
              Know the Answer
            </button>
          </NavLink>
        </div>
      </div>

      {/* Right Image Section */}
      
      <div className="w-full lg:w-[45%] xl:w-[40%] flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-0">
        <div className="w-[200px] h-[280px] sm:w-[240px] sm:h-[340px] md:w-[280px] md:h-[390px] lg:w-[320px] lg:h-[450px] xl:w-[380px] xl:h-[530px] 2xl:w-[420px] 2xl:h-[590px] rounded-xl shadow-md sm:shadow-lg overflow-hidden border border-gray-800 hover:border-red-900/50 transition-all duration-300">
          <img
            src="https://i.pinimg.com/736x/8c/8d/79/8c8d79a175f18424f418e70de92d661b.jpg"
            alt="Lucifer Red Pill"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

        </div>
      </div>
      
    </main>
  );
};

export default About;