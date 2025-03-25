import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

function Profile({userLogined,setUserLogined}) {
   
     const navigate =useNavigate();
    function handleLogout(){
         localStorage.removeItem("userLogined");
           setUserLogined(false)
           navigate('/Login');
    }
  return (
    <div>    
    <button id ="logout"onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile