import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Home() {

  const navigate =useNavigate();  

  function handleclick(){
      
    navigate('/Product');         

  }
  function handleStart(){
      navigate('/SignUp')
  }
  
  return (
    <>
 
      <div id="Part1">
        <div id="part1-Left">
         <i class="ri-eye-line"> OPTUM - GLASSES AND EYEWEAR</i>
          
          <h1>
            A <span>personalized</span> eyewear shopping experience
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            tempora ab voluptate minima officiis alias accusamus ea architecto,
            aliquam sint temporibus quidem, quia, autem vel?
          </p>
          <div id="buttons">
            <button id="Button1" onClick={handleStart}>Get started</button>
            <button onClick={handleclick}>See product</button>
          </div>
        </div>
        <div id="part1-right">
          <div id="part1-right-inner">
             <img src="glass.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
