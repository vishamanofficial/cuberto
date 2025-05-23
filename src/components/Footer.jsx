import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTripadvisor,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileContract,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 pt-16 pb-8">
      {/* Top section with links */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12 text-sm">
        {/* Book Your Stay */}
        <div>
          <h4 className="text-lg font-medium mb-4">Book Your Stay</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/our-rooms" className="hover:text-yellow-300">Our Rooms</Link>
            </li>
            <li>
              <Link to="/restaurant" className="hover:text-yellow-300">Food & Beverage</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-medium mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-300" />
              <span>+91 1234567890</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-300" />
              <span>+91 0987654321</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-300" />
              <span>amtg@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Terms and Policies */}
        <div>
          <h4 className="text-lg font-medium mb-4">Terms & Policies</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaFileContract className="text-yellow-300" />
              <Link to="/terms" className="hover:text-yellow-300">Terms & Conditions</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaFileContract className="text-yellow-300" />
              <Link to="/privacy-policy" className="hover:text-yellow-300">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-medium mb-4">Our Address</h4>
          <ul className="space-y-2">
            <li>
                Amartarangini Hotel, Shanti Kunj Road, Opp. Patanjali Yogpeeth, Haridwar, Uttarakhand - 249411, India
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Amartarangini+Hotel,+Haridwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:underline"
              >
                View on Google Maps
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-medium mb-4">Follow us on</h4>
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
