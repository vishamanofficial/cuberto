import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import WifiIcon from "@mui/icons-material/Wifi";
import HotelIcon from "@mui/icons-material/Hotel";
import TvIcon from "@mui/icons-material/Tv";
import ShowerIcon from "@mui/icons-material/Shower";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LandscapeIcon from "@mui/icons-material/Landscape";
import { useNavigate } from "react-router-dom";


const RoomDetails = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/rooms/${id}`);
        setRoom(res.data);
      } catch (err) {
        console.error("Failed to fetch room details", err);
      }
    };

    fetchRoom();
  }, [id]);

  if (!room) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div
        className="h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: `url(http://localhost:8800${room.images?.[0]})`,
        }}
      >
        <p className="text-white tracking-wide uppercase text-sm md:text-base">
          DESIGNED FOR NATURAL LIVING
        </p>
        <h1 className="text-5xl md:text-6xl font-serif italic text-[#FBD3AF] mt-4">
          {room.title}
        </h1>
        <p className="mt-4 text-white text-sm">
          Average area: 30 m² &nbsp;&nbsp; Guests: 2 adults 1 child
        </p>
      </div>

      {/* Description Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto py-20 px-6 md:px-10">
        {/* Image left */}
        <div>
          <img
            src={
              room.images?.[1]
                ? `http://localhost:8800${room.images[1]}`
                : "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
            }
            alt="Room Detail"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Text right (centered vertically) */}
        <div className="flex items-center h-full">
          <div className="space-y-5">
            <p className="text-lg leading-7 text-gray-300 font-light">
              {room.description ||
                "Experience a luxurious stay with exquisite comfort and modern style. Each room is designed to offer you peace and elegance in the heart of Haridwar."}
            </p>

            <p className="text-base leading-6 text-gray-400">
              Whether you're here for a spiritual retreat or a weekend escape,
              our rooms promise serene ambiance, plush bedding, and tasteful
              decor that reflects timeless charm.
            </p>

            <p className="text-base leading-6 text-gray-400">
              Every room features{" "}
              <span className="text-[#FBD3AF] font-medium">
                high-speed Wi-Fi
              </span>
              ,{" "}
              <span className="text-[#FBD3AF] font-medium">
                climate control
              </span>
              , and round-the-clock{" "}
              <span className="text-[#FBD3AF] font-medium">room service</span>{" "}
              to ensure a comfortable and connected stay.
            </p>

            <p className="text-base leading-6 text-gray-400">
              Located near the sacred{" "}
              <span className="italic">Ganga Ghats</span> and{" "}
              <span className="italic">Har Ki Pauri</span>, Amartarangini offers
              you the perfect balance of tranquility and convenience.
            </p>

            <button
            onClick={() => handleNavigate("/book-your-stay")}
            className="italic text-[#FBD3AF] cursor-pointer underline tracking-widest text-sm hover:text-white transition"
          >
            Book Your Stay
          </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black py-14 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10 text-center">
          <div className="text-[#FBD3AF]">
            <ApartmentIcon fontSize="large" />
            <p className="text-sm mt-2 text-white">30 m²</p>
          </div>
          <div className="text-[#FBD3AF]">
            <HotelIcon fontSize="large" />
            <p className="text-sm mt-2 text-white">
              {room.bedType || "1 Double Bed"}
            </p>
          </div>
          <div className="text-[#FBD3AF]">
            <LandscapeIcon fontSize="large" />
            <p className="text-sm mt-2 text-white">City View</p>
          </div>
          <div className="text-[#FBD3AF]">
            <ShowerIcon fontSize="large" />
            <p className="text-sm mt-2 text-white">Rain Shower</p>
          </div>
          <div className="text-[#FBD3AF]">
            <TvIcon fontSize="large" />
            <p className="text-sm mt-2 text-white">TV + VOD</p>
          </div>
          <div className="text-[#FBD3AF]">
            <WifiIcon fontSize="large" />
            <p className="text-sm mt-2 text-white">WiFi</p>
          </div>
        </div>
      </div>

      {/* Optional gallery */}
      {room.images?.length > 2 && (
        <div className="max-w-6xl mx-auto py-12 px-6">
          <Swiper
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
          >
            {room.images.slice(2).map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={`http://localhost:8800${img}`}
                  alt={`room gallery ${idx}`}
                  className="w-full h-[250px] object-cover rounded-lg shadow"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
