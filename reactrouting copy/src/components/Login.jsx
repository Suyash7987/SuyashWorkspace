import React from 'react'
import'./Login.css';
import { useForm } from "react-hook-form";
import Footer from './Footer';

function Login() {  
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
                {...register("UserName",{
                    required:"UserName Required "
                })}
                pattern="[A-Za-z ]{3,30}"
                type="text"
                placeholder="UserName"
                title="Should only contains Letter(A-Z,a-Z) and Spaces"
               />
            <br />
            <br />
            {errors.UserName && (
              <p
                style={{
                  position: "absolute",
                  marginTop: "-3.5%",
                  marginLeft:"45px",

                  color: "red",
                }}
              >
                {errors.UserName.message}
              </p>
            )}
              <input 
                {...register("PassWord",{
                    required:"Password Required "
                })}
                pattern="[A-Za-z ]{3,30}"
                type='password'
                placeholder="Password"
                title="Should only contains Letter(A-Z,a-Z) and Spaces"
               />
                 <br />
            <br />
            {errors.PassWord && (
              <p
                style={{
                  position: "absolute",
                  marginTop: "-3.5%",
                  marginLeft:"45px",
                  color: "red",
                }}
              >
                {errors.PassWord.message}
              </p>
            )}
             <input type="Submit" />
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Login
