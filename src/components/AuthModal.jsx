import React, { useState, useContext } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext.jsx";

const AuthModal = ({ onClose }) => {
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const { setCurrentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async () => {
    const { fullName, email, phone, password } = formData;
    if (!fullName || !email || !phone || !password) {
      return toast.error("Please fill in all fields before requesting OTP.");
    }
    try {
      await axios.post("http://localhost:8800/api/auth/send-otp", {
        contact: email,
      });
      setOtpSent(true);
      toast.success("OTP sent to email");
    } catch (err) {
      toast.error("Failed to send OTP");
    }
  };

  const handleVerifyOtpAndRegister = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/verify-otp", {
        contact: formData.email,
        otp: formData.otp,
      });

      await axios.post("http://localhost:8800/api/auth/register", formData, {
        withCredentials: true,
      });

      // ✅ Fetch current user after registration to ensure correct _id
      const userRes = await axios.get("http://localhost:8800/api/users/me", {
        withCredentials: true,
      });
      setCurrentUser(userRes.data);
      toast.success("Signup successful");
      onClose();
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error("User already exists with this email or phone number.");
      } else {
        toast.error("OTP verification or signup failed");
      }
    }
  };

  const handleLogin = async () => {
    const { email, password } = formData;
    if (!email || !password)
      return toast.error("Please enter both email and password");

    try {
      await axios.post(
        "http://localhost:8800/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      // ✅ Always get fresh user from backend
      const userRes = await axios.get("http://localhost:8800/api/users/me", {
        withCredentials: true,
      });
      setCurrentUser(userRes.data);
      toast.success("Login successful");
      onClose();
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-[2000] flex items-center justify-center">
      <Toaster position="top-right" />
      <div className="bg-black text-white rounded-xl shadow-xl w-[90%] max-w-md px-6 py-8 relative border border-[#FBD3AF]">
        <button
          className="absolute top-3 right-4 text-[#FBD3AF] text-2xl hover:scale-110 transition"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-[#FBD3AF]">
          {mode === "login"
            ? "Login"
            : mode === "signup" && !otpSent
            ? "Sign Up"
            : "Verify OTP"}
        </h2>

        {mode === "login" && (
          <>
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full bg-transparent text-white placeholder-gray-400 border border-[#FBD3AF] px-4 py-3 mb-4 rounded-md"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full bg-transparent text-white placeholder-gray-400 border border-[#FBD3AF] px-4 py-3 mb-6 rounded-md"
            />
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-[#FBD3AF] text-black font-semibold rounded-md hover:opacity-90 transition"
            >
              Login
            </button>
            <p className="text-sm mt-4 text-center text-gray-300">
              Don’t have an account?{" "}
              <span
                onClick={() => setMode("signup")}
                className="text-[#FBD3AF] font-medium cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          </>
        )}

        {mode === "signup" && !otpSent && (
          <>
            <input
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="input"
            />
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="input"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="input"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="input"
            />
            <button
              onClick={handleSendOtp}
              className="w-full py-3 bg-[#FBD3AF] text-black font-semibold rounded-md hover:opacity-90 transition"
            >
              Send OTP
            </button>
            <p className="text-sm mt-4 text-center text-gray-300">
              Already have an account?{" "}
              <span
                onClick={() => setMode("login")}
                className="text-[#FBD3AF] font-medium cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          </>
        )}

        {mode === "signup" && otpSent && (
          <>
            <input
              name="otp"
              placeholder="Enter OTP"
              onChange={handleChange}
              className="input mt-5 mb-4"
            />
            <button
              onClick={handleVerifyOtpAndRegister}
              className="w-full py-3 bg-[#FBD3AF] text-black font-semibold rounded-md hover:opacity-90 transition"
            >
              Verify OTP & Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
