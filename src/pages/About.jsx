import React from "react";

function About() {
  return (
    <div
      className="h-[80vh] md:h-[120vh] pt-10 w-[99.9%] font-[Poppins] xl:relative
    xl:h-[100vh]"
    >
       
      <div
        className="h-[90%] md:h-[90%] inline-block w-[1px] ml-6 bg-black
      xl:h-[90%] xl:flex "
      >
        <div>
          <h1
            className="text-6xl text-[#E43626] font-bold pl-4 font-[Gloock] tracking-wide
        lg:text-[125px] "
          >
            about
          </h1>
          <h1
            className="text-6xl text-[#E43626] font-bold pl-4 font-[Gloock] tracking-wide
        lg:text-[125px] "
          >
            me
          </h1>
        </div>
        <div className="w-[70vw] ml-10 mt-10 xl:h-[35vh]  xl:mt-15 xl:ml-90">
          <p className="text-sm xl:text-base xl:w-130 ">
            I'm a passionate and self-driven{" "}
            <span className="text-red-500">
              Electronics and communication graduate
            </span>{" "}
            with a deep love for building clean, interactive, and meaningful
            digital experiences. What started as curiosity quickly turned into a
            daily obsession — from solving complex DSA problems to designing and
            developing full-stack web apps. With a strong foundation in
            JavaScript, React, Tailwind CSS, and a growing expertise in Node.js,
            Express, MongoDB, I strive to write code that not only works — but
            works beautifully.
          </p>
          <div className="graduation-pic hidden md:block md:h-[50vh] md:w-[50vh] mt-15 lg:block relative lg:w-70 lg:h-80">
            <div className="w-[100px] h-[100px] rounded-full absolute top-[-30px] right-[-30px] bg-red-500 flex items-center justify-center">
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
                  <textPath xlinkHref="#arcPath" startOffset="0">
                    Graduated form CMRTC 🎓
                  </textPath>
                </text>
              </svg>
            </div>
            <img
              src="/cleared-graduated-pic.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
