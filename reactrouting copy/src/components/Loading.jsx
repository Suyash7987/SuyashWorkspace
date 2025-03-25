import React, { useState } from 'react'
import Login from './Login';
function Loading({userLogined,setUserLogined}) {
   const [Loading, setLoading] = useState(true)
  
   function Loader(){ 
       setTimeout(() => {
         setLoading(false)
       }, 500);
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
      {Loading?<Loader/> :
        <Login setUserLogined={setUserLogined} /> 
      }
    </>
  )
}

export default Loading