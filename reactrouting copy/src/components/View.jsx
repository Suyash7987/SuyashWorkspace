import React from "react";
import { data } from "./Product.jsx";
import { Link, useParams } from "react-router-dom";

import './View.css';

function View() {
  const { index } = useParams(); // Get the index from the URL
  const product = data[index];
  const color = ["Black", "White", "Golden"];

  return (
    <>
      <div id="Viewmain">
        <div id="Viewmain-left">
            <h1>{product.Name}</h1>
            <p>Style is not just what you wear; it's the attitude you project through every detail</p>
          <div id="Viewmain-left-upper">
            <img src={product.img} alt={product.Item} />
          </div>
          <div id="Viewmain-left-bottom">
              {color.map((color, index) => {
                return (
                  <div key={index} id="Colorbox">
                    <input type="radio" name="color" value={color} />
                    <h4>{color}</h4>
                  </div>
                );
              })}
            </div>
          
        </div>
        <div id="Viewmain-right">
           <div id="Viewman-right-upper">
              <h1>{product.Name} {product.caption}</h1>
              <div id="stars">
              <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
              </div>
              <h2>*MRP:{product.MRP}</h2>
              <h3>Inclusive all Taxes</h3>
              <h4> Hurry up..!! 5700+ Already bought this </h4>
           </div>
           <div id="Viewmain-right-Middle">
              <h3>Description</h3>
              <p id="p"> Sunglasses from Tees By Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M8022GR7V). Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati nesciunt nemo repudiandae unde optio! Quo porro quibusdam et consequuntur.</p>
           </div>
           <div id="Viewmain-right-Lower">
             <div id="Viewmain-right-Lower1">
             <i id="eye" class="ri-eye-fill"></i>
              <h3>Eye Exam</h3>
              <p className="para">Lorem ipsum dolor sit amet.</p>
              <Link id="Link">Learn More</Link>
             </div>
             <div id="Viewmain-right-Lower1">
             <i id="eye" class="ri-glasses-2-line"></i>
              <h3>Lense Fitting</h3>
              <p className="para">Lorem ipsum dolor sit amet.</p>
              <Link id="Link">Learn More</Link>
              </div>
              <div id="Viewmain-right-Lower1">
              <i id="eye" class="ri-id-card-line"></i>
              <h3>Virtual Try-on</h3>
              <p className="para">Lorem ipsum dolor sit amet.</p>
              <Link id="Link">Learn More</Link>
              </div>
           </div>
           <div id="Viewmain-right-Lower2">
              <button>Add to Cart</button>
              <button>Buy Now</button>
              <button>Save</button>
           </div>
        </div>
      </div>      
    </>
  );
}

export default View;
