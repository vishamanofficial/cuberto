import React from "react";

const TellUs = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cuberto.com/assets/footer/ropes-sm.mp4?2"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-[6vw] md:text-[8vw] leading-[5vw]">Have</h1>
        <h2 className="text-[5vw] md:text-[8vw] italic font-light">an idea?</h2>
        <button className="mt-6 px-12 border-2 border-white rounded-full text-[6vw] hover:bg-white hover:text-black transition-all">
          TELL US
        </button>
      </div>

      <div className="absolute bottom-5 left-0 w-full text-left text-white text-sm md:text-lg">
        <div className="flex flex-col md:flex-row justify-start gap-6">
          <button className="text-[1vw] border border-white px-3 rounded-full hover:bg-white hover:text-black transition-all">
            INFO@CUBERTO.COM
          </button>
          <button className="text-[1vw] border border-white px-3 rounded-full hover:bg-white hover:text-black transition-all">
            +1 301 549 9309
          </button>
          <button className="text-[1vw] border-none">PRIVACY POLICY</button>
        </div>
      </div>
    </div>
  );
};

export default TellUs;
