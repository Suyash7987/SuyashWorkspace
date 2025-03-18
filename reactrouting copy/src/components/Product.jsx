import React, { useState, useEffect } from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';

function Product() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Simulate loading state
  useEffect(() => {
     setTimeout(() => {
      setLoading(false);
    }, 1000); 
    
  }, []);

  function handleNav() {
    navigate('/Login');
  }

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
          <h4>Redirecting...</h4>
        </div>
      </div>
    );
  }

  const data = [
    { img: "./vincetChase.png", Item: "Vincet Chase", Name: "Hustlr ACE" },
    { img: "./Rayban.png", Item: "Rayban", Name: "Wayfarer" },
    { img: "./Fastrack.png", Item: "FasTrack", Name: "Aviator" },
    { img: "./Titan.png", Item: "Titan", Name: "Tees" },
    { img: "./Maybach.png", Item: "MayBach", Name: "The Boss" },
    { img: "./Maybach.png", Item: "MayBach", Name: "The Boss" },
    { img: "./Titan.png", Item: "Titan", Name: "Tees" },
    { img: "./vincetChase.png", Item: "Vincet Chase", Name: "Hustlr ACE" },
    { img: "./Rayban.png", Item: "Rayban", Name: "Wayfarer" },
    { img: "./Fastrack.png", Item: "FasTrack", Name: "Aviator" },
  ];

  return (
    <>
      {loading ? <Loader /> : (
        <div id='ProMain'>
          <div id="headline">
            <h1>Our Products</h1>
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
                  <button>View Detail</button>
                  <button onClick={handleNav}>Buy Now</button>
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
