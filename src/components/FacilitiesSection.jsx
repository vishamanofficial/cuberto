import React from 'react';

const FacilitiesSection = () => {
  return (
    <section className="bg-black text-white px-8 md:px-24 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <p className="uppercase text-gray-400 tracking-widest text-sm mb-3">
            The finest hotel at the best price
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-snug">
            Our facilities are <br />
            <span className="italic font-serif">your playground.</span>
          </h1>
        </div>

        {/* Right Side */}
        <div className="text-sm md:text-base text-gray-200 space-y-2">
          <p>
            Leather detail shoulder contrasting colour contour stunning silhouette working peplum.
            Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest
            pockets topline stitching cropped jacket.
          </p>
          <p className="italic underline decoration-1 underline-offset-4 cursor-pointer hover:text-white transition duration-300">
            Get more information
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
