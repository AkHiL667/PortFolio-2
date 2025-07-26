import React from "react";

function Project1() {
  return (
    <div className="w-[99.9%] pt-10 h-[80vh] md:h-[100vh] pl-7 relative font-[Poppins] flex justify-between">
      
      <div className="w-full h-full flex flex-col ">
        <div className="pl-4">
          <div className="h-[90%] absolute top-10 left-0 inline-block w-[1px] ml-6 bg-black
      xl:h-[90%] xl:flex "></div>
          <h1
            className="text-6xl text-[#E43626] font-bold  font-[Gloock] tracking-wide mt-10
        lg:text-[125px]"
          >
            Mix Pod
          </h1>
          <p className=" text-sm w-[80%] pl-6 mt-10">
            MixPod – Real-time Chat Application A scalable, real-time chat
            platform built with React, Zustand, Node.js, Express, MongoDB, and
            Socket.io. Features include JWT-based authentication,
            Cloudinary-powered avatar uploads, multiple chat & UI themes, and a
            clean, responsive TailwindCSS UI. Designed for seamless real-time
            messaging, ensuring fast, secure, and interactive communication.
          </p>
          <a href="https://mixpod.onrender.com/" target="_blank" className=" text-sm mt-10">
            <button className="bg-[#E43626] cursor-pointer text-white ml-6 px-4 mt-5 py-2 rounded-md">
              View Project
            </button>
          </a>
        </div>
      </div>
      <div className=" hidden md:block w-[50%] h-full ">
        <div className="w-[80%] relative h-[80%] mt-20 ">
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
                  <textPath xlinkHref="#arcPath" startOffset="0">
                    A real time chating 🐈‍⬛ application
                  </textPath>
                </text>
              </svg>
            </div>
          <img src="/chatting-cat.jpg" loading="lazy" alt="" className="w-full z-[-3] h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Project1;
