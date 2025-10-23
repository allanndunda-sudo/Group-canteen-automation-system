import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}