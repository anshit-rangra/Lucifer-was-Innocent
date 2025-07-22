import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SocialIcon from './SocialIcon';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.from('.icons a', {
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%', // when top of footer hits 80% of viewport
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black border-t border-red-900/40 shadow-inner shadow-red-900/20 text-red-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Brand Section */}
        <div className="space-y-2 md:space-y-3">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="text-2xl sm:text-3xl text-red-500">☠</div>
            <h2 className="text-lg sm:text-xl font-bold tracking-wider">THE PROPHET</h2>
          </div>
          <p className="text-xs sm:text-sm text-red-400/80 leading-relaxed">
            “The abyss has spoken. Its echoes shall guide the seekers.”
          </p>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-start md:items-end space-y-3 md:space-y-4">
          <h3 className="text-sm md:text-base text-red-500 font-semibold tracking-wider">
            FOLLOW THE WHISPERS
          </h3>
          <div className="icons flex space-x-4 sm:space-x-6 text-lg sm:text-xl">
            <SocialIcon
              href="https://instagram.com/tirthrajparsana"
              icon={<FaInstagram />}
              label="Instagram"
            />
            <SocialIcon
              href="https://x.com/tirthrajparsana"
              icon={<FaTwitter />}
              label="Twitter"
            />
            <SocialIcon
              href="https://www.youtube.com/@tirthrajparsana"
              icon={<FaYoutube />}
              label="YouTube"
            />
            <SocialIcon
              href="https://open.spotify.com/artist/4g4DYL23HfNW3X9LlXj62j?nd=1&dlsi=1f80a19ce55545e0"
              icon={<FaSpotify />}
              label="Spotify"
            />
            <SocialIcon
              href="https://www.facebook.com/tirth.parsana.56/"
              icon={<FaFacebook />}
              label="Facebook"
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-red-900/20 text-center py-4 md:py-6">
        <p className="text-xs text-red-500">
          © {new Date().getFullYear()} LUCIFER'S TRUTH — All rights reserved to the Abyss.
        </p>
        <p className="text-xxs xs:text-xs text-red-700 mt-1 italic">
          The truth is not for all — only for the awakened.
        </p>
      </div>
    </footer>
  );
};



export default Footer;
