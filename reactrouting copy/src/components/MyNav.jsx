import React from "react";
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
              <NavLink to="/Dashboard"className={({isActive})=>isActive?"active-link":""}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/Login"className={({isActive})=>isActive?"active-link":""}>Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyNavbar;
