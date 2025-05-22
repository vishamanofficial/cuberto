import React from "react";
import {
  FaWifi,
  FaShuttleVan,
  FaBed,
  FaTv,
  FaSnowflake,
  FaLock,
  FaCoffee,
  FaBicycle,
} from "react-icons/fa";

const facilities = [
  { icon: <FaWifi size={32} />, label: "Wi-Fi" },
  { icon: <FaShuttleVan size={32} />, label: "Airport Transfers" },
  { icon: <FaBicycle size={32} />, label: "Bike Rentals" }, // ✅ New replacement
  { icon: <FaBed size={32} />, label: "Double Bed" },
  { icon: <FaTv size={32} />, label: "LED TV" },
  { icon: <FaSnowflake size={32} />, label: "Air Conditioner" },
  { icon: <FaLock size={32} />, label: "Electronic Safe" },
  { icon: <FaCoffee size={32} />, label: "Coffee Maker" },
];

const FacilitiesIconSection = () => {
  return (
    <div className="bg-black text-white pb-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif text-[#FBD3AF] mb-4 uppercase tracking-wide">
          Facilities
        </h2>
        <p className="text-gray-400 text-lg font-light">
          Every comfort crafted for your perfect stay in Haridwar.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {facilities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border rounded-xl border-[#FBD3AF]"
          >
            <div className="text-[#FBD3AF] mb-3">{item.icon}</div>
            <p className="text-sm md:text-base font-medium text-white">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesIconSection;
