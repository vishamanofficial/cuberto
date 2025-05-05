import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

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
  const { date, options } = location.state || {};
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [selectedRoomNumbers, setSelectedRoomNumbers] = useState({});
  const sidebarRef = useRef();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/rooms");
        setRooms(res.data);
      } catch (err) {
        console.error("Error fetching rooms:", err);
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    if (!rooms.length || !date) return;

    const startDate = date[0].startDate;
    const endDate = date[0].endDate;

    const filtered = rooms.filter((room) => {
      return (
        room.isAvailable &&
        room.maxPeople >= options.adult + options.children &&
        isRoomAvailable(room, startDate, endDate)
      );
    });

    setFilteredRooms(filtered);
  }, [rooms, date, options]);

  const handleBookNow = (room) => {
    const selectedNumber = selectedRoomNumbers[room._id];
    if (!selectedNumber) {
      alert("Please select a room number");
      return;
    }

    navigate("/booking-confirmation", {
      state: {
        room,
        date,
        options,
        roomNumber: selectedNumber,
      },
    });
  };

  const handleSearch = () => {
    navigate("/available-rooms", { state: { date, options } });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6 mt-14">
        Search Results
      </h2>
      <p className="text-center text-white/70 mb-10">
        {filteredRooms.length} accommodations found from{" "}
        <strong>{format(date[0].startDate, "MMMM dd, yyyy")}</strong> till{" "}
        <strong>{format(date[0].endDate, "MMMM dd, yyyy")}</strong>
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 space-y-16">
          {filteredRooms.map((room) => (
            <div key={room._id} className="border border-white/20 p-6 rounded-md bg-[#0d0d0d] shadow-md">
              <img
                src={
                  room.images?.[0] ||
                  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
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
                </ul>

                <p className="mt-4 text-lg text-[#FBD3AF] font-semibold">
                  ₹{room.price.toLocaleString("en-IN")} per night
                </p>

                <select
                  value={selectedRoomNumbers[room._id] || ""}
                  onChange={(e) =>
                    setSelectedRoomNumbers((prev) => ({
                      ...prev,
                      [room._id]: e.target.value,
                    }))
                  }
                  className="bg-black border border-white/30 text-white px-3 py-2 rounded mt-2"
                >
                  <option value="" disabled>
                    Select room number
                  </option>
                  {room.roomNumbers.map((roomNum) => (
                    <option key={roomNum._id} value={roomNum.number}>
                      {roomNum.number}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => handleBookNow(room)}
                  className="mt-6 bg-[#FBD3AF] text-black px-6 py-2 rounded hover:bg-[#e5bb92] transition"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111] p-4 rounded-md border border-white/10 h-fit sticky top-8" ref={sidebarRef}>
          <h3 className="text-lg font-semibold mb-6">Book Your Stay</h3>
          <div className="space-y-4 text-sm">
            <div>
              <label className="block mb-1">Check-in:</label>
              <div className="border px-3 py-2">
                {format(date[0].startDate, "dd/MM/yyyy")}
              </div>
            </div>
            <div>
              <label className="block mb-1">Check-out:</label>
              <div className="border px-3 py-2">
                {format(date[0].endDate, "dd/MM/yyyy")}
              </div>
            </div>
            <div>
              <label className="block mb-1">Adults:</label>
              <div className="border px-3 py-2">{options.adult}</div>
            </div>
            <div>
              <label className="block mb-1">Children:</label>
              <div className="border px-3 py-2">{options.children}</div>
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="mt-6 w-full bg-white text-black py-2 font-semibold hover:bg-gray-200 transition"
          >
            Search Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableRooms;
