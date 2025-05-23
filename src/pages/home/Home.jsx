import React from "react";
import LandingPage from "../../components/LandingPage";
import HeroSection from "../../components/HeroSection";
import RoomShowcaseCarousel from "../../components/RoomShowcaseCarousel";
import HotelExperience from "../../components/HotelExperience";
import SpaWellnessSection from "../../components/SpaWellnessSection";
import FacilitiesSection from "../../components/FacilitiesSection";
import FacilitiesCarousel from "../../components/FacilitiesCarousel";
import AddressSection from "../../components/AddressSection";
import HighlightsSection from "../../components/HighlightsSection";
import BlogList from "../../components/BlogList";
import DiningSection from "../../components/DiningSection";
import HaridwarExperienceSection from "../../components/HaridwarExperienceSection";
import FacilitiesIconSection from "../../components/FacilitiesIconSection";
import VideoSection from "../../components/VideoSection";

const Home = () => {
  return (
    <div>
      <LandingPage />
      {/* <VideoSection/> */}
      <HeroSection />
      <RoomShowcaseCarousel />
      <HotelExperience />
      <DiningSection/>
      <HaridwarExperienceSection/>

      <HighlightsSection/>
      {/* <SpaWellnessSection /> */}
      <FacilitiesSection />
      <FacilitiesCarousel />
      <BlogList/>

      <FacilitiesIconSection/>
      <AddressSection />
    </div>
  );
};

export default Home;
