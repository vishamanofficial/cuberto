import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTripadvisor,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 pt-16 pb-8">
      {/* Top section with links */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12 text-sm">
        <div>
          <h4 className="text-lg font-medium mb-4">Book Your Stay</h4>
          <ul className="space-y-2">
            <li>Our Rooms</li>
            <li>Food & Beverage</li>
            <li>Sunset Bar</li>
            <li>Lobby Bar</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">About</h4>
          <ul className="space-y-2">
            <li>Story & History</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">Accommodations</h4>
          <ul className="space-y-2">
            <li>Superior Room</li>
            <li>Deluxe Room</li>
            <li>Signature Room</li>
            <li>Luxury Suite Room</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">Spa & Beauty</h4>
          <ul className="space-y-2">
            <li>Relax SPA</li>
            <li>Wellness</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">
            Activities Special Offers
          </h4>
          <div className="flex space-x-4 mt-2">
            <FaFacebookF className="hover:text-yellow-300 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-300 cursor-pointer" />
            <FaTripadvisor className="hover:text-yellow-300 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 pt-6 text-sm text-center flex justify-center">
        <div className="text-center">
          <h1 className="text-lg tracking-widest">AMARTARANGINI</h1>
          <p className="text-xs tracking-wide">HARIDWAR</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
