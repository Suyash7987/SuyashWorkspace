import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login({userLogined ,handleLoginSuccess ,setUserLogined}) {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Eye, setEye] = useState(true);
  const [isSignup, setIsSignup] = useState(false); 
  const navigate = useNavigate();

  const auth = getAuth(app); // Firebase authentication instance

  function handleSignup() {
    setIsSignup(true); // Switch to signup view
  }

  // Handle login using Firebase authentication
  async function handleLogin() {
    try {
      if (UserName === "" || Password === "") {
        alert("Please Enter Email or Password");
        return;
      }
      const userCredential = await signInWithEmailAndPassword(auth, UserName, Password);
      localStorage.setItem("userLogined", "true");
      // handleLoginSuccess();
      setUserLogined("true");
      console.log("UserLogined",userLogined)
      reset(); 
      setUserName("")
      setPassword("")
      
      navigate("/Profile");
    } catch (error) {
      alert("Invalid Email or Password");
    }
    // handleLoginSuccess();
    // reset(); 
    // setUserName("")
    // setPassword("")
  }

  // Handle signup using Firebase authentication
  async function handleSubmitSignup() {
    if (Password !== ConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, UserName, Password);
      console.log("Signup successful", userCredential.user);
      setIsSignup(false); // Go back to login after successful signup
      navigate("/Login"); // Redirect to the Login page after signup
    } catch (error) {
      console.log("Error signing up:", error.message);
      alert("Error signing up: " + error.message)
    }
  }

  function eyeHover() {
    setEye(!Eye);
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log("Submitting the Form...", data);
    reset(); 
    setUserName("")
    setPassword("")
  }

  return (
    <>
      <div id="Loginpage">
        <div id="Login">
          <div id="Login-Left">
            <div id="Login-Left-Upper">
              <i
                onMouseEnter={eyeHover}
                onMouseOut={eyeHover}
                className={Eye ? "ri-eye-close-fill" : "ri-eye-line"}
              ></i>
            </div>
            <div id="Login-Left-Lower">
              <h1>
                The <span>Trend</span> is Waiting for you
              </h1>
              <p>*Login and avail the best eyewear at the best discount</p>
            </div>
          </div>
          <div id="Login-Right">
            <h1>{isSignup ? "Sign Up" : "Login"}</h1>
            <h4>{isSignup ? "Create a new account" : "Please Login to your account"}</h4>

            <form onSubmit={handleSubmit(isSignup ? handleSubmitSignup : onSubmit)}>
              <div id="Login1">
                <input
                  {...register("UserName", {
                    required: "*Email Required ",
                  })}
                  type="email"
                  placeholder="Email"
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                {errors.UserName && <p>{errors.UserName.message}</p>}
              </div>

              <div id="Login2">
                <input
                  {...register("PassWord", {
                    required: "*Password Required ",
                  })}
                  type="password"
                  placeholder="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.PassWord && <p>{errors.PassWord.message}</p>}
              </div>

              {isSignup && (
                <div id="ConfirmPassword">
                  <input
                    {...register("ConfirmPassword", {
                      required: "*Confirm Password Required ",
                    })}
                    type={Eye ? "password" : "text"}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.ConfirmPassword && <p>{errors.ConfirmPassword.message}</p>}
                </div>
              )}
            
              {isSignup?<button type="submit">
                {isSignup ? "Sign Up" : "Login"}
              </button>:
              <button onClick={handleLogin} type="submit">
               Login
            </button>}
              <br />
              <a onClick={isSignup ? () => setIsSignup(false) : handleSignup}>
                {isSignup ? "Already have an account? " : "Don't have an account? "}
                <span style={{ color: '#2795F6' }}>{isSignup ? "Login" : "Sign up"}</span>
              </a>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
