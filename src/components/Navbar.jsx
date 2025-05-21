import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AuthModal from "./AuthModal";

function Navbar() {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleLogoClick = () => {
    navigate("/");
    setDrawerOpen(false);
  };

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8800/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setCurrentUser(null);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <>
      <nav className="fixed z-[999] w-full px-6 py-6 md:px-10 flex items-center justify-between bg-transparent text-white">
        {/* Mobile View */}
        <div className="flex w-full justify-between md:hidden">
          <div onClick={handleLogoClick} className="cursor-pointer">
            <h1 className="text-lg tracking-widest">AMARTARANGINI</h1>
            <p className="text-xs tracking-wide">HARIDWAR</p>
          </div>
          <button onClick={toggleDrawer} className="text-3xl font-semibold">☰</button>
        </div>

        {/* Desktop Left */}
        <div className="hidden md:block">
          <button onClick={() => handleNavigate("/available-rooms")} className="uppercase tracking-widest text-sm">
            Book Your Stay
          </button>
        </div>

        {/* Desktop Center */}
        <div className="hidden md:block text-center absolute left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={handleLogoClick}>
          <h1 className="text-lg tracking-widest">AMARTARANGINI</h1>
          <p className="text-xs tracking-wide">HARIDWAR</p>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:block">
          {currentUser ? (
            <div className="flex items-center gap-4">
              <span className="text-sm">Hello, {currentUser.fullName}</span>
              <button onClick={handleLogout} className="uppercase text-sm tracking-widest">
                Logout
              </button>
            </div>
          ) : (
            <button onClick={() => setShowAuthModal(true)} className="uppercase tracking-widest text-sm">
              Login/SignUp
            </button>
          )}
        </div>
      </nav>

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#111] text-white z-[1000] shadow-2xl transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col p-6 pt-6 h-full">
          <div className="flex justify-end mb-8">
            <button onClick={toggleDrawer} className="text-3xl font-bold hover:text-red-400">×</button>
          </div>
          <button onClick={() => handleNavigate("/available-rooms")} className="text-left uppercase tracking-wide text-lg border-b pb-3 mb-6 border-white/20 hover:pl-2 transition-all duration-200">Book Your Stay</button>
          {currentUser ? (
            <>
              <p className="mb-4">Hello, {currentUser.username}</p>
              <button onClick={handleLogout} className="text-left uppercase tracking-wide text-lg border-b pb-3 border-white/20 hover:pl-2 transition-all duration-200">Logout</button>
            </>
          ) : (
            <button onClick={() => { setDrawerOpen(false); setShowAuthModal(true); }} className="text-left uppercase tracking-wide text-lg border-b pb-3 border-white/20 hover:pl-2 transition-all duration-200">
              Login/Signup
            </button>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-[998]" onClick={toggleDrawer} />
      )}

      {/* Auth Modal */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
}

export default Navbar;
