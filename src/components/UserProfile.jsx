import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const UserProfile = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8800";
  const { currentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: "",
    // email: "",
    phone: "",
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`${baseURL}/api/users/me`, { withCredentials: true })
        .then((res) =>
          setFormData({
            fullName: res.data.fullName,
            email: res.data.email,
            phone: res.data.phone,
          })
        )
        .catch(() => toast.error("Failed to load profile"));
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.put(
        `${baseURL}/api/users/${currentUser._id}`,
        formData,
        { withCredentials: true }
      );
      toast.success("Profile updated successfully");
      setEditMode(false);
    } catch (err) {
      const fallbackMessage = "Profile update failed";

      const message =
        err.response?.data?.message || // custom backend message
        err.response?.data?.errmsg || // MongoDB error
        err.message || // axios/fetch native error
        fallbackMessage;

      // 🧠 Smart field-specific toast
      if (message.toLowerCase().includes("email")) {
        toast.error("This email is already used");
      } else if (message.toLowerCase().includes("phone")) {
        toast.error("This phone number already exists");
      } else {
        toast.error(message);
      }
    }
  };

  return (
    <div className=" bg-black text-white p-6 pt-24">
      <div className="max-w-xl mx-auto border border-[#FBD3AF] rounded-xl p-6 shadow-md bg-black">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#FBD3AF]">
          My Profile
        </h2>

        {editMode ? (
          <>
            <div className="space-y-4">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-[#1a1a1a] text-white placeholder-gray-400 border border-[#FBD3AF] px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBD3AF]"
              />
              {/* <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-[#1a1a1a] text-white placeholder-gray-400 border border-[#FBD3AF] px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBD3AF]"
              /> */}
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full bg-[#1a1a1a] text-white placeholder-gray-400 border border-[#FBD3AF] px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBD3AF]"
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSubmit}
                className="flex-1 py-3 bg-[#FBD3AF] text-black font-semibold rounded-md hover:opacity-90 transition"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="flex-1 py-3 border border-[#FBD3AF] text-white rounded-md hover:opacity-80 transition"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4 text-lg">
              <div>
                <span className="font-semibold text-[#FBD3AF]">Full Name:</span>{" "}
                {formData.fullName || "-"}
              </div>
              <div>
                <span className="font-semibold text-[#FBD3AF]">Email:</span>{" "}
                {formData.email || "-"}
              </div>
              <div>
                <span className="font-semibold text-[#FBD3AF]">Phone:</span>{" "}
                {formData.phone || "-"}
              </div>
            </div>
            <button
              onClick={() => setEditMode(true)}
              className="w-full mt-6 py-3 bg-[#FBD3AF] text-black font-semibold rounded-md hover:opacity-90 transition"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
