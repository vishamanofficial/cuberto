import React from "react";

const DiningSection = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  return (
    <div className="bg-gradient-to-br from-black via-[#0f0f0f] to-black text-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="relative">
          {/* Vertical Accent Line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-[#FBD3AF] rounded-full opacity-50 hidden md:block" />

          <div className="pl-4 md:pl-6">
            <h2 className="text-4xl md:text-5xl font-serif text-[#FBD3AF] mb-6 tracking-wide leading-tight">
              Amartarangini Restaurant
            </h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed max-w-xl">
              Savor the authentic flavors of Haridwar with a fine dining
              experience that brings local culinary traditions to life. Each
              dish is crafted with care, offering a warm and inviting ambiance
              for a truly memorable meal in the heart of this sacred city.
            </p>
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-1 gap-4">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={`${baseURL}/room_images/05.jpg`}
              alt="Main Restaurant"
              className="w-full h-[320px] object-cover rounded-xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={`${baseURL}/room_images/06.jpg`}
                alt="Dining Area"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={`${baseURL}/room_images/07.jpg`}
                alt="Seating"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningSection;
