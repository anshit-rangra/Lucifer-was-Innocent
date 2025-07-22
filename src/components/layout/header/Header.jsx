import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import MobileNavButton from './MobileNavButton'
import NavButton from './NavButton'
import { CartIcon, HomeIcon, InfoIcon, UserIcon } from './HeaderIcons';

const DarkHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    gsap.from('.anime', {
      opacity:0,
      duration:1.5,
      stagger:1
    })
  }, []);

  return (
    <header
      className="bg-black/90 border-b border-red-900/30 shadow-[0_0_20px_rgba(185,28,28,0.3)] sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-16">

          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="anime text-base sm:text-lg font-gothic font-bold text-red-500 tracking-wider hover:text-red-400 transition-colors">
                LUCIFER'S TRUTH
              </span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="anime hidden md:flex items-center space-x-2 lg:space-x-4">
            <NavButton 
              to="/" 
              icon={<HomeIcon />}
              text="ABYSS"
            />
            <NavButton 
              to="/about" 
              icon={<InfoIcon />}
              text="REVELATIONS"
            />
            <NavButton 
              to="/order-details" 
              icon={<CartIcon />}
              text="SUMMON"
            />
            <NavButton 
              to="/witness" 
              icon={<UserIcon />}
              text="WITNESS"
            />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="relative h-8 w-8 flex items-center justify-center border border-red-500 bg-transparent rounded-full cursor-pointer overflow-hidden group focus:outline-none"
            >
              <div className="absolute inset-0 bg-red-500 top-full group-hover:top-0 transition-all duration-300 rounded-full"></div>
              <span className="relative z-10 text-red-300 group-hover:text-black transition-colors duration-300">
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-black/95 border-t border-red-900/20">
          <MobileNavButton to="/" icon={<HomeIcon />} text="ABYSS" onClick={toggleMenu} />
          <MobileNavButton to="/about" icon={<InfoIcon />} text="REVELATIONS" onClick={toggleMenu} />
          <MobileNavButton to="/buy-book" icon={<CartIcon />} text="SUMMON" onClick={toggleMenu} />
          <MobileNavButton to="/witness" icon={<UserIcon />} text="WITNESS" onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};


export default DarkHeader;
