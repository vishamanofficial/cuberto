import React, { useEffect, useState, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { AuthContext } from "../../context/AuthContext.jsx";
import AuthModal from "../../components/AuthModal";
import toast, { Toaster } from "react-hot-toast";

const isRoomAvailable = (room, startDate, endDate) => {
  return room.roomNumbers.some((roomNumber) =>
    roomNumber.unavailableDates.every(
      (date) =>
        new Date(date) < new Date(startDate) ||
        new Date(date) > new Date(endDate)
    )
  );
};

const AvailableRooms = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarRef = useRef();
  const { currentUser } = useContext(AuthContext);
  const { date: initialDate, options: initialOptions } = location.state || {};

  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [date, setDate] = useState(initialDate);
  const [options, setOptions] = useState(initialOptions);
  const [openDate, setOpenDate] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:8800/api/rooms");
        setRooms(res.data);
      } catch (err) {
        toast.error("Failed to load rooms");
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    if (!rooms.length || !date) return;

    const startDate = date[0].startDate;
    const endDate = date[0].endDate;

    const filtered = rooms.filter((room) => {
      const availableRoomCount = room.roomNumbers.filter((roomNum) => {
        return roomNum.unavailableDates.every((d) => {
          const dTime = new Date(d).getTime();
          return dTime < new Date(startDate).getTime() || dTime > new Date(endDate).getTime();
        });
      }).length;

      const roomsRequired = Math.ceil(options.adult / room.maxPeople);

      return (
        room.isAvailable &&
        availableRoomCount >= roomsRequired
      );
    });

    setFilteredRooms(filtered);
  }, [rooms, date, options]);

  const handleBookNow = async (room) => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8800/api/bookings/check-availability", {
        roomId: room._id,
        startDate: date[0].startDate,
        endDate: date[0].endDate,
      });

      if (!res.data.available) {
        toast.error("Room is no longer available for selected dates");
        return;
      }

      const calculatedRooms = Math.ceil(options.adult / room.maxPeople);
      navigate("/booking-confirmation", {
        state: {
          room,
          date,
          options: {
            ...options,
            rooms: calculatedRooms,
          },
        },
      });
    } catch (err) {
      toast.error("Availability check failed");
    }
  };

  const handleSearch = () => {
    if (options.adult < 1 || options.adult > 10) {
      toast.error("Please select between 1 to 10 adults");
      return;
    }

    const startDate = date[0].startDate;
    const endDate = date[0].endDate;

    const filtered = rooms.filter((room) => {
      const availableRoomCount = room.roomNumbers.filter((roomNum) => {
        return roomNum.unavailableDates.every((d) => {
          const dTime = new Date(d).getTime();
          return dTime < new Date(startDate).getTime() || dTime > new Date(endDate).getTime();
        });
      }).length;

      const roomsRequired = Math.ceil(options.adult / room.maxPeople);

      return (
        room.isAvailable &&
        availableRoomCount >= roomsRequired
      );
    });

    setFilteredRooms(filtered);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-8">
      <Toaster position="top-right" />
      <h2 className="text-3xl font-semibold text-center mb-6 mt-14">
        Search Results
      </h2>
      <p className="text-center text-white/70 mb-10">
        {filteredRooms.length} accommodations found from {" "}
        <strong>{format(date[0].startDate, "MMMM dd, yyyy")}</strong> till {" "}
        <strong>{format(date[0].endDate, "MMMM dd, yyyy")}</strong>
      </p>

      {loading ? (
        <p className="text-center">Loading rooms...</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3 space-y-16">
            {filteredRooms.map((room) => {
              const requiredRooms = Math.ceil(options.adult / room.maxPeople);
              const availableRoomCount = room.roomNumbers.filter((roomNum) =>
                roomNum.unavailableDates.every((d) => {
                  const dTime = new Date(d).getTime();
                  return dTime < new Date(date[0].startDate).getTime() || dTime > new Date(date[0].endDate).getTime();
                })
              ).length;

              const isBookable = availableRoomCount >= requiredRooms;

              return (
                <div
                  key={room._id}
                  className={`border p-6 rounded-md bg-[#0d0d0d] shadow-md border-white/20 ${!isBookable ? "opacity-50 pointer-events-none" : ""}`}
                >
                  <img
                    src={
                      room.images?.[0]
                        ? `http://localhost:8800${room.images[0]}`
                        : "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
                    }
                    alt={room.title}
                    className="w-full h-[300px] object-cover rounded-md"
                  />

                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold">{room.title}</h3>
                    <p className="text-white/70 mt-2">{room.description}</p>

                    <ul className="mt-4 text-sm text-white/80 space-y-1 list-disc list-inside">
                      <li>Max Guests: {room.maxPeople}</li>
                      <li>Bed Type: {room.bedType || "N/A"}</li>
                      <li>Amenities: {room.amenities?.join(", ") || "Not specified"}</li>
                      <li>Rooms Needed: {requiredRooms}</li>
                      {!isBookable && <li className="text-red-500">Not enough availability</li>}
                    </ul>

                    <p className="mt-4 text-lg text-[#FBD3AF] font-semibold">
                      ₹{room.price.toLocaleString("en-IN")} per night
                    </p>

                    <button
                      onClick={() => handleBookNow(room)}
                      className="mt-6 bg-[#FBD3AF] text-black px-6 py-2 rounded hover:bg-[#e5bb92] transition"
                    >
                      Book
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="bg-[#111] p-4 rounded-md border border-white/10 h-fit sticky top-8"
            ref={sidebarRef}
          >
            <h3 className="text-lg font-semibold mb-4">Modify Your Search</h3>

            <div>
              <label className="block mb-1">Date Range</label>
              <div
                className="border px-3 py-2 bg-black text-white"
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </div>
              {openDate && (
                <div className="mt-2">
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                  />
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="block mb-1">Adults</label>
              <select
                className="bg-black text-white border px-2 py-1 w-full"
                value={options.adult}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, adult: +e.target.value }))
                }
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSearch}
              className="mt-6 w-full bg-white text-black py-2 font-semibold hover:bg-gray-200 transition"
            >
              Search Again
            </button>
          </div>
        </div>
      )}

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  );
};

export default AvailableRooms;
