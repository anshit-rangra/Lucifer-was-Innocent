import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Page404 = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    
    const createBloodDrops = () => {
      const container = containerRef.current;
      if (!container) return;

      for (let i = 0; i < 20; i++) {
        const drop = document.createElement('div');
        drop.className = 'blood-drop absolute';
        
        
        const left = Math.random() * 100;
        const top = Math.random() * 80 + 10; 
        
        
        const size = Math.random() * 10 + 5;
        
        gsap.set(drop, {
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: 0
        });
        
        container.appendChild(drop);
        
        
        gsap.to(drop, {
          opacity: 0.7,
          duration: Math.random() * 2 + 1,
          delay: Math.random() * 3,
          yoyo: true,
          repeat: -1
        });
      }
    };

    
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });

    
    gsap.from(subtitleRef.current, {
      x: -50,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "elastic.out(1, 0.5)"
    });

    
    gsap.from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 1.5,
      ease: "back.out(4)"
    });

    
    const flicker = () => {
      gsap.to(containerRef.current, {
        backgroundColor: "#1a0000",
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        delay: 2,
        onComplete: () => {
          gsap.to(containerRef.current, {
            backgroundColor: "#000000",
            duration: 0.5
          });
        }
      });
    };

    createBloodDrops();
    flicker();

    
    const flickerInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        flicker();
      }
    }, 5000 + Math.random() * 5000);

    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden"
    >
        
      
      <div className="text-center px-4 z-10">
        <h1 
          ref={titleRef}
          className="text-red-600 text-8xl md:text-9xl font-creepster mb-4 flicker"
          style={{ fontFamily: "'Creepster', cursive" }}
        >
          404
        </h1>
        
        <h2 
          ref={subtitleRef}
          className="text-red-500 text-2xl md:text-3xl mb-8 font-bold pulse"
        >
          PAGE NOT FOUND
        </h2>
        
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          The page you're looking for has vanished... or maybe it was never here to begin with.
        </p>
        
        <button
          ref={buttonRef}
          className="bg-red-800 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 border border-red-900 shadow-lg shadow-red-900/50"
          onClick={() => window.location.href = '/'}
        >
          ESCAPE THIS PLACE
        </button>
      </div>
      
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent z-20"></div>
      
    </div>
  );
};

export default Page404;