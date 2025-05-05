import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="fixed z-[999] w-full px-6 py-6 md:px-10 flex items-center justify-between bg-transparent text-white">
      {/* Mobile View: Logo Left, Menu Right */}
      <div className="flex w-full justify-between md:hidden">
        <div onClick={handleLogoClick} className="cursor-pointer">
          <h1 className="text-lg tracking-widest">AMARTARANGINI</h1>
          <p className="text-xs tracking-wide">HARIDWAR</p>
        </div>
        <button className="text-2xl">☰</button>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-2xl">☰</button>
        <span className="uppercase tracking-widest text-sm">Menu</span>
      </div>

      <div
        className="hidden md:block text-center absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleLogoClick}
      >
        <h1 className="text-lg tracking-widest">AMARTARANGINI</h1>
        <p className="text-xs tracking-wide">HARIDWAR</p>
      </div>

      <div className="hidden md:block">
        <button className="uppercase tracking-widest text-sm">Book Your Stay</button>
      </div>
    </nav>
  );
}

export default Navbar;
