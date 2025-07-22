import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.from("h1", {
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(".book", {
      opacity: 0,
      scale: 0.3,
      duration: 0.8,
      delay: 1,
      rotateZ: 120,
    });
  }, []);

  return (
    <>
      <main className="w-full min-h-screen bg-black [perspective:1000px] flex flex-col lg:flex-row items-center justify-center p-4 relative overflow-hidden">

        {/* First heading  */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] w-full lg:w-auto p-4 text-center lg:text-right font-medium font-cinzel order-1 lg:order-none lg:absolute lg:left-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:max-w-[25vw]">
          The real truth about{" "}
          <span className="text-red-600 blink-red">SATEN</span>
        </h1>

        {/* book div  */}
        <div className="flex items-center justify-center order-2 my-4 sm:my-8 w-full lg:w-auto">
          <NavLink to={"/about"} className="w-full h-full flex justify-center">
            <div
              className="book cursor-pointer relative"
              style={{
                width: "clamp(300px, 25vw, 400px)",
                height: "clamp(300px, 75vh, 600px)",
              }}
            >
              <div className="frontbook w-full h-full rounded-4xl absolute top-0 left-0 bg-[url('https://i.pinimg.com/736x/e3/0e/ad/e30ead6eab8680fac71a00769110594b.jpg')] bg-cover bg-center z-50 origin-bottom-left transition-transform duration-1000"></div>

              {["forthpage", "thirdpage", "secondpage", "firstpage"].map(
                (cur) => {
                  return (
                    <div key={cur}>
                      <div
                        className={`${cur} w-full h-full rounded-4xl absolute top-0 left-0 bg-[url('https://imgs.search.brave.com/jYMVOCbIVSbZ3iHP6HdxeKfl657EeWhvvQQ1whzB7dA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNkL2Ez/LzQwLzNkYTM0MDNm/NGEzOWI5NzU3ODZh/MjAwOGE5YTUzMzdm/LmpwZw')] bg-cover bg-center z-40 origin-bottom-left transition-transform duration-1000`}
                      ></div>
                    </div>
                  );
                }
              )}
            </div>
          </NavLink>
        </div>

        {/* second heading */}
        <h1 className="font-cinzel text-white text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] w-full lg:w-auto p-4 text-center lg:text-left font-medium order-3 lg:order-none lg:absolute lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:max-w-[25vw]">
          The <span className="text-red-600 blink-red">Red</span> <br /> Pill
        </h1>
      </main>
    </>
  );
};

export default Home;
