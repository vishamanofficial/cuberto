import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src=""
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true" // ✅ accessibility hint
      />
    </section>
  );
};

export default VideoSection;
