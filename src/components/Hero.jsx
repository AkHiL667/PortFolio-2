import React from 'react'

function Hero() {
  return (
    <div className='w-[90vw] h-[60vh] font-[Gloock] '>
      <h1 className='text-4xl ml-3 md:mt-10 md:text-5xl font-semibold tracking-wider
      lg:text-8xl lg:mt-40'>Akhil</h1>
      
      <h1 className='text-3xl ml-3 md:text-4xl font-semibold
      lg:text-7xl lg:tracking-wider lg:w-[50vw] '>a software developer</h1>
      <p className='hidden lg:block text-sm ml-3 mt-4 w-[40vw] font-[Poopins] '>Software Developer from <span className='text-red-500'>Hyderabad.</span>  I build real-time, interactive, and scalable web apps with clean UI and production-grade functionality.</p>
      <div className='lg:hidden w-[70vw] relative mt-15 ml-20 h-[45vh] md:w-[45vw] md:h-[60vh] md:ml-45 md:mt-20' style={{ zIndex: 1 }}>
      <div className="w-[100px] h-[100px] rounded-full absolute top-[-30px] left-[-30px] bg-red-500 flex items-center justify-center">
            {/* Rotating text SVG */}
            <svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
              className="absolute top-[-25px] left-[-25px] pointer-events-none animate-spin-slow"
              style={{ zIndex: 2 }}
            >
              <defs>
                <path
                  id="arcPath"
                  d="M 75 15
                     A 60 60 0 1 1 80 135"
                />
              </defs>
              <text
                fontSize="9"
                fontFamily="Poppins, sans-serif"
                fill="red"
                fontWeight="normal"
                letterSpacing="1"
              >
                <textPath
                  xlinkHref="#arcPath"
                  startOffset="0"
                >
                 just a guy who loves 😎 to code 
                </textPath>
              </text>
            </svg>
          </div>
        <img src="/src/assets/garagedoor-photo.jpg" alt="" className='w-full h-full object-cover' />
      </div>
    </div>
  )
} 

export default Hero
