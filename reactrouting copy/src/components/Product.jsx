import React, { useState, useEffect } from 'react';
import './Product.css'; 
import { useNavigate, Link } from 'react-router-dom';

export const data = [
  { img: "/Images/vincetChase.png", Item: "Vincet Chase", Name: "Hustlr ACE", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Rayban.png", Item: "Rayban", Name: "Wayfarer", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Fastrack.png", Item: "FasTrack", Name: "Aviator", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Titan.png", Item: "Titan", Name: "Tees", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Maybach.png", Item: "MayBach", Name: "The Boss", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Maybach.png", Item: "MayBach", Name: "The Boss", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Titan.png", Item: "Titan", Name: "Tees", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/vincetChase.png", Item: "Vincet Chase", Name: "Hustlr ACE", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Rayban.png", Item: "Rayban", Name: "Wayfarer", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Fastrack.png", Item: "FasTrack", Name: "Aviator", MRP: "$499", caption: " Sunglasses for Men and Women" },
];


export function handleNav(item, navigate) {
    const userLogined = localStorage.getItem("userLogined");

    if (userLogined !== "true") {
      if (navigate) {
        navigate('/Login');
      } 
    } else {
        const price = item.MRP.replace('$', ''); // Remove the $ sign
        const itemString = `${item.Item}|${item.Name}|${price}|${item.caption}|${item.img}`;

        const cartItems = localStorage.getItem("cartItems") || '';
        const updatedCartItems = cartItems ? `${cartItems},${itemString}` : itemString;

        localStorage.setItem("cartItems", updatedCartItems);
        if (navigate) {
          navigate('/Cart');
        }
    }
}

function Product({ userLogined, setUserLogined }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  function Loader() {
    return (
      <div style={{
        height: "950px",
        width: "100%",
        position: "absolute",
        padding: "280px"
      }}>
        <div id="loader" style={{
          fontSize: "40px",
          marginLeft: "38%",
        }}>
          <h4>Loading...</h4>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading ? <Loader /> : (
        <div id='ProMain'>
          <div id="headline">
            <i className="ri-glasses-2-line"></i>
            <h1 id='h1'>Shades on, Worries gone</h1>
            <i className="ri-glasses-2-line"></i>
          </div>
          <div id="innerdiv">
            {data.map((item, index) => (
              <div key={index} className="items">
                <div id="item-upper">
                  <img src={item.img} alt={item.Item} />
                </div>
                <div id="item-lower">
                  <h1>{item.Item}</h1>
                  <p>{item.Name}</p>
                  <div id="itemslower">
                    <Link id="Link" to={`/View/${index}`}>View Details</Link>
                    <button onClick={() => handleNav(item, navigate)}>Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
