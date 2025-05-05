import React from "react";
import LandingPage from "../../components/LandingPage";
import HeroSection from "../../components/HeroSection";
import RoomShowcaseCarousel from "../../components/RoomShowcaseCarousel";
import HotelExperience from "../../components/HotelExperience";
import SpaWellnessSection from "../../components/SpaWellnessSection";
import FacilitiesSection from "../../components/FacilitiesSection";
import FacilitiesCarousel from "../../components/FacilitiesCarousel";
import AddressSection from "../../components/AddressSection";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <HeroSection />
      <RoomShowcaseCarousel />
      <HotelExperience />
      <SpaWellnessSection />
      <FacilitiesSection />
      <FacilitiesCarousel />
      <AddressSection />
    </div>
  );
};

export default Home;
