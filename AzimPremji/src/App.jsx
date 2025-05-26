import React from 'react'
import Navbar from './Components/Navbar'
// import Part1 from './Components/Part1'
import ResourcesSection from './Components/ResourceSection'
import MagazineSection from './Components/MagIssue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import OtherMagazines from './Components/OtherMag'
import CallforArticle from './Components/CallforArticle'
import Getintouch from './Components/getintouch'
import Footer from './Components/Footer'
import {  data2, data3 } from './Components/Sections/data'
import Section from './Components/Sections/Section'
function App() {
  return (
    <>
   <Navbar/>
   <Section data={data3} />
   <Section 
  data={data2} 
  showsidebar={false} 
  colors={"#F4E3C7"} 
  img={true} 
  col={true} 
  id="SecondSection"
  h1="RESOURCES"
/>
   {/* <Part1/> */}
   {/* <ResourcesSection/> */}
   <MagazineSection/>
   <OtherMagazines/>
   <CallforArticle/>
   <Getintouch/>
   <Footer/>
   </>
  )
}

export default App