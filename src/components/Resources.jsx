import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Resources = () => {
  const sectionRef = useRef(null);
  const headingRefs = useRef([]);
  const resourceRefs = useRef([]);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Initial state
    gsap.set(headingRefs.current, { opacity: 0, y: 100 });
    gsap.set(resourceRefs.current, { opacity: 0, scale: 0.8 });
    gsap.set([textRef.current, buttonRef.current], { opacity: 0, y: 50 });

    // Scroll Trigger Animations
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        gsap.to(headingRefs.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
        });

        gsap.to(resourceRefs.current, {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
        });

        gsap.to([textRef.current, buttonRef.current], {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
          stagger: 0.2,
        });
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-black rounded-t-[8vw] md:rounded-t-[6vw] text-white py-20 px-5 md:px-20 overflow-hidden"
    >
      {/* Heading Section */}
      <div className="max-w-[1200px] mx-auto pt-36">
        {["Development", "and design", "resources"].map((text, index) => (
          <h1
            key={index}
            ref={(el) => (headingRefs.current[index] = el)}
            className={`text-[6vw] md:text-[9vw] ${
              index === 2 ? "italic font-light leading-[7vw]" : "leading-[8vw]"
            }`}
          >
            {text}
          </h1>
        ))}
      </div>

      {/* Resources List */}
      <div className="max-w-[1200px] mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "How to Make UI/UX Website // HTML and CSS development",
            image:
              "https://cdn.cuberto.com/cb/upload/b73b0d2feb001c8bd719c808c40ce28b.png",
          },
          {
            title: "How to Cook an Emotional Site // Web Development",
            image:
              "https://cdn.cuberto.com/cb/upload/bc24961ad4410b4202a2277bc1c487fb.png",
          },
          {
            title: "How to Make Epic Website // From Scratch",
            image:
              "https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png",
          },
        ].map((resource, index) => (
          <div
            key={index}
            ref={(el) => (resourceRefs.current[index] = el)}
            className="rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-auto object-cover rounded-xl"
              src={resource.image}
              alt={resource.title}
            />
            <p className="mt-4 text-lg font-medium">{resource.title}</p>
          </div>
        ))}
      </div>

      {/* Description & Button */}
      <div className="max-w-[1200px] pb-36 mx-auto mt-16 text-center">
        <p ref={textRef} className="text-lg md:text-xl font-light max-w-[800px] mx-auto">
          We regularly release design courses, offer advice to newbie designers,
          walk you through creating awesome effects, and share source files.
        </p>
        <div className="mt-6">
          <button
            ref={buttonRef}
            className="px-6 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all"
          >
            VIEW ALL RESOURCES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
