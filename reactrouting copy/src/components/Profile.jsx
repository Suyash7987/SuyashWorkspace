import React from 'react'
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
      Profile

      <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Profile
