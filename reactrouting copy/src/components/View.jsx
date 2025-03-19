import React from "react";
import { data } from "./Product.jsx";
import { useParams } from "react-router-dom";
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
              <h2>*MRP:{product.MRP}</h2>
              <h3>Inclusive all Taxes</h3>
              <h4> Hurry up..!! 5700+ Already bought this </h4>
           </div>
           <div id="Viewmain-right-Middle">
              <h3>Description</h3>
              <p> Sunglasses from Tees By Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M8022GR7V). Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati nesciunt nemo repudiandae unde optio! Quo porro quibusdam et consequuntur.</p>
           </div>
           <div id="Viewmain-right-Lower">
            <div id="Viewmain-right-Lower-left">
            <i class="ri-calendar-schedule-line"></i>
             <h4>7 Days return</h4>   
           </div>
           <div id="Viewmain-right-Lower-right">
           <i class="ri-verified-badge-line"></i>
             <h4>100% Genuine Product</h4>   
           </div>
           </div>
           <div id="Viewmain-right-Lower2">
              <button>Add to Cart</button>
              <button>Buy Now</button>
           </div>
        </div>
      </div>      
    </>
  );
}

export default View;
