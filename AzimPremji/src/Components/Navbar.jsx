import React, { useEffect, useState,useRef } from 'react'
import "./Navbar.css"
const Navbar = () => {

   const [dropdownArticle, setDropdownArticle] = useState(false);
  const [dropdownResources, setDropdownResources] = useState(false);
  const [dropdownLanguage, setDropdownLanguage] = useState(false);
  function handleArticleDropdown() {
    setDropdownArticle(!dropdownArticle);
    setDropdownResources(false); 
    setDropdownLanguage(false)
  }

  function handleResourcesDropdown() {
    setDropdownResources(!dropdownResources);
    setDropdownArticle(false); 
    setDropdownLanguage(false)
  }
  function handleLanguage() {
   setDropdownLanguage(!dropdownLanguage);
   setDropdownArticle(false);  
   setDropdownResources(false)
 }
  const articleRef = useRef(null);
  const resourcesRef = useRef(null);
  const LanguageRef =useRef(null);
  useEffect(() => {
   function handleClickOutside(event) {
     if (
       articleRef.current && !articleRef.current.contains(event.target) &&
       resourcesRef.current && !resourcesRef.current.contains(event.target)&&
       LanguageRef.current&& !LanguageRef.current.contains(event.target)
     ) {
       setDropdownArticle(false);
       setDropdownResources(false);
       setDropdownLanguage(false)
     }
   }

   document.addEventListener('mousedown', handleClickOutside);
   return () => {
     document.removeEventListener('mousedown', handleClickOutside);
   };
 }, []);

  return (
     <div id='NavContainerFluid' className="container-fluid ">
         <img id='topimg1' src="1.png" alt="" />
         <img id='topimg2' src="2.png" alt="" />
         <img id='topimg3' src="2.png" alt="" />

      <div className="container">
      <div className="row offset-sm-3">
         <img src="APU Logo.png" alt="" />
         <img id='Logohead' src="Vector.png" alt="" />
        </div>
        <div className="row">
        <img src="Line 3.png" id='line' alt="" />
        </div>
        <div id="mainrow">
         <div id="row1">
            <i class="ri-menu-line"></i>
            <ul>
               <li  ref={articleRef} onClick={handleArticleDropdown}>ARTICLE <span><img src="chevron-down.png" alt="" />
               {dropdownArticle? <div id='dropdown'>
                  <li>FEATURES</li>
                  <li>CLASSROOM</li>
                  <li>THE JOY OF MATHEMATICS</li>
                  <li>REVIEWS</li>
                </div>:""}
               </span> </li>
               <li  ref={resourcesRef} onClick={ handleResourcesDropdown}>RESOURCES<span><img src="chevron-down.png" alt="" /></span>
               { dropdownResources?<div id='dropdown2'>
                  <li>PULLOUTS</li>
                  <li>TEAROUR</li>
                  <li>WORKSHEET</li>
                  <li>POSTERS</li>
                </div>:""}
               </li>
               <li>MAGAZINE ISSUES </li>
               <li>ABOUT US</li>
            </ul>
         </div>
         <div id="row2">
             <button>Call for Article</button>
             <button>Subscribe for Free</button> 
             <img id='searchimg' src="search.png" />
             <li  ref={LanguageRef} onClick={handleLanguage} style={{marginBottom:"0",fontSize:"18px",listStyle:"none"}} >English <img src="chevron-down.png" alt="" />
             { dropdownLanguage?<div id='dropdown3'>
                  <ul style={{listStyle:"none"}}>
                  <li>ಕನ್ನಡ</li>
                  <li>हिन्दी</li>
                  </ul>
                </div>:""}
             </li>
           <img id='topimg4' src="top.png" alt="" />
         </div>
         </div>      
      </div>
      
     </div>
  )
}

export default Navbar