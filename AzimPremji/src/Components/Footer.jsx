import React from "react";
 
function Footer() {
  return (
    <footer style={{ backgroundColor: "#174873" ,position:"relative "}} className="text-white pt-5">
        <img className="d-none d-md-block" src="./Footer/lines-top (7).png" style={{position:"absolute", left:"0", top:"0", width:"100%"}} />
        <img className="d-block d-md-none" src="./Footer/lines-bottom (7).png" style={{position:"absolute", left:"0", top:"0", width:"100%"}} />
      <div className="container pb-4 border-bottom border-secondary" style={{marginTop:"5rem",position:"relative"}} >
        <div className="row">
        
          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase small fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>Features</li>
              <li>Classroom</li>
              <li>The Joy of Mathematics</li>
              <li>Reviews</li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase small fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>Tearouts</li>
              <li>Pullouts</li>
              <li>Worksheets</li>
              <li>Posters</li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase small fw-bold mb-3">More</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>About Us</li>
              <li>Authors</li>
              <li>Magazines Issues</li>
              <li>Magazine Guidelines</li>
              <li>Contact Us</li>
            </ul>
          </div>

          
          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase small fw-bold mb-3">Other Magazines</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>पाठशाला</li>
              <li>i wonder...</li>
            </ul>
          </div>
        </div>
        <img className="d-none d-md-block" src="./Footer/footertriangle.png" alt="" style={{position:"absolute", top:"28%",left:"100%"}} />
      </div>

      
      <div className="container py-4  mt-4">
  <div className="row align-items-center">
    {/* Left Links */}
    <div className="col-md-4 mb-3 mb-md-0 d-flex gap-3 text-white small">
      <a href="#" className="text-white text-decoration-none">Disclaimers</a>
      <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
    </div>

    {/* Center Text */}
    <div className="col-md-4 mb-3 mb-md-0 text-left text-white small">
      &copy; 2025 Azim Premji University
    </div>

    {/* Social Icons */}
    <div className="col-md-4 text-md-end d-flex justify-content-start justify-content-md-end gap-3">
      <i className="ri-youtube-fill fs-5 text-white"></i>
      <i className="ri-facebook-fill fs-5 text-white"></i>
      <i className="ri-twitter-fill fs-5 text-white"></i>
      <i className="ri-instagram-fill fs-5 text-white"></i>
      <i className="ri-linkedin-fill fs-5 text-white"></i>
    </div>
  </div>
        <img className="d-block d-md-none" src="./Footer/footertrianglemobile.png" style={{position:"absolute", top:"87%",left:"70%"}} />
</div>

    </footer>
  );
}

export default Footer;
