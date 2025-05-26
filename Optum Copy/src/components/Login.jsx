import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "./authSlice";  // Import Redux actions

function Login() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Eye, setEye] = useState(true);
  const [isSignup, setIsSignup] = useState(false); 
  const navigate = useNavigate();
  const dispatch = useDispatch();  // Get Redux dispatch function
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get auth state

  const auth = getAuth(app); // Firebase authentication instance

  function handleSignup() {
    setIsSignup(true);
  }
  async function handleLogin() {
    try {
      if (!UserName || !Password) {
        alert("Please Enter Email or Password");
        return;
      }
      const userCredential = await signInWithEmailAndPassword(auth, UserName, Password);
      dispatch(loginSuccess(UserName)); // Update Redux store
      navigate("/Profile");
      setUserName("");
      setPassword("");
    } catch (error) {
      alert("Invalid Email or Password");
    }
  }

  // Handle logout using Redux
  const handleLogout = () => {
    dispatch(logout());
    navigate("/Login");
  };

  // Handle signup using Firebase authentication
  async function handleSubmitSignup() {
    if (Password !== ConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, UserName, Password);
      setIsSignup(false);
      navigate("/Login");
    } catch (error) {
      alert("Error signing up: " + error.message);
    }
  }

  function eyeHover() {
    setEye(!Eye);
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  return (
    <>
      <div id="Loginpage">
        <div id="Login">
          <div id="Login-Left">
            <div id="Login-Left-Upper">
              <i onMouseEnter={eyeHover} onMouseOut={eyeHover} className={Eye ? "ri-eye-close-fill" : "ri-eye-line"}></i>
            </div>
            <div id="Login-Left-Lower">
              <h1>The <span>Trend</span> is Waiting for you</h1>
              <p>*Login and avail the best eyewear at the best discount</p>
            </div>
          </div>
          <div id="Login-Right">
            <h1>{isSignup ? "Sign Up" : "Login"}</h1>
            <h4>{isSignup ? "Create a new account" : "Please Login to your account"}</h4>

            <form onSubmit={handleSubmit(isSignup ? handleSubmitSignup : handleLogin)}>
              <div id="Login1">
                <input {...register("UserName", { required: "*Email Required " })} type="email" placeholder="Email" value={UserName} onChange={(e) => setUserName(e.target.value)} />
                {errors.UserName && <p>{errors.UserName.message}</p>}
              </div>

              <div id="Login2">
                <input {...register("PassWord", { required: "*Password Required " })} type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                {errors.PassWord && <p>{errors.PassWord.message}</p>}
              </div>

              {isSignup && (
                <div id="ConfirmPassword">
                  <input {...register("ConfirmPassword", { required: "*Confirm Password Required " })} type={Eye ? "password" : "text"} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                  {errors.ConfirmPassword && <p>{errors.ConfirmPassword.message}</p>}
                </div>
              )}
              
              <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
              <a onClick={() => setIsSignup(!isSignup)}>
  {isSignup ? (
    <>
      Already have an account? <span style={{ color: "#4DB4F8" }}>Login</span>
    </>
  ) : (
    <>
      Don't have an account? <span style={{ color: "#4DB4F8"}}>Sign up</span>
    </>
  )}
</a>

            </form>

            {isAuthenticated && <button onClick={handleLogout}>Logout</button>}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
