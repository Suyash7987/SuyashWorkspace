import React, { useEffect, useState } from 'react'
import Login from './Login';
import "./Loading.css";
function Loading({userLogined,setUserLogined,handleLoginSuccess}) {
   const [isLoading, setisLoading] = useState(true)
  
   function Loader(){ 
    useEffect(() => {
      const timer = setTimeout(() => {
        setisLoading(false);
      }, 500);
      return () => clearTimeout(timer); // Cleanup function
    }, []);
    
       return(
       <div style={{
            height:"950px",
            width:"100%",
            // backgroundColor:"rgba(0, 0, 0, 0.64)",
            position:"absolute",
            padding:"280px"
       }}>
         <div id="loader"
          style={{
             fontSize:"40px",
             marginLeft:"38%",
          }}
         >
            <h4>Loading...</h4>
         </div>
       </div> 
     )
   } 
   
   return (
    <>
      {isLoading?<Loader/> :
        <Login userLogined={userLogined} setUserLogined={setUserLogined} handleLoginSuccess={handleLoginSuccess} /> 
      }
    </>
  )
}

export default Loading