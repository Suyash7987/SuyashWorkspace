import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import {app} from"../firebase"
import {getDatabase,ref,set} from "firebase/database"
import Footer from "./Footer";

const db =getDatabase(app)
function Contact() {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Contact, setContact] = useState("")
  const [Message, setMessage] = useState("")


  const putdata=()=>{
    set(ref(db,'users/suyash'),{
         
          name:{Name},
          Email:{Email},
          Contact:{Contact},
          Message:{Message}
          
    });

  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Submitting the Form...", data);
    reset();
  }
  return (
    <>
      <div id="ContactUpper">
        <img src="./Contact.png" alt="" />
        <div id="Contactupperheading">
          <h1>Contact us</h1>
          <p>Don’t hesitate to get in touch, we’d love to hear from you!</p>
        </div>
      </div>
      <div id="ContactMiddle"> 
        <div id="Middle-Left">
          <h2>Get in touch</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <i class="ri-map-pin-2-fill"></i>
          <p>
            904, 905, Level 9 The H Dubai Office Tower One Sheikh Zayed Road
            Dubai - UAE.
          </p>
          <i class="ri-phone-fill"></i>
          <p>7569842185</p>
          <p>9412658489</p>
        </div>
        <div id="Middle-Right">
          <h4>Share your thoughts we’d Love to listen</h4>
          <h2>Let's Talk</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div id="one">
            <input className={`form-input ${errors.Name ? "error-border" : ""}`}
              {...register("Name", {
                required: " *Name is required",
              })}
              pattern="[A-Za-z ]{3,30}"
              type="text"
              placeholder="Name"
              onChange={(e)=>setName(e.target.value)}
              title="Should only contains Letter(A-Z,a-Z) and Spaces"
            />
            {errors.Name && (
              <p>
                {errors.Name.message}
              </p>
            )}
            </div>
            <div id="two">
            <input className={`form-input ${errors.Name ? "error-border" : ""}`}
              {...register("Email", {
                required: "*Email is required",
              })}
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email"
            />
            {errors.Email && (
              <p>{errors.Email.message}</p>
            )}
            </div>
            <div id="three">
            <input className={`form-input ${errors.Name ? "error-border" : ""}`}
              {...register("Contact", {
                required: " *Contact is Required",
              
                minLength: {
                  value: 10,
                  message: "Required 10 digits ",
                },
                maxLength:{
                   value:10,
                   message:"Only 10 Digits are acceptable"
                }
              })}
              pattern="[0-9 ]{10}"
              type="text"
              onChange={(e)=>setContact(e.target.value)}
              placeholder="Contact Number"
            />
            {errors.Contact && (
              <p>
                {errors.Contact.message}
              </p>
            )}
            </div>
            <textarea {...register("Message")} placeholder="Message" onChange={(e)=>setMessage(e.target.value)}></textarea>
            <br /> <br />
            <button onClick={putdata}>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;