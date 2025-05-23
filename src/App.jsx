/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import AvailableRooms from "./pages/hotel/AvailableRooms";
import BookingConfirmation from "./pages/hotel/BookingConfirmation";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./components/UserProfile";
import UserBookings from "./components/UserBookings";
import RoomDetails from "./pages/hotel/RoomDetails";
import BookYourStay from "./components/BookYourStay";
import BlogDetails from "./components/BlogDetails";
import OurRooms from "./components/OurRooms";
import RestaurantExperience from "./components/RestaurantExperience";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll();
  // }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/our-rooms" element={<OurRooms/>} />
        <Route path="/restaurant" element={<RestaurantExperience />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />


        <Route path="/available-rooms" element={<AvailableRooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/book-your-stay" element={<BookYourStay />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route
          path="/booking-confirmation"
          element={
            <ProtectedRoute>
              <BookingConfirmation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <UserBookings />
            </ProtectedRoute>
          }
        />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
