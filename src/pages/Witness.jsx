import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {gsap} from 'gsap'

const Witness = () => {
  useEffect(() => {
    gsap.from(".main > *", {
      opacity:0,
      duration:1.4
    })
  },[])
  
  return (
    <div className="main min-h-screen bg-black text-red-300">
      {/* Blood decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-16 h-16 bg-red-900/20 rounded-full filter blur-md"></div>
        <div className="absolute top-1/3 right-32 w-24 h-24 bg-red-900/15 rounded-full filter blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-900/25 rounded-full filter blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-6 py-16 z-10">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-cinzel font-bold  text-red-500 mb-12 text-center tracking-wider border-b border-red-900/50 pb-4 ">
          THE WITNESS
        </h1>

        {/* Author Card */}
        <div className="bg-black/70 border border-red-900/30 shadow-[0_0_30px_rgba(185,28,28,0.2)] rounded-lg p-6 mb-16 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center">

            {/* Author Image */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0 group">
              <div className="absolute inset-0 border-2 border-red-900/50 rounded-full translate-x-2 translate-y-2">
              <img 
                src="/main.jpg" 
                alt="The Prophet" 
                className="relative w-full h-full object-cover rounded-full z-10 grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              </div>
              <div className="absolute inset-0 bg-red-900/10 rounded-full z-20 group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>

            {/* Author Details */}
            <div>
              <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-red-400 mb-2 tracking-wider">
                THE PROPHET OF THE ABYSS
              </h2>
              <p className="text-red-300/80 mb-4 italic">
                "I have seen what lurks beyond the veil, and I bring you its terrible truth."
              </p>
              <div className="h-px bg-red-900/50 w-full my-4"></div>
              <p className="text-red-300/90 mb-4 font-cinzel">
                A solitary figure who emerged from the shadows with revelations too dreadful to ignore. 
                The Prophet has wandered the liminal spaces between worlds, documenting the unspeakable 
                horrors that await in the darkness.
              </p>
              <p className="text-red-300/90 font-cinzel">
                Their identity remains a mystery, known only by the fragments of forbidden knowledge 
                they've committed to these pages. Some say they were once human, others claim they 
                never were.
              </p>
            </div>
          </div>
        </div>

        {/* images section  */}
        <h2 className="text-2xl font-cinzel font-bold text-red-400 mb-8 text-center tracking-wider">
          FRAGMENTS OF REVELATION
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          {
            ['3eye', '1img', 'https://i.pinimg.com/736x/db/0c/4e/db0c4e2243401eea57e6e17853522ad6', 'https://i.pinimg.com/736x/b1/8b/4e/b18b4e201df8d2ff41132e86c8779184'].map((item) => (
            <Link key={item} to={'https://youtu.be/eF_ewYGPwp0?si=cWT3HkTa5aOdeF7L'} target='_blank'>
              <div  className="group relative overflow-hidden rounded-lg border border-red-900/30 hover:border-red-500/50 transition-all duration-500 h-64">
              <div className="absolute inset-0 bg-red-900/10 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src={`${item}.jpg`} 
                alt={`Manuscript page ${item}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="font-cinzel text-red-300 group-hover:text-white transition-colors duration-300">
                  Page of the Damned 
                </h3>
              </div>
            </div>
            </Link>
          ))}
        </div>

          {/* some words of author  */}
        <h2 className="text-2xl font-cinzel font-bold text-red-400 mb-8 text-center tracking-wider border-t border-red-900/50 pt-8">
          WHISPERS OF THE WITNESSED
        </h2>
        
        <div className="space-y-6 mb-16">
          {
          [
            "After reading these pages, I no longer sleep with the lights off. The truth is worse than any nightmare.",
            "The Prophet doesn't write fiction. These are field notes from the edge of reality.",
            "I burned my copy. It came back the next day, untouched by the flames.",
            "You can't unsee what these words reveal about our world. Ignorance was bliss."
          ].map((testimonial, index) => (

            <div key={index} className="relative pl-8">
              <div className="absolute left-0 top-0 text-5xl font-cinzel text-red-900/50 h-full -mt-2">"</div>
              <p className="text-red-300/90 italic">{testimonial}</p>
              <div className="text-red-900/70 text-sm mt-2">— Anonymous</div>
            </div>
          ))}
        </div>

          {/* button for buying book  */}

        <div className="text-center mt-12">
          <Link 
            to="/buy-book" 
            className="relative mx-auto h-12 px-8 inline-flex items-center justify-center border border-red-500 bg-transparent rounded-full text-sm font-medium tracking-wider cursor-pointer overflow-hidden group"
          >
            <div className="absolute inset-0 bg-red-500 top-full group-hover:top-0 transition-all duration-300 rounded-full"></div>
            <span className="relative z-10 font-bold font-gothic+ text-red-300 group-hover:text-black transition-colors duration-300 flex items-center">

              {/* Lock svg */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>

              DARE TO POSSESS THE TRUTH
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Witness;