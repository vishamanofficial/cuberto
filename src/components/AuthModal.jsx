import React, { useState, useContext } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext.jsx";

const AuthModal = ({ onClose }) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8800";

  const [mode, setMode] = useState("login"); // login | signup | forgot
  const [signupStep, setSignupStep] = useState(1); // Step 1, 2, 3 for signup
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const { setCurrentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.password) {
      return toast.error("Please fill all fields");
    }
    try {
      await axios.post(`${baseURL}/api/auth/send-otp`, {
        contact: formData.email,
      });
      setOtpSent(true);
      setSignupStep(3);
      toast.success("OTP sent to email");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post(`${baseURL}/api/auth/verify-otp`, {
        contact: formData.email,
        otp: formData.otp,
      });
      if (res.status === 200) {
        setIsOtpVerified(true);
        toast.success("OTP verified");
        await handleRegister();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
  };

  const handleRegister = async () => {
    try {
      const { otp, ...formWithoutOtp } = formData;
      await axios.post(`${baseURL}/api/auth/register`, formWithoutOtp, {
        withCredentials: true,
      });

      const userRes = await axios.get(`${baseURL}/api/users/me`, {
        withCredentials: true,
      });

      setCurrentUser(userRes.data);
      toast.success("Signup successful");
      onClose();
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error("User already exists with this email or phone number.");
      } else {
        toast.error(err.response?.data?.message || "Signup failed");
      }
    }
  };

  const handleResetPassword = async () => {
    const { email, otp, password } = formData;
    if (!email || !otp || !password)
      return toast.error("All fields are required");

    try {
      await axios.post(`${baseURL}/api/auth/reset-password`, {
        contact: email,
        otp,
        newPassword: password,
      });

      toast.success("Password reset successful");
      setMode("login");
      resetForm();
    } catch (err) {
      toast.error(err.response?.data?.message || "Reset failed");
    }
  };

  const handleLogin = async () => {
    const { email, password } = formData;
    if (!email || !password)
      return toast.error("Please enter both email and password");

    try {
      await axios.post(`${baseURL}/api/auth/login`, { email, password }, {
        withCredentials: true,
      });

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

  const resetForm = () => {
    setFormData({ fullName: "", email: "", phone: "", password: "", otp: "" });
    setOtpSent(false);
    setIsOtpVerified(false);
    setSignupStep(1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-[2000] flex items-center justify-center">
      <Toaster position="top-right" />
      <div className="bg-black text-white rounded-2xl shadow-2xl w-[90%] max-w-md px-8 py-10 border border-[#FBD3AF] relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-4 text-[#FBD3AF] text-2xl hover:scale-110 transition"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-center mb-6 text-[#FBD3AF]">
          {mode === "login" ? "Login" : mode === "signup" ? "Sign Up" : "Reset Password"}
        </h2>

        <div className="space-y-4">
          {mode === "login" && (
            <>
              <Input name="email" placeholder="Email" onChange={handleChange} />
              <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
              <Button onClick={handleLogin} text="Login" />

              <p
                className="text-sm text-right text-[#FBD3AF] cursor-pointer hover:underline"
                onClick={() => {
                  setMode("forgot");
                  resetForm();
                }}
              >
                Forgot Password?
              </p>

              <SwitchMode
                text="Don’t have an account?"
                action="Sign Up"
                onClick={() => {
                  setMode("signup");
                  resetForm();
                }}
              />
            </>
          )}

          {mode === "signup" && (
            <>
              {signupStep === 1 && (
                <>
                  <Input name="fullName" placeholder="Full Name" onChange={handleChange} />
                  <Input name="email" placeholder="Email" onChange={handleChange} />
                  <Input name="phone" placeholder="Phone Number" onChange={handleChange} />
                  <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
                  <Button onClick={() => setSignupStep(2)} text="Next" />
                </>
              )}
              {signupStep === 2 && (
                <>
                  <p className="text-sm text-gray-300">We’ll send an OTP to <b>{formData.email}</b></p>
                  <Button onClick={handleSendOtp} text="Send OTP" />
                  <Button onClick={() => setSignupStep(1)} text="Back" />
                </>
              )}
              {signupStep === 3 && (
                <>
                  <Input name="otp" placeholder="Enter OTP" onChange={handleChange} />
                  <Button onClick={handleVerifyOtp} text="Verify OTP & Register" disabled={!otpSent} />
                  <Button onClick={() => setSignupStep(2)} text="Back" />
                </>
              )}

              <SwitchMode
                text="Already have an account?"
                action="Login"
                onClick={() => {
                  setMode("login");
                  resetForm();
                }}
              />
            </>
          )}

          {mode === "forgot" && (
            <>
              <Input name="email" placeholder="Email" onChange={handleChange} />
              <Button onClick={handleSendOtp} text="Send OTP" />
              <Input name="otp" placeholder="Enter OTP" onChange={handleChange} />
              <Input name="password" type="password" placeholder="New Password" onChange={handleChange} />
              <Button onClick={handleResetPassword} text="Reset Password" disabled={!otpSent} />

              <SwitchMode
                text="Back to"
                action="Login"
                onClick={() => {
                  setMode("login");
                  resetForm();
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Input = ({ name, placeholder, type = "text", onChange }) => (
  <input
    name={name}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    className="w-full py-3 px-4 bg-transparent text-white border border-[#FBD3AF] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FBD3AF] transition"
  />
);

const Button = ({ onClick, text, color = "#FBD3AF", disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-3 text-black font-semibold rounded-md transition ${
      disabled ? "bg-gray-600 cursor-not-allowed" : `bg-[${color}] hover:opacity-90`
    }`}
  >
    {text}
  </button>
);

const SwitchMode = ({ text, action, onClick }) => (
  <p className="text-sm mt-4 text-center text-gray-300">
    {text}{" "}
    <span
      onClick={onClick}
      className="text-[#FBD3AF] font-medium cursor-pointer hover:underline"
    >
      {action}
    </span>
  </p>
);

export default AuthModal;
