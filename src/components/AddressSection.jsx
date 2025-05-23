import React from 'react';

const AddressSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      {/* Title */}
      <h2 className="text-4xl md:text-6xl text-center font-light mb-16">Address</h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Visit Us Card (Smaller) */}
        <div className="bg-[#fcd7b6] text-black p-10 w-full md:w-1/3">
          <p className="mb-6 leading-relaxed">
            Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies
            iPhone Kickstarter, drinking vinegar
          </p>
          <p className="italic text-4xl font-serif">Visit Us</p>
        </div>

        {/* Book Us Card (Larger) */}
        <div className="bg-[#fcd7b6] text-black p-10 w-full md:w-2/3">
          <p className="mb-4 text-4xl">
            Spend your <br />
            <span className="italic font-serif">holidays with us</span>
          </p>
          <p className="mb-6">
            Haridwar
          </p>
          <p className="italic font-serif underline underline-offset-4 decoration-1">
            Book your stay
          </p>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
