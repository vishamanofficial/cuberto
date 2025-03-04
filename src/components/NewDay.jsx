import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NewDay = () => {
  const [scrollDirection, setScrollDirection] = useState(1);
  const [speed, setSpeed] = useState(10); // Base speed

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection(1); // Scrolling Down → Move Left Faster
        setSpeed(10);
      } else {
        setScrollDirection(-1); // Scrolling Up → Move Right
        setSpeed(10);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-black py-20 ">
      {/* Heading Section */}
      <div className="w-full mx-auto overflow-hidden relative">
        <motion.div
          className="flex items-center whitespace-nowrap"
          initial={{ x: "0%" }}
          animate={{ x: scrollDirection === 1 ? "-100%" : "100%" }}
          transition={{ ease: "linear", duration: speed, repeat: Infinity,}}
        >
          <video
            className="w-[12vw] h-[9vw] rounded-full object-cover"
            src="https://cuberto.com/assets/smfeed/header.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <h1 className="text-[6vw] md:text-[9vw] italic leading-[5vw] ml-6">
            New Day — New Inspo
          </h1>
        </motion.div>
      </div>


      {/* Projects Carousel */}
      <div className="max-w-[1200px] mx-auto mt-36 pb-32 overflow-x-auto flex gap-6 scrollbar-hide">
        {[
          {
            title: "Astrology planner app: plan, achieve, thrive",
            image: "https://cuberto.com/assets/smfeed/dribbble/still-4d3e129d6f6533551995e6677b65c078.png",
          },
          {
            title: "We Boost _ Creators",
            image: "https://cuberto.com/assets/smfeed/dribbble/still-2222ffa965c7262265daa03dc7bf7dc1.png",
          },
          {
            title: "QAR 12,500 - Finance App",
            image: "https://cuberto.com/assets/smfeed/dribbble/original-8992ba4f8649be62a1a842166b8f0225.png",
          },
          {
            title: "Next Gen AI Creative Studio",
            image: "https://cuberto.com/assets/smfeed/dribbble/original-d6dc6cadea94be3deaece2d70312f0d2.png",
          },
        ].map((project, index) => (
          <div key={index} className="flex flex-col items-center w-[300px]">
            <img
              className="w-full h-auto object-cover rounded-3xl"
              src={project.image}
              alt={project.title}
            />
            <p className="mt-2 text-lg font-thin">⚫ cuberto</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewDay;
