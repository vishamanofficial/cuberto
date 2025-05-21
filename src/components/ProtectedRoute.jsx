// src/components/ProtectedRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) return <div className="text-center mt-10 text-white">Loading...</div>;

  if (!currentUser) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
