import React from "react";

const HaridwarExperienceSection = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  return (
    <div className="bg-gradient-to-br from-black via-[#0f0f0f] to-black text-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Description */}
        <div className="relative">
          {/* Accent Line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-[#FBD3AF] opacity-50 hidden md:block rounded-full" />

          <div className="pl-4 md:pl-6">
            <h2 className="text-4xl md:text-5xl font-serif text-[#FBD3AF] mb-6 tracking-wide uppercase">
              The Spirit of Haridwar
            </h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed max-w-xl">
              Step outside Amartarangini and into the sacred rhythm of Haridwar — where every breath feels closer to the divine.
              <br /><br />
              From the golden glow of Ganga Aarti at Har Ki Pauri to peaceful morning walks along the ghats, Haridwar welcomes you with timeless spirituality and soulful energy. Discover ancient temples, vibrant bazaars, and the tranquil call of the Ganges — all just moments from your stay.
            </p>
          </div>
        </div>

        {/* Right: Image Grid */}
        <div className="grid grid-cols-1 gap-4">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={`${baseURL}/room_images/08.jpg`}
              alt="Har Ki Pauri"
              className="w-full h-[320px] object-cover rounded-xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={`${baseURL}/room_images/09.jpg`}
                alt="Ganga Aarti"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={`${baseURL}/room_images/10.jpg`}
                alt="Haridwar Ghats"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaridwarExperienceSection;
