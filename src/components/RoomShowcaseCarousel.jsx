import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

const RoomShowcaseCarousel = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/rooms");
        setRooms(res.data);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="bg-black text-white py-16 px-4">
      <h2 className="text-white text-5xl md:text-6xl font-serif text-center mb-12">
        Our Rooms
      </h2>

      <div className="max-w-7xl mx-auto">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
        >
          {rooms.map((room) => (
            <SwiperSlide key={room._id}>
              <Link to={`/rooms/${room._id}`}>
                <div className="cursor-pointer bg-black border border-gray-700 p-4 rounded-lg hover:border-[#FBD3AF] transition">
                  <img
                    src={
                      room.images?.[0]
                        ? `http://localhost:8800${room.images[0]}`
                        : "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
                    }
                    alt={room.title}
                    className="w-full h-[300px] object-cover rounded-md"
                  />

                  <div className="mt-4">
                    <h3 className="text-2xl italic font-light">{room.title}</h3>

                    <p className="mt-1 text-sm tracking-wide uppercase text-gray-300">
                      {room.roomType} · {room.bedType} Bed · Max {room.maxPeople} People
                    </p>

                    <p className="mt-2 text-sm text-gray-400">
                      {room.description}
                    </p>

                    {room.amenities?.length > 0 && (
                      <p className="mt-2 text-sm text-gray-400 italic">
                        Amenities: {room.amenities.join(", ")}
                      </p>
                    )}

                    <p className="mt-2 text-3xl font-light">₹{room.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoomShowcaseCarousel;
