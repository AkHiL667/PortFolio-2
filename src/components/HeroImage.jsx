import React from 'react'

function HeroImage() {
  return (
    <div>
       <div className="w-[360px] hidden lg:block absolute right-[23vw] top-[14vh] bg-red-500 h-[530px]">
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
                fill="black"
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
          <img src="/garagedoor-photo.jpg" alt="portfolio photo" className="w-full h-full object-cover"/>
        </div>
    </div>
  )
}

export default HeroImage
