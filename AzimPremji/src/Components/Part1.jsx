import React from "react";
import "./Part1.css";

function Part1() {
  const data = [
    {
      img: "./Image4.png",
      backgroundColor: "#C3DFC6",
      color: "#145A31",
      span: "THE JOY OF MATHEMATICS",
      title: "Fractions in Bottles!",
      img2: "./Image.png",
      title2: "by Kshama Chakravarthy | 17 Nov 2024",
    },
    {
      img: "./Image5.png",
      backgroundColor: "#F4CAB4",
      color: "#BE7143",
      span: "REVIEWS",
      img2: "./Image (1).png",
      title: "Explorations on Symmetric Polygons",
      title2: "by Kshama Chakravarthy | 17 Nov 2024",
    },
    {
      img: "./Image4.png",
      backgroundColor: "#C3E3F2",
      color: "#1D4C7C",
      span: "FEATURES",
      img2: "./Image.png",
      title: "Fractions in Bottles!",
      title2: "by Kshama Chakravarthy | 17 Nov 2024",
    },
  ];

  return (
    <div id="part1container" className="container-fluid py-4">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-8">
            <div className="card mb-4">
              <img id="Img1" src="./Image1.png" alt="Main" className="card-img-top" />
              <div className="card-body">
                <span className="badge bg-light text-dark">CLASSROOM</span>
                <h5 className="card-title mt-2">Montessori Approach...</h5>
                <p className="card-text">
                  <small className="text-muted">
                    by Kshama Chakravarthy | 17 Nov 2024
                  </small>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="card mb-3">
                  <img id="Img2" src="./Image2.png" alt="Card1" className="card-img-top" />
                  <div className="card-body">
                    <span className="badge bg-light text-dark">CLASSROOM</span>
                    <h6 className="card-title">My Pedagogical Experience...</h6>
                    <p className="card-text">
                      <small className="text-muted">
                        by Kshama Chakravarthy | 17 Nov 2024
                      </small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-3">
                  <img id="Img3" src="./Iamge3.png" alt="Card2" className="card-img-top" />
                  <div className="card-body">
                    <span className="badge bg-light text-dark">FEATURES</span>
                    <h6 className="card-title">Fun with Fractions</h6>
                    <p className="card-text">
                      <small className="text-muted">
                        by Kshama Chakravarthy | 17 Nov 2024
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-4">
            {/* Editor's Note */}
            <div
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
            </div>

            {/* Announcement */}
            <div
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
            </div>

            {/* Small Articles */}
            {data.map((item, index) => (
              <div className="card mb-3" key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      id="Img4"
                      className="d-none d-md-block"
                      src={item.img}
                      alt="Small"
                    />
                    <img
                      id="Img4"
                      className="d-block d-md-none"
                      src={item.img2}
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

        {/* Button */}
        <div className="row mt-4">
          <div className="col text-center">
            <button id="resourcebtn" className="btn btn-dark" style={{marginBottom:"150px"}}>
              ALL ARTICLE <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
  0
  );
}

export default Part1;
