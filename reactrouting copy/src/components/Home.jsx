import React from "react";
import "./Home.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

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
          <h1>
            A <span>personalized</span> eyewear shopping experience
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            tempora ab voluptate minima officiis alias accusamus ea architecto,
            aliquam sint temporibus quidem, quia, autem vel?
          </p>
          <div id="buttons">
            <button onClick={handleStart}>Get started</button>
            <button onClick={handleclick}>See product Demo</button>
          </div>
        </div>
        <div id="part1-right">
          <img src="glass.png" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
