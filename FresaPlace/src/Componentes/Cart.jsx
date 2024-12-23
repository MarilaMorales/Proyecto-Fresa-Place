import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const agregarCarrito = (producto) => {
    setCartItems([...cartItems, producto]);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.nombre} - {item.precio} Colones</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;