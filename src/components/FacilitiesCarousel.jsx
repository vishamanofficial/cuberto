import React, { useState } from "react";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const carouselItems = [
  {
    title: "",
    image: `${baseURL}/room_images/11.jpg`,
  },
  {
    title: "",
    image: `${baseURL}/room_images/12.jpg`,
  },
  {
    title: "",
    image: `${baseURL}/room_images/13.jpg`,
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
              activeIndex === idx ? "bg-yellow-300" : "bg-gray-700"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesCarousel;
