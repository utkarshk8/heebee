import React from "react";
import Dropdown from "../components/Dropdown";
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
      <div className="dropdown_button">
        <Dropdown />
      </div>

      <div id="heebee">
        <div className="order_title">
          <h1>
            <span>HEEBEE</span> SPECIALS
          </h1>
        </div>
        <Order data={data} />
      </div>
      <div id="hotcoffee">
        <div className="order_title">
          <h1>
            <span>HOT</span> COFFEE
          </h1>
        </div>
        <Order data={data} />
      </div>
      <div id="coldcoffee">
        <div className="order_title">
          <h1>
            <span>COLD</span> COFFEE
          </h1>
        </div>
        <Order data={data} />
      </div>
      <div id="beebites">
        <div className="order_title">
          <h1>
            <span>BEE</span> BITES
          </h1>
        </div>
        <Order data={data} />
      </div>
    </div>
  );
};

export default Orders;
