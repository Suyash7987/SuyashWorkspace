import React from "react";
import "./MagIssue.css"
const magazines = [
  {
    img: "./MagIssue/Mag1.png",
    title: "Mathematics! Love to learn it, learn to love it",
    issue: "Issue 20, November 2024",
    date: "15 Nov 2024",
  },
  {
    img: "./MagIssue/Mag2.png",
    title: "Go fly a kite - the joy of learning mathematics",
    issue: "Issue 19, July 2024",
    date: "20 June 2024",
  },
  {
    img: "./MagIssue/Mag3.png",
    title: "The Point of Mathematics",
    issue: "Issue 18, July 2024",
    date: "10 March 2024",
  },
  {
    img: "./MagIssue/Mag4.png",
    title: "Reading between the Lines",
    issue: "Issue 18, July 2024",
    date: "10 March 2024",
  },
];

function MagazineIssues() {
  return (
    <div className="container-fluid bg-white" style={{position:"relative"}}>
      <img className="d-none d-md-block" id="Maglinetop" src="lines-top.png" alt="" />
      <img className="d-block d-md-none" id="Maglinetopsmall" src="/linetopsmall.png" alt="" />
      <div id="MagContainer" className="container " >
        <img src="./MagIssue/icons-13.png" alt="" />
        <h5 className="text-uppercase fw-bold mb-4 text-left" style={{letterSpacing:"2px"}}>Magazine Issues</h5>

        {/* Grid layout for large screens */}
        <div className="d-none d-md-flex row mt-4">
          {magazines.map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div>
                <img id="MagImg" src={item.img} alt={item.title} className="img-fluid mb-2" />
                <p id="Magtitle1" className="mb-1.2">{item.title}</p>
                <p id="Magtitle2" className="text-muted small mb-0">
                  — {item.issue} • {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for small and medium screens */}
        <div
          id="magazineCarousel"
          className="carousel slide d-md-none mt-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {magazines.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="text-center px-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid mb-3"
                    id="MagImg"
                  />
                  <p id="Magtitle1">{item.title}</p>
                  <p id="Magtitle2" className="text-muted small mb-0">
                    — {item.issue} • {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#magazineCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#magazineCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        {/* All Magazines Button */}
        <div className="text-center mt-5">
          <button id="Magbutton" className="btn">
            ALL MAGAZINES <i className="ri-arrow-right-line ms-2"></i>
          </button>
        </div>
      </div>
      <img className="d-none d-md-block" style={{ position:"absolute", width:"100%",left:"0", top:"94%"}} src="/lines-bottompink (4).png" alt="" />
      <img className="d-block d-md-none" style={{ position:"absolute", width:"100%",left:"0", top:"96.8%"}} src="/lines-bottom (2).png" alt="" />
    </div>
  );
}

export default MagazineIssues;
