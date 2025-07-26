import React from "react";

function Project2() {
  return (
    <div className="w-[99.9%] pt-10 h-[80vh] md:h-[100vh] pl-7 relative font-[Poppins] flex justify-between">
      <div className="w-full h-full flex flex-col ">
        <div className="pl-4">
          <div
            className="h-[90%] absolute top-10 left-0 inline-block w-[1px] ml-6 bg-black
      xl:h-[90%] xl:flex "
          ></div>
          <h1
            className="text-6xl text-[#E43626] font-bold  font-[Gloock] tracking-wide mt-10
        lg:text-[125px]"
          >
            Cine Byte
          </h1>
          <p className=" text-sm w-[80%] pl-6 mt-10">
            CineByte – Movie & TV Discovery Web App A modern movie discovery
            platform built with React, Tailwind CSS, Axios, React Router, and
            TMDB API. It allows users to explore trending movies, TV shows, new
            arrivals, ratings, and watch trailers. Includes search functionality
            and advanced filters for a seamless and interactive browsing
            experience.
          </p>
          <a
            href="https://cine-byte.vercel.app/"
            target="_blank"
            className="text-black text-sm mt-10"
          >
            <button className="bg-[#E43626] cursor-pointer text-white ml-6 px-4 mt-5 py-2 rounded-md">
              View Project
            </button>
          </a>
        </div>
      </div>
      <div className=" hidden md:block w-[50%] h-full ">
        <div className="w-[80%] relative h-[80%] mt-20 ">
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
                Movie & TV Discovery 🐈‍⬛ application
                </textPath>
              </text>
            </svg>
          </div>
          <img
            src="./src/assets/movies-site.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Project2;
