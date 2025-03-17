import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import Footer from "./Footer";
function Contact() {
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
          <h2>Fill out the form and we’ll listen</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className={`form-input ${errors.Name ? "error-border" : ""}`}
              {...register("Name", {
                required: "Name is required",
              })}
              pattern="[A-Za-z ]{3,30}"
              type="text"
              placeholder="Name"
              title="Should only contains Letter(A-Z,a-Z) and Spaces"
            />
            <br />
            <br />
            {errors.Name && (
              <p
                style={{
                  position: "absolute",
                  marginTop: "-2%",
                  color: "red",
                }}
              >
                {errors.Name.message}
              </p>
            )}
            <input className={`form-input ${errors.Name ? "error-border" : ""}`}
              {...register("Email", {
                required: true,
              })}
              type="email"
              placeholder="Email"
            />{" "}
            <br />
            <br />
            {errors.Email && (
              <p
                style={{
                  position: "absolute",
                  marginTop: "-2%",
                  color: "red",
                }}
              >
                Email is required
              </p>
            )}
            <input className={`form-input ${errors.Name ? "error-border" : ""}`}
              {...register("Contact", {
                required: "Contact is Required",
              
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
              placeholder="Contact Number"
            />
            <br />
            <br />
            {errors.Contact && (
              <p
                style={{
                  position: "absolute",
                  marginTop: "-2%",
                  color: "red",
                }}
              >
                {errors.Contact.message}
              </p>
            )}
            <textarea {...register("Message")} placeholder="Message"></textarea>
            <br /> <br />
            <input type="submit" style={{ width: "100px" }} />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
