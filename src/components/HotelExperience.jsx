import React from "react";

const HotelExperience = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  return (
    <section className="bg-[#fbd3af] font-serif px-8 py-16 md:px-24 text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div>
          <p className="uppercase text-xs tracking-widest mb-2">
            A great adventure begins here
          </p>
          <h1 className="text-5xl font-light italic leading-tight mb-6">
            We strive only <br />
            <span className="font-bold not-italic">for the best!</span>
          </h1>
          <p className="text-sm font-sans leading-relaxed max-w-md">
            Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
            readymade swag. Selfies iPhone Kickstarter, drinking vinegar
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

      {/* Second Row */}
      <div className="mt-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Bottom Left Image */}
        <div>
          <img
            src={`${baseURL}/room_images/03.jpg`}
            alt="Table setup"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* List and Chef Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
          {/* Text List */}
          <ul className="text-xl space-y-4">
            <li>Food & Beverage</li>
            <li>Lobby Bar</li>
            <li>Dinning Experience</li>
            <li>Sunset Bar</li>
          </ul>

          {/* Chef Image */}
          <img
            src={`${baseURL}/room_images/04.jpg`}
            alt="Chef"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HotelExperience;
