import React from 'react'

const SmokeEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-red-900 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10"></div>
            </div>
  )
}

export default SmokeEffect
