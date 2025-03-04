/* eslint-disable no-unused-vars */
import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import WhatWeDo from "./components/WhatWeDo";
import FeaturedProject from "./components/FeaturedProject";
import Philosophy from "./components/Philosophy";
import Resources from "./components/Resources";
import NewDay from "./components/NewDay";
import FollowUs from "./components/FollowUs";
import TellUs from "./components/TellUs";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-black bg-[#f1f1f1]">
      <Navbar />
      <LandingPage />
      <WhatWeDo />
      <FeaturedProject />
      <Philosophy />
      <Resources />
      <NewDay />
      <FollowUs />
      <TellUs />
    </div>
  );
};

export default App;
