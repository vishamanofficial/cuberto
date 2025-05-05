import React from "react";

const HotelExperience = () => {
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
            src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Restaurant Interior"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="mt-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Bottom Left Image */}
        <div>
          <img
            src="https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
            src="https://images.pexels.com/photos/8629088/pexels-photo-8629088.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Chef"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HotelExperience;
