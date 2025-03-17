import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// ProtectedRoute component accepts redirectTo prop for where to send unauthenticated users.
function ProtectedRoute({ redirectTo = "/Login", children }) {
  const [user, setUser] = useState(false); // Simulate authentication state (set to false as not logged in)

  // If the user is authenticated, render the protected content (children).
  // Otherwise, redirect them to the specified path (default is /Login).
  return user ? children : <Navigate to={redirectTo} />;
}

export default ProtectedRoute;
