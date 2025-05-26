import React from "react";
import "./CallforArticle.css";

function CallToActionCards() {
  return (
    <div  className="container my-5 cta-section"> 
      <div  id="ArticleContainer" className="row justify-content-center g-4 align-items-center">
        {/* Card 1 */}
        <div className="col-md-6">
          <div style={{position:"relative"}} className="cta-card bg-green text-center  rounded-4 ">
            <img src="./CallforArticle/lines-top (2).png" style={{width:"100%",position:"absolute",left:"0",top:"0"}} />
            <h6 className="fw-bold mb-3">STAY INFORMED</h6>
            <p id="p1" className="mb-4">
            Stay informed . Subscribe for free full site access, articles, resources and exclusive downloads
            </p>
            <button className="btn btn-primary">
              SUBSCRIBE FOR FREE <i className="ri-arrow-right-line ms-1"></i>
            </button>
            <img className="d-md-block d-none" src="./CallforArticle/lines-top (3).png" style={{width:"100%",position:"absolute",left:"0",top:"85%"}} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6">
          <div style={{position:"relative"}} className="cta-card bg-beige text-center  rounded-4 ">
          <img src="./CallforArticle/lines-top (2).png" style={{width:"100%",position:"absolute",left:"0",top:"0"}} />
            <h6 className="fw-bold mb-3">CALL FOR ARTICLES</h6>
            <p id="p2" className="mb-4">
              Have an article to share or an idea to inspire? Submit your
              article and become a part of our magazines vibrant community
            </p>
            <button className="btn btn-primary">
              SUBMIT ARTICLE <i className="ri-arrow-right-line ms-1"></i>
            </button>
            <img className="d-md-block d-none" src="./CallforArticle/lines-top (3).png" style={{width:"100%",position:"absolute",left:"0",top:"85%"}} />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToActionCards;
