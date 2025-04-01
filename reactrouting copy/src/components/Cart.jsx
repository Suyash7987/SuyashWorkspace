import React, { useEffect, useState } from 'react';
import "./Cart.css";
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
   const  navigate =useNavigate();
  function goproduct(){
      navigate('/Product');
  }
  useEffect(() => {
    
    const savedItems = localStorage.getItem("cartItems");

    if (savedItems) {
      
      const itemsArray = savedItems.split(",").map(item => {
        const itemProperties = item.split("|");
        return {
          Item: itemProperties[0],
          Name: itemProperties[1],
          
          MRP: parseFloat(itemProperties[2].replace('$', '')),
          caption: itemProperties[3],
          img: itemProperties[4],
          quantity: 1 
        };
      });
      setCartItems(itemsArray);
    }
  }, []);

  const handleDelete = (indexToRemove) => {
    const updatedCartItems = cartItems.filter((_, index) => index !== indexToRemove);

    setCartItems(updatedCartItems);

    const updatedCartItemsString = updatedCartItems.map(item =>
      `${item.Item}|${item.Name}|${item.MRP}|${item.caption}|${item.img}|${item.quantity}`
    ).join(",");
    localStorage.setItem("cartItems", updatedCartItemsString);
  };

  const handleIncrement = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);

    const updatedCartItemsString = updatedCartItems.map(item =>
      `${item.Item}|${item.Name}|${item.MRP}|${item.caption}|${item.img}|${item.quantity}`
    ).join(",");
    localStorage.setItem("cartItems", updatedCartItemsString);
  };

  const handleDecrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);

      const updatedCartItemsString = updatedCartItems.map(item =>
        `${item.Item}|${item.Name}|${item.MRP}|${item.caption}|${item.img}|${item.quantity}`
      ).join(",");
      localStorage.setItem("cartItems", updatedCartItemsString);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.MRP * item.quantity, 0);
  };

  return (
    <div id="CartMain">
      <div id="CartUpper">
        {cartItems.length === 0 ? (
         <div id='CartUpper1'>
          <h2>"Your cart is feeling lonely! 🛒💔 Start adding your favorites now! 😊"</h2>
         <div id='CartUpperImg'>
         <img src="/EmptyBasket.png" alt="" />
         </div>
          <div> <button onClick={goproduct}>Explore Product</button></div>
         </div>
         
        ) : (
          <div id='Superclass'>
            {cartItems.map((item, index) => (
              <div id='MainCart' key={index} className="cart-item">
                <div id="MainCart1">
                  <img id='img' src={item.img} alt={item.Item} />
                </div>
                <div id="MainCart1-2">
                  <h2>{item.Item}</h2>
                  <p>{item.Name}</p>
                  <p style={{color:"green"}}>${item.MRP}</p>
                  <div id="quantity">
                    <button onClick={() => handleDecrement(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(index)}>+</button>
                  </div>
                  <p style={{color:"green"}}>Total: ${item.MRP * item.quantity}</p>
                  <button id='Delete' onClick={() => handleDelete(index)}>Remove Item</button>
                </div>
              </div>
            ))}
            <div id="totalPrice">
              <h1>Order Summary</h1>
              <h3>Total Price: ${calculateTotalPrice()}</h3>
              <button>Proceed to Check Out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
