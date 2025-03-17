import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MyNav.css"; // Import the CSS file


function MyNavbar() {
      
     
  return (
    <>
      <div id="Nav">
        <div id="nav1">
          <h1>OPTUM</h1>
        </div>
        <div id="nav2">
          <ul>
            <li>
              <NavLink to="/" className={({isActive})=>isActive?"active-link":""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/About" className={({isActive})=>isActive?"active-link":""}>About us</NavLink>
            </li>
            <li>
              <NavLink to="/Contact"className={({isActive})=>isActive?"active-link":""}>Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/Product"className={({isActive})=>isActive?"active-link":""}>Products</NavLink>
            </li>
            <li>
              <NavLink to="/Login"className={({isActive})=>isActive?"active-link":""}>Login</NavLink>
            </li>
            <li>
              <NavLink to="/SignUp" className={({isActive})=>isActive?"active-link":""}>SignUp</NavLink>
            </li>
          </ul>
          <i  id="hamburger"class="ri-menu-5-line"></i>
        </div>
      </div>
    </>
  );
}

export default MyNavbar;
