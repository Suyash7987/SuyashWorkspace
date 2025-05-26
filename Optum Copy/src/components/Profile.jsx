import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

function Profile({userLogined,setUserLogined}) {
   
     const navigate =useNavigate();

    function handleLogout() {
  localStorage.removeItem("userLogined");  // Clear storage
  setUserLogined(false);                   // Update state
  navigate('/Login');                      // Redirect to login page
}
  return (
    <div id='Profile'>
         
         <div id="div1">
             <div id="div1-1">
                <div id="circle">
                  <img  style={
                    {
                      height:"100%",
                      width:"100%",
                      objectFit:"contain"
                  }}
                  src="user.png" alt="" />
                </div>
                <h1>Welcome! John Doe</h1>
             </div>
             <div id="div2">
             <div className='profiles'>
                <label htmlFor="">First Name</label>
                <input type="text" value="John"  />
               </div>
               <div className='profiles'>
                <label htmlFor="">Last Name</label>
                <input type="text" value="Doe"  />
               </div>
               <div className='profiles'>
                <label htmlFor="">Contact</label>
                <input type="text" value="91740984212" />
               </div>
               <div className='profiles'>
                <label htmlFor="">Email</label>
                <input type="text" value="JohnDoe@gmail.com" />
               </div>
               <div className='profiles'>
                <label htmlFor="">Address</label>
                <input type="text" value="16th main street New York" />
               </div>
               <div id='btnsection'>
               <button id='Save'>Save</button>
               <button id='Update'>Update</button>             
               </div>
               
             
             </div>
         </div>
    </div>
  )
}

export default Profile