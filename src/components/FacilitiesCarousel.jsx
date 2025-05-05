import React, { useState } from 'react';

const carouselItems = [
  {
    title: 'Swimming Pool',
    image: 'https://images.unsplash.com/photo-1623718649591-311775a30c43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBwb29sfGVufDB8fDB8fHww', // Replace with actual image
  },
  {
    title: 'Table Tennis',
    image: 'https://plus.unsplash.com/premium_photo-1664304787554-8191fb0832fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGUlMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D', // Replace with actual image
  },
  {
    title: 'Indoor Spa',
    image: 'https://plus.unsplash.com/premium_photo-1675744019064-55e970095927?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb29yJTIwc3BhfGVufDB8fDB8fHww', // Replace with actual image
  },
];

const FacilitiesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-black text-white py-16 flex flex-col items-center">
      <div className="flex justify-center items-center w-full max-w-5xl overflow-hidden relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {carouselItems.map((item, idx) => (
            <div key={idx} className="w-full flex-shrink-0 relative px-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover rounded-md shadow-lg"
              />
              <h2 className="absolute bottom-6 left-6 text-3xl font-light">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Dots */}
      <div className="mt-6 flex gap-4">
        {carouselItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-6 h-1 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'bg-yellow-300' : 'bg-gray-700'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesCarousel;
