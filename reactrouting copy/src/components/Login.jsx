import React, { useState } from "react";
import "./Login.css";
import { UserCred } from "./Usernames.js";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Login({ setUserLogined }) {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSignup() {
    navigate("/Signup");
  }
  function handleLogin() {
    if (UserName === UserCred.Name && Password === UserCred.password) {
      localStorage.setItem("userLogined", "true");
      setUserLogined(true);
      navigate("/Profile");
    }
  }

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
      <div id="Loginpage">
        <div id="Login">
          <div id="upperlogin">
            <h1>WELCOME BACK..!!</h1>
          </div>
          <div id="Login-Left">
            <img src="Loginbgc2.jpg" alt="" />
          </div>
          <div id="Login-Right">
            <h1>Login</h1>
            <h4> Welcome , Please Login to your account</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("UserName", {
                  required: "*UserName Required ",
                })}
                pattern="[A-Za-z ]{3,30}"
                type="text"
                placeholder="UserName"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                title="Should only contains Letter(A-Z,a-Z) and Spaces"
              />
              <br />
              <br />
              {errors.UserName && (
                <p
                  style={{
                    position: "absolute",
                    marginTop: "-3.5%",
                    marginLeft: "45px",

                    color: "red",
                  }}
                >
                  {errors.UserName.message}
                </p>
              )}
              <input
                {...register("PassWord", {
                  required: "Password Required ",
                })}
                type="password"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                title="Should only contains Letter(A-Z,a-Z) and Spaces"
              />
              <br />
              <br />
              {errors.PassWord && (
                <p
                  style={{
                    position: "absolute",
                    marginTop: "-3.5%",
                    marginLeft: "45px",
                    color: "red",
                  }}
                >
                  {errors.PassWord.message}
                </p>
              )}
              <button onClick={handleLogin}>Submit</button>
              <br />
              <br />
              <button onClick={handleSignup}>Sign up</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
