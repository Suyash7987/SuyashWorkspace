import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./MyNav.css"; 


function MyNavbar({userLogined,setUserLogined}) { 
    // const user =localStorage.getItem("Login") ;
    const [Hamburger, setHamburger] = useState(false)
    const navigate =useNavigate()
    // useEffect(() => {
    //   setUserLogined(localStorage.getItem("userLogined"))
    //   console.log(userLogined)
    // },[])
    
  //  console.log(userLogined)
    function handlehamburger(){
       setHamburger(!Hamburger)
       
      }
    function handlelogo(){
          navigate("/");
    }
    
  return (
    <>
      <div id="Nav">
        <div id="nav1">
          <h1 style={{cursor:"pointer"}} onClick={handlelogo}>OPTUM</h1>
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
            {userLogined==true ? <li>
              <NavLink to="/Profile"className={({isActive})=>isActive?"active-link":""}>Profile</NavLink>
            </li> :<li>
              <NavLink to="/Login"className={({isActive})=>isActive?"active-link":""}>Login</NavLink>
            </li> }         
            <li>
              <NavLink to="/Cart"className={({isActive})=>isActive?"active-link":""}><i class="ri-shopping-cart-2-line"></i></NavLink>
            </li>  
          </ul>
          {Hamburger&&
           <div id="icons">
           <div id="icon-upper">
           <i onMouseEnter={handlehamburger} onMouseOut={handlehamburger}  id="hamburger2"class="ri-menu-5-line"></i>
           </div>
           <div id="icon-lower">
           <li>
        <NavLink to="/" className={({isActive})=>isActive?"active-link":""}  >Home</NavLink>
      </li>
      <li>
        <NavLink to="/About" className={({isActive})=>isActive?"active-link":""}>About us</NavLink>
      </li>
      <li>
        <NavLink to="/Contact"className={({isActive})=>isActive?"active-link":""}>Contact</NavLink>
      </li>
      <li>
        <NavLink to="/Product"className={({isActive})=>isActive?"active-link":""}>Products</NavLink>
      </li>
      {userLogined ? <li>
        <NavLink to="/Profile"className={({isActive})=>isActive?"active-link":""}>Profile</NavLink>
      </li> :<li>
        <NavLink to="/Login"className={({isActive})=>isActive?"active-link":""}>Login</NavLink>
      </li> } 
         
           </div>
      </div>
          }
          <i onClick={handlehamburger}  id="hamburger"class="ri-menu-5-line"></i>
        </div>
      </div>
    </>
  );
}

export default MyNavbar;