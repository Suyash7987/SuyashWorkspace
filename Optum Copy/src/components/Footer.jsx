import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  function handleinsta(){
    window.open("https://www.instagram.com/accounts/login/?ref=vintages", "_blank")
  }
  function handleyoutube(){
    window.open("https://www.youtube.com/watch?v=fW_0BKwJNBU", "_blank")
  }
  function handlefacebook(){
    window.open("https://www.facebook.com/", "_blank")
  }
  function handleMap() {
    const locationUrl = "https://maps.app.goo.gl/2pU8X8ajrFHeaxBB8"; 
    window.open(locationUrl, "_blank");
  }
  function handleCall() {
    const phoneNumber = "tel:+917987185536";
    window.location.href = phoneNumber; 
  }
  return (
    <>
      <div className="maincontent5">
        <div id="main5in2">
          <h2>OPTUM</h2>
          <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non dolores ipsum autem ut? Obcaecati, amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus id, soluta laudantium velit magnam quidem unde molestiae </h4>
         <div id="main5in2-ic">
         <i onClick={handleinsta} class="ri-instagram-line"></i>
          <i onClick={handleyoutube} class="ri-youtube-line"></i>
          <i onClick={handlefacebook} class="ri-facebook-circle-line"></i>
         </div>
        </div>
        <div id="main5in3">
          <h2>Responsibility</h2>
          <h4>Learn More</h4>
          <h4>Diversity</h4>
          <h4>Community</h4>
          <h4>Ethical Sourcing</h4>
          <h4>Enviromental Stewardship</h4>
        </div>
        <div id="main5in4">
          <h2>Quick Links</h2>
          <h4>Privacy policy</h4>
          <h4>FAQs</h4>
          <h4>Terms and Conditions</h4>
          <h4>Customer service</h4>
          <h4>Delievery</h4>
          <h4>Season's Gifting</h4>
        </div>
        <div id="main5in5">
          <h2>Contact us</h2>
          <div id="main5in5in">
          <i style={{cursor:"pointer"}} onClick={handleMap} class="ri-map-pin-line"></i>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, totam.</p>
           <i style={{cursor:"pointer"}} onClick={handleCall} class="ri-phone-line"></i>
           <p>7987185536</p>
           <p>9179472066</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
