import React, { useState } from 'react'
import Login from './Login';
function Loading() {
   const [Loading, setLoading] = useState(true)
  
   function Loader(){ 
       setTimeout(() => {
         setLoading(false)
       }, 1000);
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
            <h4>Redirecting...</h4>
         </div>
       </div> 
     )
   } 
   
   return (
    <>
      {Loading?<Loader/> :
        <Login/> 
      }
    </>
  )
}

export default Loading