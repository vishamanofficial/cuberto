import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room, date, options } = location.state || {};

  const { currentUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    breakfast: false,
    airportTransfer: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.termsAccepted) {
      alert("Please accept terms & conditions");
      return;
    }

    try {
      const totalPrice = room.price;

      const res = await axios.post(
        "http://localhost:8800/api/bookings",
        {
          roomId: room._id,
          startDate: format(date[0].startDate, "yyyy-MM-dd"),
          endDate: format(date[0].endDate, "yyyy-MM-dd"),
          totalPrice,
        },
        {
          withCredentials: true, // ✅ Only this is needed for cookie auth
        }
      );

      alert("Booking Confirmed!");
      navigate("/");
    } catch (err) {
      console.error("Booking failed", err);
      alert(
        err?.response?.data?.message || "Something went wrong during booking"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-10">
      <h2 className="text-3xl font-semibold text-center mb-6 mt-14">
        Booking Confirmation
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 space-y-2">
          {/* Summary */}
          <div className="bg-[#111] p-6 rounded-md">
            <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
            <p><strong>Room:</strong> {room.title}</p>
            <p><strong>Check-in:</strong> {format(date[0].startDate, "MMMM dd, yyyy")} from 11:00 AM</p>
            <p><strong>Check-out:</strong> {format(date[0].endDate, "MMMM dd, yyyy")} until 10:00 AM</p>
            <p><strong>Guests:</strong> {options.adult} Adults, {options.children} Children</p>
            <p className="mt-4 text-lg font-semibold text-[#FBD3AF]">
              Total Price: ₹{room.price.toLocaleString("en-IN")}
            </p>
          </div>

          {/* Guest Details */}
          <div className="bg-[#111] p-6 rounded-md">
            <h3 className="text-xl font-semibold mb-4">Guest Information</h3>
            <input name="fullName" placeholder="Full Name *" onChange={handleChange} className="w-full p-2 bg-black border border-white mb-4" />
            <input name="email" placeholder="Email *" onChange={handleChange} className="w-full p-2 bg-black border border-white mb-4" />
            <input name="phone" placeholder="Phone *" onChange={handleChange} className="w-full p-2 bg-black border border-white mb-4" />
            <input name="country" placeholder="Country *" onChange={handleChange} className="w-full p-2 bg-black border border-white mb-4" />

            <div className="mt-4 space-y-2 text-sm">
              <label><input type="checkbox" name="breakfast" onChange={handleChange} className="mr-2" /> Breakfast (₹3025/day per guest)</label>
              <label><input type="checkbox" name="airportTransfer" onChange={handleChange} className="mr-2" /> Airport Transfer (₹7757 once)</label>
              <label className="block mt-2"><input type="checkbox" name="termsAccepted" onChange={handleChange} className="mr-2" /> I accept terms & conditions *</label>
            </div>

            <button onClick={handleSubmit} className="mt-6 bg-[#FBD3AF] text-black px-6 py-2 rounded hover:bg-[#e5bb92] transition">
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-[#111] p-4 rounded-md border border-white/10 h-fit sticky top-8">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Questions about booking?</h3>
            <p className="text-sm">Tel: +44 345 3456</p>
            <p className="text-sm">Fax: +44 345 34567</p>
            <p className="text-sm break-all">reservations@hoteller.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Our Address</h3>
            <p className="text-sm">Hoteller Resort</p>
            <p className="text-sm">38701 Ukraine</p>
            <p className="text-sm">Poltava Region, Sosnivka village</p>
            <p className="text-sm">Sosnova Street, 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
