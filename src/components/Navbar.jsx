import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AuthModal from "./AuthModal";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar() {
  const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8800";
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHideNavbar(currentScrollY > lastScrollY && currentScrollY > 60);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogoClick = () => {
    navigate("/");
    setDrawerOpen(false);
  };

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
    setShowDropdown(false);
  };

  const handleLogout = async () => {
    try {
      await fetch(`${baseURL}/api/auth/logout`, {
  method: "POST",
  credentials: "include",
});

      setCurrentUser(null);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-[999] w-full px-6 py-3 md:py-6 md:px-10 flex items-center justify-between bg-black/70 backdrop-blur-sm text-white shadow-md transition-transform duration-300 ${
          hideNavbar ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Mobile View */}
        <div className="flex w-full justify-between md:hidden">
          <div onClick={handleLogoClick} className="cursor-pointer">
            <h1 className="text-lg font-bold tracking-widest text-[#FBD3AF]">AMARTARANGINI</h1>
            <p className="text-xs tracking-wide text-gray-300">HARIDWAR</p>
          </div>
          <button onClick={toggleDrawer} className="text-3xl font-semibold hover:text-[#FBD3AF] transition">
            ☰
          </button>
        </div>

        {/* Desktop Left */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavigate("/book-your-stay")}
            className="uppercase tracking-widest text-sm text-[#FBD3AF] hover:text-white transition"
          >
            Book Your Stay
          </button>
        </div>

        {/* Desktop Center */}
        <div
          className="hidden md:block text-center absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleLogoClick}
        >
          <h1 className="text-lg font-bold tracking-widest text-[#FBD3AF]">AMARTARANGINI</h1>
          <p className="text-xs tracking-wide text-gray-300">HARIDWAR</p>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          {currentUser ? (
            <div className="relative" ref={dropdownRef}>
              <div
                className="cursor-pointer hover:scale-105 transition"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <div className="w-9 h-9 bg-[#2c2c2c] border border-[#FBD3AF] rounded-full flex items-center justify-center text-xl">
                  <PersonOutlineIcon className="text-[#FBD3AF]" />
                </div>
              </div>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-60 bg-[#1a1a1a] text-white rounded-md shadow-lg py-3 z-[1001] border border-[#FBD3AF]">
                  <div className="px-4 pb-2 text-sm text-gray-300 italic">
                    👋 Hello, <span className="text-[#FBD3AF] font-medium">{currentUser?.fullName?.split(" ")[0]}</span>
                  </div>
                  <hr className="border-t border-white/10 my-2" />

                  <button
                    onClick={() => handleNavigate("/profile")}
                    className="w-full text-left px-4 py-2 hover:bg-[#2a2a2a] transition"
                  >
                    <div className="flex items-center space-x-3">
                      <AccountCircleIcon fontSize="small" className="text-[#FBD3AF]" />
                      <span className="text-sm font-medium">Profile</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigate("/my-bookings")}
                    className="w-full text-left px-4 py-2 hover:bg-[#2a2a2a] transition"
                  >
                    <div className="flex items-center space-x-3">
                      <EventNoteIcon fontSize="small" className="text-[#FBD3AF]" />
                      <span className="text-sm font-medium">My Bookings</span>
                    </div>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-[#2a2a2a] transition"
                  >
                    <div className="flex items-center space-x-3">
                      <LogoutIcon fontSize="small" className="text-[#FBD3AF]" />
                      <span className="text-sm font-medium">Logout</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="uppercase tracking-widest text-sm text-[#FBD3AF] hover:text-white transition"
            >
              Login/SignUp
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#111] text-white z-[1000] shadow-2xl transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col p-4 pt-3 h-full space-y-3 text-base">
          <div className="flex justify-end">
            <button
              onClick={toggleDrawer}
              className="text-3xl font-bold hover:text-red-400"
            >
              ×
            </button>
          </div>
          <button
            onClick={() => handleNavigate("/available-rooms")}
            className="text-left tracking-wide border-b pb-2 border-white/10 hover:pl-2 transition-all duration-200"
          >
            Book Your Stay
          </button>
          {currentUser ? (
            <>
              <button
                onClick={() => handleNavigate("/profile")}
                className="text-left tracking-wide border-b pb-2 border-white/10 hover:pl-2 transition-all duration-200"
              >
                <AccountCircleIcon className="mr-2" fontSize="small" /> Profile
              </button>
              <button
                onClick={() => handleNavigate("/my-bookings")}
                className="text-left tracking-wide border-b pb-2 border-white/10 hover:pl-2 transition-all duration-200"
              >
                <EventNoteIcon className="mr-2" fontSize="small" /> My Bookings
              </button>
              <button
                onClick={handleLogout}
                className="text-left tracking-wide border-b pb-2 border-white/10 hover:pl-2 transition-all duration-200"
              >
                <LogoutIcon className="mr-2" fontSize="small" /> Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setDrawerOpen(false);
                setShowAuthModal(true);
              }}
              className="text-left tracking-wide border-b pb-2 border-white/10 hover:pl-2 transition-all duration-200"
            >
              Login/Signup
            </button>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-[998]"
          onClick={toggleDrawer}
        />
      )}

      {/* Auth Modal */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
}

export default Navbar;
