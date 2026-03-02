// Cart.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <h3>No items in cart</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "15px 0",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px", height: "100px", marginRight: "20px" }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>${item.price}</p>

                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: "10px 20px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;
