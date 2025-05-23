import React from "react";

const RestaurantExperience = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  return (
    <div className="text-white font-serif">
      {/* Hero Section */}
      <section className="bg-[#fbd3af] text-black px-8 pt-20 md:pt-24 pb-16 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Block */}
          <div>
            <p className="uppercase text-xs tracking-widest mb-2">
              A taste of elegance awaits
            </p>
            <h1 className="text-5xl font-light italic leading-tight mb-6">
              Dining with heart,<br />
              <span className="font-bold not-italic">crafted with soul</span>
            </h1>
            <p className="text-sm font-sans leading-relaxed max-w-md">
              Explore local flavors and global delicacies at Amartarangini Restaurant.
              From traditional Haridwar thalis to gourmet specialties, each dish is a journey
              of taste and tradition served in an atmosphere of timeless charm.
            </p>
          </div>

          {/* Top Right Image */}
          <div className="w-full">
            <img
              src={`${baseURL}/room_images/02.jpg`}
              alt="Restaurant Interior"
              className="rounded-lg shadow-lg w-full h-[70vh] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Feature Row */}
      <section className="bg-gradient-to-br from-black via-[#0f0f0f] to-black py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="pl-4 md:pl-6 relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#FBD3AF] rounded-full opacity-50 hidden md:block" />
            <h2 className="text-4xl md:text-5xl font-serif text-[#FBD3AF] mb-6 tracking-wide leading-tight">
              A Memorable Culinary Journey
            </h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed max-w-xl">
              Whether you're enjoying a quiet breakfast, a leisurely lunch, or a candlelit dinner,
              our chefs craft every dish with precision and passion. Discover seasonal menus,
              farm-fresh ingredients, and service that makes every meal special.
            </p>
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
      </section>

      {/* Final Row - Experience List */}
      <section className="bg-[#fbd3af] text-black px-8 py-20 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={`${baseURL}/room_images/03.jpg`}
              alt="Table Setup"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
            <ul className="text-xl space-y-4">
              <li>Fine Dining</li>
              <li>Sunset Bar</li>
              <li>Lobby Lounge</li>
              <li>Private Events</li>
            </ul>
            <img
              src={`${baseURL}/room_images/04.jpg`}
              alt="Chef"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantExperience;
