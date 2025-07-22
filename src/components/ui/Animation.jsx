import React, { useEffect } from 'react'
import '../../styles/animation.css'
import { gsap } from "gsap";

const Animation = ({onComplete}) => {

    useEffect(() => {
      gsap.from(".left", {
        x:-1000,
        opacity:0,
        duration:2.5, 
        stagger: 2.5
      })

      gsap.from(".right", {
        x:1000,
        opacity:0,
        duration:2.5, 
        delay:1.2,
        stagger: 2.5
      })

      gsap.to(".left, .right", {
        scale: 0.3,
        opacity: 0,
        duration: .9,
        delay:2.5,
        stagger:1.2,
        onComplete: () => {
            if(onComplete) onComplete()
        }
      })

     
    }, [onComplete])
    

  return (
    <main className='anime-div w-full min-h-[100vh] overflow-hidden bg-black'>
        
        <div className="page img1 left"></div>
        <div className="page img2 right"></div>
        <div className="page img3 left"></div>
        <div className="page img4 right"></div>
        <div className="page img5 left"></div>
        <div className="page img6 right"></div>
    </main>
  )
}

export default Animation
