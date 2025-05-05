import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext.jsx";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { setCurrentUser } = useContext(AuthContext);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const url = isLogin
      ? "http://localhost:8800/api/auth/login"
      : "http://localhost:8800/api/auth/register";

    try {
      const res = await axios.post(url, formData, { withCredentials: true });

      if (isLogin) {
        // After login, fetch user details and update context
        const userRes = await axios.get("http://localhost:8800/api/users/me", {
          withCredentials: true,
        });
        console.log("🔐 Logged in user:", userRes.data);
        setCurrentUser(userRes.data);
      }

      alert(isLogin ? "Login successful" : "Registered successfully");
      onClose();
    } catch (err) {
      console.error("❌ Auth error:", err);
      alert(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[2000] flex items-center justify-center">
      <div className="bg-white text-black p-6 rounded-md w-[90%] max-w-md relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Username */}
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full border px-3 py-2 mb-3"
        />

        {/* Email (only for sign up) */}
        {!isLogin && (
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border px-3 py-2 mb-3"
          />
        )}

        {/* Password */}
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          className="w-full border px-3 py-2 mb-4"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {/* Toggle Mode */}
        <p className="text-sm mt-4 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={toggleMode}
            className="text-blue-600 cursor-pointer underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
