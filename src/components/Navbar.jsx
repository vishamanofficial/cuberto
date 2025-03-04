import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-[999] w-full px-6 py-4 md:px-10 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <div className="text-2xl md:text-[1.5vw] font-semibold">cuberto</div>

      {/* Menu Button */}
      <div className="flex justify-center items-center">
        <button
          onClick={toggleMenu}
          className="text-black text-lg focus:outline-none flex items-center gap-2"
        >
          menu
          <svg
            className="w-6 h-6 text-black mt-1 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 8h16M4 16h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[40vw] h-full bg-white shadow-lg z-[1000] flex flex-col p-10"
          >
            {/* Close Button */}
            <button onClick={toggleMenu} className="self-end text-xl font-bold">
              &times;
            </button>

            {/* Social Media Links */}
            <div className="mt-10 text-gray-600">
              <h3 className="text-sm uppercase">Social media</h3>
              <ul className="space-y-2 mt-2 text-lg">
                {[
                  "LinkedIn",
                  "Behance",
                  "Dribbble",
                  "Instagram",
                  "YouTube",
                  "Twitter",
                  "GitHub",
                ].map((item, index) => (
                  <li key={index} className="hover:text-black cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Menu */}
            <div className="mt-10 text-black">
              <h3 className="text-sm uppercase text-gray-600">Menu</h3>
              <ul className="space-y-4 mt-2 text-2xl font-light">
                {[
                  "What we do",
                  "Projects",
                  "Company",
                  "Tutorials",
                  "Contacts",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-gray-700 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-10 text-gray-600">
              <h3 className="text-sm uppercase">Get in touch</h3>
              <p className="mt-2 text-lg text-black cursor-pointer hover:text-gray-700">
                info@cuberto.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
