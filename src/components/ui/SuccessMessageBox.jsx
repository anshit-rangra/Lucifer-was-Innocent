import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const HorrorOrderNotification = ({ onClose }) => {
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const bloodDrips = useRef([]);

  useEffect(() => {
    // Create blood drip elements
    bloodDrips.current = Array.from({ length: 5 }, (_, i) => {
      const drip = document.createElement('div');
      drip.className = 'absolute top-0 bg-red-800 rounded-full opacity-80 blood-drip';
      drip.style.left = `${10 + (i * 20)}%`;
      drip.style.width = `${5 + Math.random() * 10}px`;
      drip.style.height = `${20 + Math.random() * 50}px`;
      boxRef.current.appendChild(drip);
      return drip;
    });

    // Initial state
    gsap.set(overlayRef.current, { backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0,0,0,0)' });
    gsap.set(boxRef.current, { scale: 0.7, autoAlpha: 0, y: 50 });
    gsap.set(textRef.current, { y: 20, autoAlpha: 0 });
    gsap.set(buttonRef.current, { y: 20, autoAlpha: 0 });
    gsap.set(bloodDrips.current, { scaleY: 0, transformOrigin: "top center" });

    // Animation sequence
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(overlayRef.current, {
      duration: 0.8,
      backdropFilter: 'blur(8px)',
      backgroundColor: 'rgba(0,0,0,0.7)'
    });

    tl.to(boxRef.current, {
      duration: 0.6,
      scale: 1,
      autoAlpha: 1,
      y: 0
    }, "-=0.5");

    tl.to(textRef.current, {
      duration: 0.5,
      y: 0,
      autoAlpha: 1
    }, "-=0.3");

    tl.to(buttonRef.current, {
      duration: 0.5,
      y: 0,
      autoAlpha: 1
    }, "-=0.3");

    tl.to(bloodDrips.current, {
      duration: 1.5,
      scaleY: 1,
      stagger: 0.2,
      ease: "power2.inOut"
    }, "-=0.5");

    tl.to(boxRef.current, {
      duration: 2,
      repeat: -1,
      yoyo: true,
      boxShadow: "0 0 40px rgba(255, 0, 0, 0.9)"
    });

    return () => {
      tl.kill();
      bloodDrips.current.forEach(drip => {
        if (drip.parentNode) drip.parentNode.removeChild(drip);
      });
    };
  }, []);

  const handleReturn = () => {
    gsap.to([boxRef.current, textRef.current, buttonRef.current], {
      duration: 0.5,
      autoAlpha: 0,
      y: 50,
      onComplete: onClose
    });
    gsap.to(overlayRef.current, {
      duration: 0.8,
      backdropFilter: 'blur(0px)',
      backgroundColor: 'rgba(0,0,0,0)',
      delay: 0.3
    });

    navigate("/");
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center"
    >
      <div
        ref={boxRef}
        className="relative max-w-[80%] px-10 py-12 bg-[#8b0000] border-2 border-[#3a0000] shadow-[0_0_30px_rgba(139,0,0,0.8)] rounded text-center overflow-hidden"
      >
        <h2
          ref={textRef}
          className="text-[2.5rem] font-creepster tracking-widest text-[#ffcccc] mb-8 drop-shadow-[0_0_10px_#ff0000]"
        >
          ORDER PLACED...<br />Cash On Delivery
        </h2>
        <button
          ref={buttonRef}
          onClick={handleReturn}
          className="px-8 py-3 bg-[#3a0000] text-[#ffcccc] border border-[#ff0000] rounded text-lg tracking-wider font-creepster drop-shadow-[0_0_5px_#ff0000] hover:bg-[#500000] transition-all duration-200"
        >
          RETURN TO YOUR FATE
        </button>
      </div>
    </div>
  );
};

export default HorrorOrderNotification;
