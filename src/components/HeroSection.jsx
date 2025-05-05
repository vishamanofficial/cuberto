import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-400 mb-4">
            The finest hotel at the best price
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-snug">
            The best people to take care of{' '}
            <span className="italic font-semibold">our most valuable asset: you.</span>
          </h1>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Leather detail shoulder contrasting colour contour stunning silhouette working peplum.
            Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets
            topline stitching cropped jacket.
          </p>
          <p className="mt-6 italic font-medium text-white flex items-center gap-2">
            Get more information
            <span className="block w-12 h-px bg-white ml-2"></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
