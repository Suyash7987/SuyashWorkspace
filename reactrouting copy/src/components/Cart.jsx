import React, { useEffect, useState } from 'react';
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const savedItems = localStorage.getItem("cartItems");

    if (savedItems) {
      // Split the string by commas to get individual items
      const itemsArray = savedItems.split(",").map(item => {
        const itemProperties = item.split("|");
        return {
          Item: itemProperties[0],
          Name: itemProperties[1],
          // Convert MRP to a number by removing the '$' symbol and parsing it as a float
          MRP: parseFloat(itemProperties[2].replace('$', '')), // This removes the $ sign and converts to float
          caption: itemProperties[3],
          img: itemProperties[4],
          quantity: 1 // Initialize the quantity to 1 by default
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
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div id='MainCart' key={index} className="cart-item">
                <div id="MainCart1">
                  <img id='img' src={item.img} alt={item.Item} />
                </div>
                <div id="MainCart1-2">
                  <h2>{item.Item}</h2>
                  <p>{item.Name}</p>
                  <p>${item.MRP}</p>

                  {/* Quantity Counter */}
                  <div id="quantity">
                    <button onClick={() => handleDecrement(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(index)}>+</button>
                  </div>

                  {/* Price Update based on Quantity */}
                  <p>Total: ${item.MRP * item.quantity}</p>

                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
            {/* Total Price */}
            <div id="totalPrice">
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
