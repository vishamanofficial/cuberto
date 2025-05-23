import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { format } from "date-fns";
import toast from "react-hot-toast";

const UserBookings = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8800";
  const { currentUser } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (currentUser?._id) {
      axios
        .get(`${baseURL}/api/bookings/user/${currentUser._id}`, {
          withCredentials: true,
        })
        .then((res) => setBookings(res.data))
        .catch(() => toast.error("Failed to fetch bookings"));
    }
  }, [currentUser]);

  const renderStatusBadge = (status) => {
    const color =
      status === "Confirmed"
        ? "bg-green-600"
        : status === "Cancelled"
        ? "bg-red-600"
        : "bg-yellow-600";

    return (
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${color}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#FBD3AF]">
          My Bookings
        </h2>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">No bookings found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((b) => (
              <div
                key={b._id}
                className="bg-[#1a1a1a] border border-[#FBD3AF] p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-[#FBD3AF] mb-1">
                    {b.roomId?.title || "Room"}
                  </h3>
                  {renderStatusBadge(b.status || "Pending")}
                </div>

                <div className="space-y-1 text-sm text-gray-300">
                  <p>
                    <span className="text-[#FBD3AF] font-medium">Room No:</span>{" "}
                    {b.roomNumber || "-"}
                  </p>
                  <p>
                    <span className="text-[#FBD3AF] font-medium">Check-in:</span>{" "}
                    {format(new Date(b.startDate), "dd MMM yyyy")}
                  </p>
                  <p>
                    <span className="text-[#FBD3AF] font-medium">Check-out:</span>{" "}
                    {format(new Date(b.endDate), "dd MMM yyyy")}
                  </p>
                  <p>
                    <span className="text-[#FBD3AF] font-medium">Total:</span> ₹
                    {b.totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBookings;
