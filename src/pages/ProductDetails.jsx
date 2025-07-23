import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {gsap} from 'gsap'

const pages = [
    {
      id: 1,
      bgImage: 'https://i.pinimg.com/736x/2c/04/0a/2c040a52824ee4d7e4fa87e7e6c6f932.jpg',
      title: 'The Forbidden Truth',
      author: 'Tirth Parsana',
      releaseDate: 'March 1, 2024',
      description: 'Uncover the secrets hidden by centuries of doctrine. The truth begins with doubt.',
    },
    {
      id: 2,
      bgImage: 'https://i.pinimg.com/1200x/76/6e/d1/766ed143c48a206fa0bd35d0bf47fcd7.jpg',
      title: "Lucifer's Perspective",
      author: 'Tirth Parsana',
      releaseDate: 'March 1, 2024',
      description: 'See the fall from a different lens — one of rebellion, love, and misunderstood purpose.',
    },
    {
      id: 3,
      bgImage: 'https://i.pinimg.com/736x/1a/c9/a8/1ac9a85f16c8bad95e948b4fbd3c1f75.jpg',
      title: 'The Red Pill Awakening',
      author: 'Tirth Parsana',
      releaseDate: 'March 1, 2024',
      description: "This isn't just a book — it's a shift. Take the red pill and awaken from the illusion.",
    },
    {
      id: 4,
      bgImage: 'https://i.pinimg.com/736x/35/83/97/358397eca5a94b937418bc488296ebf6.jpg',
      title: 'God vs. Creator',
      author: 'Tirth Parsana',
      releaseDate: 'March 1, 2024',
      description: 'Is the God we worship the true Creator — or a deceiver of light?',
    },
    {
      id: 5,
      bgImage: 'https://i.pinimg.com/736x/2d/bf/1e/2dbf1e9aeff0bf21c902f757eef08b8a.jpg',
      title: 'Final Revelation',
      author: 'Tirth Parsana',
      releaseDate: 'March 1, 2024',
      description: 'One final page. One final question. Are you ready to know what lies beyond belief?',
    },
    {
      id: 6,
      bgImage: 'https://i.pinimg.com/1200x/0a/59/6d/0a596db2a911ee825207a006970b02e2.jpg',
      title: 'The Light of Rebellion',
      author: 'Tirth Parsana',
      releaseDate: 'March 1, 2024',
      description: 'What if rebellion was never evil — but a spark of truth disguised as sin?',
    },
    {
      id: 7,
      bgImage: 'https://i.pinimg.com/736x/57/ee/e9/57eee9cdaf41d13c8997714270cf4cf3.jpg',
      title: 'Return to Eden',
      author: 'Tirth Parsana',
      releaseDate: 'March 1, 2024',
      description: 'Explore the original garden, where innocence and knowledge first clashed.',
    },
];

const ProductDetails = () => {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    gsap.from(".main > *", {
      opacity:0,
      duration:1.4
    })
    const interval = setInterval(() => {
      setActivePage((prev) => (prev + 1) % pages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

 

  return (
    <div className="main min-h-screen bg-black text-white font-cinzel px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:py-16 flex items-center justify-center">
      <div className="w-full max-w-7xl">
        
        <div className="lg:hidden flex flex-col items-center">
          
          <div className="relative w-full h-80 sm:h-96 mb-6 sm:mb-8 rounded-lg overflow-hidden">
            {pages.map((page, index) => (
              <div
                key={page.id}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                  activePage === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
                }`}
                style={{ backgroundImage: `url(${page.bgImage})` }}
              />
            ))}
          </div>
          
          
          <div className="w-full text-center sm:text-left relative min-h-[320px] sm:min-h-[360px]">
            {pages.map((page, index) => (
              <div
                key={page.id}
                className={`absolute w-full transition-opacity duration-1000 px-2 ${
                  activePage === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">{page.title}</h2>
                <p className="text-base sm:text-lg text-gray-300 mb-1">
                  by <span className="text-white font-semibold">{page.author}</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mb-2">Release Date: {page.releaseDate}</p>
                <p className="text-xs sm:text-sm text-gray-400 mb-4">143 pages</p>
                <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">{page.description}</p>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <span className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-0">Rs. 369/-</span>
                  <NavLink to={'/place-order'}>
                    <button className="cursor-pointer px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-lg text-white font-medium w-full sm:w-fit">
                      Buy Now
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="hidden lg:flex w-full">
          
          <div className="relative w-full lg:w-1/2 h-[600px] rounded-lg overflow-hidden">
            {pages.map((page, index) => (
              <div
                key={page.id}
                className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                  activePage === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
                }`}
                style={{ backgroundImage: `url(${page.bgImage})` }}
              />
            ))}
          </div>


          <div className="w-full lg:w-1/2 pl-8 flex flex-col justify-center relative">
            {pages.map((page, index) => (
              <div
                key={page.id}
                className={`absolute transition-opacity duration-1000 ${
                  activePage === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
                }`}
              >
                <h2 className="text-3xl font-bold text-red-500 mb-2">{page.title}</h2>
                <p className="text-lg text-gray-300 mb-1">
                  by <span className="text-white font-semibold">{page.author}</span>
                </p>
                <p className="text-sm text-gray-400 mb-2">Release Date: {page.releaseDate}</p>
                <p className="text-sm text-gray-400 mb-4">143 pages</p>
                <p className="text-base text-gray-300 mb-6 leading-relaxed">{page.description}</p>
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-bold text-white">Rs. 369/-</span>
                </div>
                <NavLink to={'/place-order'}>
                  <button className="cursor-pointer px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-lg text-white font-medium w-fit">
                    Buy Now
                  </button>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;