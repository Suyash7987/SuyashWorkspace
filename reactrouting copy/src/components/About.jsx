import React from 'react'
import './About.css'
import Footer from './Footer'
function About() {
  return (
    <>
      <div id='About'>
     <div id="AboutPart1">
       <div id="Aboutpart1-left">
        <img src="typewriter.png" alt="" />
       </div>
       <div id="Aboutpart1-right">
         <h1>Our story</h1>
         <br />
        <h3>Founded in 2010, By an ex-Microsoft 'techie' with no money but truckloads of relentless passion to make a difference in this world, Lenskart is one of the fastest growing eyewear business today. <br />
        <br />

Peyush along with his two co-founders Amit Chaudhary and Sumeet Kapahi founded 'VALYOO technologies'. The aim was to truly add 'valyoo' in customers' lives by eliminating the retailers, setting up our own high quality manufacturing and supplying directly to the consumer. With this, they not only cuts costs, but also delivered high quality standards, supported with in house robotic lens manufacturing and assembly ensuring 100% precision and top quality control.
 <br /> <br />
With a rapidly growing business reaching out to over 1,00,000 customers a month via a unique combination of a strong online business and uniquely designed physical stores, Lenskart is revolutionizing the eyewear industry.
</h3>
       </div>
     </div>

     <div id="AboutPart2">
       <div id="Aboutpart2-left">
       <h1>GREAT QUALITY</h1>
       <br />
<h3>
Made by robots <br /> <br />
  We are India's first and the only brand to use robotic technique that delivers glasses which are accurate to 3 decimal places. These machines imported from Germany, ensure perfection on all front: an automated system that allows to inspect lenses, determine the geometric center, and load the lenses for edging without the need of a finishing block.
 <br /><br />
Mind of machine
<br /><br />
Our people have zero tolerance to error and our call center aims to delight every customer, solve their problems and work on their feedbacks.</h3>
       </div>
       <div id="Aboutpart2-right">
         <img src="vecteezy_ai-robot-typing-on-ipad-isolated-on-transparent-background_51135280.png" alt="" />
       </div>
     </div>
     </div>
     <Footer/>
    </>
  )
}

export default About
