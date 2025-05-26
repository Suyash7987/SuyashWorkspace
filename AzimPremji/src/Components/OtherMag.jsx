import React from "react";
import "./OtherMag.css";

const otherMagazines = [
  {
    title: "पाठशाला",
    subtitle: "भीतर और बाहर",
    button: "Visit पाठशाला",
    image: "./OtherMag/Cover.png",
    cardBg: "#DBDDFF",
  },
  {
    title: "i wonder...",
    subtitle: "Rediscovering School Science",
    button: "Visit i wonder...",
    image: "./OtherMag/image.png",
    cardBg: "#fef5cd",
  },
];

function OtherMagazines() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#e9dbe3", position:"relative" }}>
        <img className="d-none d-md-block"style={{position:"absolute",width:"100%",left:"0", top:"0"}} src="/lines-toppink.png" alt="" />
        <img className="d-md-none d-block" src="/lines-bottom (3).png" style={{position:"absolute",width:"100%",left:"0", top:"0"}} alt="" />
      <div className="container" style={{marginTop:"8rem"}}>
        <img src="./OtherMag/icons-13.png" alt="" />
        <h6 id="OtherMagtitle" className="text-uppercase fw-semibold small">Other Magazines From</h6>
        <h4 id="OtherMagtitle0" className="fw-bold mb-4">Azim Premji University</h4>

        {/* Grid layout for large screens */}
        <div className="row justify-content-center d-none d-lg-flex" style={{marginBottom:"8rem"}}>
          {otherMagazines.map((mag, index) => (
            <div className="col-md-4 col-sm-6 mb-1 px-5" key={index}>
              <div
                className="rounded-3 p-3 h-100 d-flex flex-column justify-content-between"
                style={{ backgroundColor: mag.cardBg ,border:"1.2px solid #DBDDFF"}}
              >
                <img
                  id="OtherMagimg"
                  src={mag.image}
                  alt={mag.title}
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: "340px", objectFit: "contain" }}
                />
                <div>
                  <p id="OtherMagtitle1" className="text-muted mb-1">{mag.subtitle}</p>
                  <h6 id="OtherMagtitle2" className="fw-bold">{mag.title}</h6>
                </div>
                <button className="btn btn-light mt-3 w-100">
                  {mag.button} <i className="ri-arrow-right-line ms-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for small and medium screens */}
        <div
          id="otherMagCarousel"
          className="carousel slide d-lg-none"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {otherMagazines.map((mag, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="rounded-3 p-3 mx-auto"
                  style={{
                    backgroundColor: mag.cardBg,
                    width: "90%",
                    maxWidth: "350px",
                  }}
                >
                  <img
                    id="OtherMagimg"
                    src={mag.image}
                    alt={mag.title}
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: "340px", objectFit: "contain" }}
                  />
                  <div>
                    <p className="text-muted mb-1">{mag.subtitle}</p>
                    <h6 id="OtherMagtitle2" className="">{mag.title}</h6>
                  </div>
                  <button className="btn btn-light mt-3 w-100">
                    {mag.button} <i className="ri-arrow-right-line ms-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#otherMagCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#otherMagCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
      <img className="d-md-block d-none" style={{width:"100%", position:"absolute", top:"92%",left:"0"}}  src="/OtherMag/lines-bottompink.png" alt="" />
    </div>
  );
}

export default OtherMagazines;
