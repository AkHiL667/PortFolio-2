import React, { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import myData from "./data";
import LocomotiveScroll from "locomotive-scroll";
import About from "./pages/About";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Footer from "./pages/Footer";
import Nav from "./components/Nav";
import Aside from "./components/Aside";
import HeroImage from "./components/HeroImage";
import Hero from "./components/Hero";

function App() {
  const locoScrollRef = useRef(null);
  const [show, setShow] = useState(false);


  useEffect(() => {
    // Add locomotive scroll classes to html
    document.documentElement.classList.add('has-scroll-smooth');

    document.addEventListener('click', () => {
      setShow(!show);
    });

    // Wait for DOM to be ready
    const initScroll = () => {
      locoScrollRef.current = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        multiplier: 1,
        lerp: 0.1,
      });
    };

    // Initialize after a short delay to ensure all content is loaded
    setTimeout(initScroll, 100);

    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
      document.documentElement.classList.remove('has-scroll-smooth');
    };
  }, [show]);

  return (
    <>
      <div className={`w-full relative font-[Poppins] bg-${show ? 'black' : '[#E7E5D9]'} text-${show ? 'white' : 'black'}`}>
        {/* Fixed navigation elements */}
        <Nav locoScrollRef={locoScrollRef} />
        <Aside />
        <HeroImage />
        
        <div data-scroll-container>
          {/* Hero Page with Canvas 0 */}
          <div data-scroll-section className="relative min-h-screen">
            {show && myData[0].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
            <Hero />
          </div>

          {/* About Page with Canvas 1 */}
          <div data-scroll-section className="relative min-h-screen">
            {show && myData[1].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
            <About />
          </div>

          {/* Project1 Page with Canvas 2 */}
          <div data-scroll-section className="relative min-h-screen">
            {show && myData[2].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
            <Project1 />
          </div>

          {/* Project2 Page with Canvas 3 */}
          <div data-scroll-section className="relative min-h-screen">
            {show && myData[3].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
            <Project2 />
          </div>

          {/* Project3 Page with Canvas 4 */}
          <div data-scroll-section className="relative min-h-screen">
            {show && myData[6].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
            <Project3 />
          </div>

          {/* Footer Page with Canvas 5 */}
          <div data-scroll-section className="relative min-h-screen">
            {show && myData[5].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
