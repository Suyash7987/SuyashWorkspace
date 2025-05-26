
// import React, { useReducer, useState } from 'react';
import {Navigate } from 'react-router-dom';

function ProtectedRoute({ redirectTo , children ,userLogined}) {
  const user=localStorage.getItem("userLogined")

  return user==="true" ? children : <Navigate to={redirectTo} />;
}

export default ProtectedRoute;
