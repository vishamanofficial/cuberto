import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const videoRefs = useRef([]);
  const titleRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    // Set initial states for animation
    gsap.set(headingRef.current, { opacity: 0, y: 100 });
    videoRefs.current.forEach((el) => gsap.set(el, { opacity: 0, y: 60 }));
    titleRefs.current.forEach((el) => gsap.set(el, { opacity: 0, y: 30 }));

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%", // Triggers when 80% of section is in view
      onEnter: () => {
        // Animate heading
        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.5, // Increased for smoothness
          ease: "power3.out", // Smoother motion
        });

        // Animate videos with stagger effect
        gsap.to(videoRefs.current, {
          opacity: 1,
          y: 0,
          duration: 1.5, // Longer duration
          ease: "power3.out",
          stagger: 0.4, // Increased for better pacing
        });

        // Animate titles slightly after videos
        gsap.to(titleRefs.current, {
          opacity: 1,
          y: 0,
          duration: 1.3, // Slightly faster than videos
          ease: "power3.out",
          delay: 0.3,
          stagger: 0.3,
        });
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-black rounded-t-[8vw] md:rounded-t-[6vw] text-white py-40 md:px-20"
    >
      {/* Heading Section */}
      <div ref={headingRef} className="max-w-[1200px] mx-auto">
        <h1 className="text-[6vw] md:text-[9vw] font-medium leading-[5vw]">
          Featured
        </h1>
        <div className="flex items-center">
          <video
            className="w-[12vw] h-[9vw] rounded-full object-cover"
            src="https://cuberto.com/assets/featured/header.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <h2 className="text-[5vw] md:text-[9vw] italic font-light ml-4">
            projects
          </h2>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-[1200px] mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            title: "Punto Pago - The First Super-App in Latin America",
            video: "https://cuberto.com/assets/projects/puntopago/cover.mp4",
          },
          {
            title:
              "Kelvin Zero - A digital product for passwordless authentication",
            video: "https://cuberto.com/assets/projects/kzero/cover.mp4?2",
          },
          {
            title: "DaoWay - Astrology planner app: plan, achieve, thrive",
            video: "https://cuberto.com/assets/projects/daoway/cover.mp4",
          },
          {
            title: "Punto Pago - The First Super-App in Latin America",
            video: "https://cuberto.com/assets/projects/puntopago/cover.mp4",
          },
          {
            title:
              "Kelvin Zero - A digital product for passwordless authentication",
            video: "https://cuberto.com/assets/projects/kzero/cover.mp4?2",
          },
          {
            title: "DaoWay - Astrology planner app: plan, achieve, thrive",
            video: "https://cuberto.com/assets/projects/daoway/cover.mp4",
          },
        ].map((project, index) => {
          return (
            <div
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              className={`rounded-xl overflow-hidden ${
                index % 2 === 1 ? "mt-[100px]" : ""
              }`}
            >
              <video
                className="w-[30vw] h-[40vw] object-cover rounded-[40px]"
                src={project.video}
                loop
                muted
                playsInline
              />
              <div
                ref={(el) => (titleRefs.current[index] = el)}
                className="text-white text-lg font-medium bg-black bg-opacity-60 px-4 py-2 rounded-lg mt-2"
              >
                {project.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
