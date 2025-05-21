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

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/available-rooms" element={<AvailableRooms />} />
        <Route
          path="/booking-confirmation"
          element={
            <ProtectedRoute>
              <BookingConfirmation />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
