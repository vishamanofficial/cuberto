import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HighlightsSection = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const highlights = [
    {
      title: "Located in the Heart of the City",
      image: `${baseURL}/room_images/08.jpg`,
      description:
        "Nestled in Haridwar’s cultural hub, Amartarangini offers a tranquil yet accessible stay experience.",
    },
    {
      title: "Elegant Dining Experiences",
      image: `${baseURL}/room_images/04.jpg`,

      description:
        "Nestled in Haridwar’s cultural hub, Amartarangini offers a tranquil yet accessible stay experience.",
    },
    {
      title: "Concierge & Hospitality",
      image: `${baseURL}/room_images/10.jpg`,

      description:
        "Nestled in Haridwar’s cultural hub, Amartarangini offers a tranquil yet accessible stay experience.",
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-6 md:px-10">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif text-[#FBD3AF] tracking-wide mb-4">
          — HIGHLIGHTS —
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto font-light text-lg">
          Discover the exceptional experiences that make your stay
          unforgettable.
        </p>
      </div>

      <div className="max-w-6xl mx-auto max-h-[400px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
        >
          {highlights.map((item, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="px-3 h-full min-h-[400px] flex">
                <div className="flex flex-col bg-[#1a1a1a] border border-[#FBD3AF] rounded-lg overflow-hidden shadow-md w-full">
                  <div className="h-[250px] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-[#FBD3AF] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 flex-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HighlightsSection;
