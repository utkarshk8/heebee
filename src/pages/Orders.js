import React from "react";
import Order from "../components/Order";
import "./Orders.css";

const Orders = () => {
  const data = [
    {
      name: "COLD COFFEE COMBO",
      price: "100.00",
    },
    { name: "COLD COFFEE COMBO", price: "110.00" },
    { name: "COLD COFFEE COMBO", price: "120.00" },
    { name: "HOT COFFEE COMBO", price: "120.00" },
  ];

  return (
    <div className="container">
      <button className="order_menu_button">Menu</button>
      <div className="order_title">
        <h1>
          <span>HEEBEE</span> SPECIALS
        </h1>
      </div>
      <Order data={data} />
      <div className="order_title">
        <h1>
          <span>HOT</span> COFFEE
        </h1>
      </div>
      <Order data={data} />
      <div className="order_title">
        <h1>
          <span>COLD</span> COFFEE
        </h1>
      </div>
      <Order data={data} />
      <div className="order_title">
        <h1>
          <span>BEE</span> BITES
        </h1>
      </div>
      <Order data={data} />
    </div>
  );
};

export default Orders;
