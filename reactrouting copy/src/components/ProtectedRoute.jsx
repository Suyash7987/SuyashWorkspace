
// import React, { useReducer, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute({ redirectTo , children ,userLogined}) {
  // const user=localStorage.getItem("Login")
 
  return userLogined ? children : <Navigate to={redirectTo} />;
}

export default ProtectedRoute;
