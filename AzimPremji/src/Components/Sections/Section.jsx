import React, { useEffect } from "react";
import "../Part1.css";
import Info from "./Info";
import "../Section.css";

function Section({ data, showsidebar = true, colors, img, col, className = "", style = {}, id,h1 }) {
    console.log(data)  
  return (
    <div
    id="part1container"
    className={`container-fluid py-6`}
    style={{ backgroundColor: `${colors}` }}
  >
     {img&& (  <img className="d-none d-md-block" style={{width:"100%" , position:"absolute",left:"0",top:"0"}} src="./ResourcePageImg/lines-top.png"/>)}
     {img&& (   <img  className="d-block d-md-none" style={{width:"100%" , position:"absolute",left:"0",top:"0"}} src="/linetopsmall.png" />)}

      <div 
      id={id}
      className={`container ${className} `}
       
       >
        {img&& <img src="./ResourcePageImg/icons-13.png" alt="" />}
        <h5 style={{fontSize:"24px",letterSpacing:"5px"}} className="text-uppercase fw-bold mb-4">{h1}</h5>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-8">
          <Info data={data.box1}/>            
            <div className="row">
              <div className="col-md-6">
                <Info data={data.box2}/>
              </div>

              <div className="col-md-6">
               <Info data={data.box3}/>
              </div>
            </div>
          </div>

        
  
  <div className="col-md-4">
    {/* Editor's Note */}
   {showsidebar && (<div
      id="Editor"
      className="card mb-3 p-3"
      style={{ backgroundColor: "#9DCDE7" }}
    >
      <h6 className="text-uppercase text-primary">From the Editor</h6>
      <p className="mb-1">
        <strong>The Beauty of Mathematical Exploration</strong>
      </p>
      <p>
        Mathematics is a language of patterns, logic, and discovery. In
        this issue, we explore hands-on learning, engaging fraction
        activities, and the elegance of symmetric polygons—offering fresh
        insights into mathematical thinking.
      </p>
      <a href="#" className="text-decoration-underline">
        READ MORE
      </a>
    </div>)}
    {/* Announcement */}

    {showsidebar && (<div
      className="card mb-3 p-3"
      style={{
        backgroundColor: "#BE71431A",
        gap: "20px",
      }}
    >
      <span id="AnounceSpan" className="badge mb-2">
        ANNOUNCEMENT
      </span>
      <strong style={{ fontSize: "1.25rem" }}>
        5th National Conference of MTA(I)
      </strong>
      <p className="mb-0">
        Jointly organized with Azim Premji University, Bangalore, will be
        held from 9th to 11th May 2025
      </p>
    </div>)}

    {/* Small Articles */}
    {data.cards.map((item, index) => (
      <div className="card mb-5" key={index}>
        <div className="row g-0">
          <div className="col-md-4 ">
            <img
              id="Img4"
              className="d-none d-md-block"
              src={item.img}
              alt="Small"
            />
            <img
              id="Img4"
              className="d-block d-md-none"
              src={item.img}
              alt="Small"
            />
          </div>
          <div className="col-8">
            <div className="card-body p-2">
              <span
                className="badge"
                style={{
                  backgroundColor: item.backgroundColor || "#198754",
                  color: item.color || "#fff",
                  letterSpacing: "2px",
                }}
              >
                {item.span}
              </span>
              <h6 className="card-title mb-0">{item.title}</h6>
              <small className="text-muted">{item.title2}</small>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>


        </div>

        {/* All Articles Button */}
        <div className="row mt-4">
          <div className="col text-center">
            <button id="resourcebtn" className="btn btn-dark" style={{marginBottom:"150px"}}>
              ALL ARTICLE <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
      
      <img className="d-none d-md-block" style={{width:"100%" , position:"absolute",left:"0",top:"96%"}} src="./lines-bottom.png" alt="" />
      <img className="d-block d-md-none" style={{width:"100%",position:"absolute",left:"0",top:"98.7%"}} src="./lines-bottomsmall.png" alt="" />
    </div>
  );
}

export default Section;
