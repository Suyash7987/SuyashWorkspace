import React, { useState } from "react";

function Getintouch() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateEmail(email);
    setIsValidEmail(isValid);
    if (isValid) console.log("Form Submitted");
  };

  return (
    <div className ="container-fluid py-5" style={{ backgroundColor: "#f5f5f5" ,position:"relative" }}>
        <img className="d-none d-md-block" src="./getintouch/lines-top (6).png" alt="" style={{position:"absolute",left:"0",width:"100%",top:"0"}} />
        <img className="d-block d-md-none" src="./getintouch/lines-bottomget(6).png" alt="" style={{position:"absolute",left:"0",width:"100%",top:"0%"}} />

      <div className="container " style={{marginTop:"6rem"}}>
        <div className="row align-items-start">
          {/* Left Side */}
          <div className="col-md-6 mb-4">
            <h3 className="fw-bold mb-3">Get in Touch</h3>
            <p className="mb-3">
              We’re here to help! Reach out for any inquiries or support you
              need.
            </p>
            <p className="mb-2">
              Email: <a href="mailto:reach@apu.edu.in">reach@apu.edu.in</a>
            </p>
            <p className="fw-bold mb-1 mt-4">ADDRESS</p>
            <p className="mb-0">
              Burugunte Village, Survey No 66,<br />
              Bikkanahalli Main Rd, Sarjapura, Bengaluru,<br />
              Karnataka 562125
            </p>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Placeholder" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email ID</label>
                  <input
                    type="email"
                    className={`form-control ${!isValidEmail ? "is-invalid" : ""}`}
                    placeholder="Placeholder"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {!isValidEmail && (
                    <div className="text-danger small mt-1">Enter valid email id</div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" placeholder="Placeholder" />
              </div>

              <button
                className="btn btn-dark d-flex align-items-center px-4 py-2"
                type="submit"
              >
                SUBMIT <i className="ri-arrow-right-line ms-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getintouch;
