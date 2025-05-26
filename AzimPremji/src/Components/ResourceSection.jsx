import React from "react";
import "./ResourcePage.css";
function ResourcesSection() {
  const data2 = [
    {
      img: "./ResourcePageImg/Image1.png",
      backgroundColor: "#EFBBC2",
      backgroundColor2:"#F8ECD8",
      color: "#912926",
      span: "TEAROUTS",
      title: "Kite Families: An investigation of Family Tree",
      title2: "by Padmapriya Shirali  |  17 Nov 2024",
    },
    {
      img: "./ResourcePageImg/Geomety.png",
      backgroundColor: "#E9C5DA",
      color: "#661C43",
      backgroundColor2:"#F8ECD8",
      span: "WORKSHEETS",
      title: "Addendum to Lessons from Proofs",
      title2: "by Shailesh Shirali |  17 Nov 2024",
    },
    {
      img: "./ResourcePageImg/Image1.png",
      backgroundColor: "#F4CAB4",
      backgroundColor2:"#F8ECD8",
       
      color: "#645043",
      span: "PULLOUTS",
      title: "Mastery of Multiplication",
      title2: "by Padmapriya Shirali  |  17 Nov 2024",
    },
    {
      img: "./ResourcePageImg/Kite.png",
      backgroundColor: "#BE71431A",
      color: "#BE7143",
      backgroundColor2:"#F8ECD8",
      
      span: "POSTERS",
      title: "Kite Family: Faciliatator notes",
      title2:  "by Shailesh Shirali |  17 Nov 2024",
    },
    {
      img: "./ResourcePageImg/Kite.png",
      backgroundColor: "#BE71431A",
      color: "#BE7143",
      backgroundColor2:"#F8ECD8",
      
      span: "POSTERS",
      title: "Kite Family: Faciliatator notes",
      title2: "by Shailesh Shirali |  17 Nov 2024",
    },
  ];
  return (
    <div
    id="ResContMain"
      className="container-fluid py-5"
      style={{ backgroundColor: "#f3e2c9" ,position:"relative"}}
    >
      <img className="d-none d-md-block" style={{width:"100%" , position:"absolute",left:"0",top:"0"}} src="./ResourcePageImg/lines-top.png"/>
      <img  className="d-block d-md-none" style={{width:"100%" , position:"absolute",left:"0",top:"0"}} src="/linetopsmall.png" />
      <div className="container" style={{marginTop:"150px"}}>
        {/* Section Title */}
        <img src="./ResourcePageImg/icons-13.png" alt="" />
        <h5 style={{fontSize:"24px",letterSpacing:"5px"}} className="text-uppercase fw-bold mb-4">RESOURCES</h5>

        {/* Main Grid */}
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            {/* First Large Card */}
            <div className="card mb-4 border-0 shadow-sm">
              <img
                style={{ height: "100%", width: "100%" }}
                src="./ResourcePageImg/Money.png"
                className="card-img-top"
                alt="Money"
              />
              <div  id="resourceleft1" className="card-body p-3" style={{backgroundColor:"#F8ECD8"}}>
                <span id="ResourceSpan" className="badge  mb-2">
                  PULLOUTS
                </span>
                <h6 className="card-title">Money</h6>
                <small className="text-muted">
                  by Padmapriya Shirali | 17 Nov 2024
                </small>
              </div>
            </div>

            {/* Two Half Cards */}
            <div className="row">
              {/* Second Card */}
              <div className="col-md-6">
                <div className="card mb-4 border-0 shadow-sm">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="./ResourcePageImg/Teaching2.png"
                    className="card-img-top"
                    alt="Mastery of Multiplication"
                  />
                  <div id="resourceleft1" className="card-body p-3"style={{backgroundColor:"#F8ECD8"}}>
                    <span id="ResourceSpan" className="badge mb-2">
                     PULLOUTS
                    </span>
                    <h6 className="card-title">Mastery of Multiplication</h6>
                    <small className="text-muted">
                      by Padmapriya Shirali | 17 Nov 2024
                    </small>
                  </div>
                </div>
              </div>

              {/* Third Card */}
              <div className="col-md-6">
                <div className="card mb-4 border-0 shadow-sm">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="./ResourcePageImg/Teaching.png"
                    className="card-img-top"
                    alt="Mastery of Multiplication"
                  />
                  <div  id="resourceleft1" className="card-body p-3"style={{backgroundColor:"#F8ECD8"}}>
                    <span className="badge  mb-2" style={{backgroundColor:"#BE71431A",padding:"0.5rem",letterSpacing:"1px",color:"#BE7143"}}>
                      POSTERS
                    </span>
                    <h6 className="card-title">
                      Kite Family: Facilitator notes
                    </h6>
                    <small className="text-muted">
                      by Math Space | 17 Nov 2024
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            {/* Small Resource Card - 1 */}
            {data2.map((item, index) => (
              <div key={index} className="card mb-3 border-0 shadow-sm" style={{}}>
                <div className="row g-0 align-items-center"style={{backgroundColor:item.backgroundColor2}}>
                  <div className="col-md-4" style={{height: "10rem"}}>
                    <img
                      src={item.img}
                      className="img-fluid rounded-start"
                      alt={item.title}
                      style={{height:"100%",width:"100%"}}
                    />
                  </div>
                  <div className="col-md-5">
                    <div className="card-body p-2" style={{width:"19rem"}}>
                      <span
                        className="badge mb-1"
                        style={{
                          backgroundColor: item.backgroundColor || "#198754",
                          color: item.color || "#fff",
                          letterSpacing: "2px",
                        }}
                      >
                        {item.span}
                      </span>
                      <h6 className="card-title mb-1" style={{fontSize:"20px"}}>{item.title}</h6>
                      <small style={{fontStyle:"italic", fontWeight:"500"}} className="text-muted">{item.title2}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Resources Button */}
        <div className="text-center mt-4">
          <button id="resourcebtn" className="btn btn-primary">
            ALL RESOURCES <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
      <img  className="d-none d-md-block" id="Linebottom" src="./ResourcePageImg/lines-bottom.png" alt="" />
       <img className="d-block d-md-none" style={{width:"100%" , position:"absolute",left:"0",top:"98.9%"}} src="/lines-bottomsmall.png"  />
    </div>
  );
}

export default ResourcesSection;
