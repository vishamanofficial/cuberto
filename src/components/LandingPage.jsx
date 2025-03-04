import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LandingPage = () => {
  const textRef = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    // Set initial state to prevent flickering
    gsap.set(textRef.current, { opacity: 0, y: 100 });
    gsap.set(videoRef.current, { opacity: 0, y: 100 });

    // Animate text smoothly
    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.2, // Delay between each line
    });

    // Animate video smoothly
    gsap.to(videoRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "expo.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative z-10 h-screen w-full bg-[#f1f1f1] flex items-center overflow-hidden">
        {/* Text Section */}
        <div className="textStructure mt-10 md:mt-20 px-5 md:px-20 w-full max-w-[1200px] mx-auto text-left">
          {["We are a digital", "design and", "motion agency"].map(
            (item, index) => (
              <div
                key={index}
                className="masker overflow-hidden"
                ref={(el) => (textRef.current[index] = el)} // Assign refs to each line
              >
                <div className="w-fit flex items-center">
                  {/* Video inside text */}
                  {index === 1 && (
                    <div className="mr-[1vw] w-[10vw] h-[7vw] rounded-full relative top-[0.5vw] overflow-hidden">
                      <video
                        className="w-full h-full object-cover"
                        src="https://cuberto.com/assets/home/hero/header.mp4"
                        autoPlay
                        loop
                        muted
                      />
                    </div>
                  )}
                  {/* Heading */}
                  <h1
                    className={`text-[9vw] md:text-[8vw] leading-[8vw] md:leading-[8.5vw] tracking-tight font-medium text-black ${
                      item === "design"
                        ? "font-['Roboto Flex']"
                        : "font-['Matter']"
                    }`}
                  >
                    {item}
                  </h1>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Full-Width & Full-Height Video Section */}
      <div
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        ref={videoRef}
      >
        <video
          className="w-full h-full object-cover"
          src="https://cuberto.com/assets/showreel/short.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default LandingPage;
