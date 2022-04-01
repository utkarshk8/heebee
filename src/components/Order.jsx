import React from "react";
import Button from "./Button";
import "./Order.css";

const Order = ({ data }) => {
  return (
    <div className="order_products">
      {data.map((product) => {
        return (
          <div className="order_product">
            <div className="order_image">
              <img
                src="https://zuscoffee.com/wp-content/uploads/2019/11/Iced-Hazelnut-Latte-600x600.png"
                alt="Product"
                className="order_product_image"
              />
            </div>
            <h2 className="order_product_name">{product.name}</h2>
            <h3>{product.price}</h3>
            <p className="order_product_description">
              This is the area where Product Description can be showed.
            </p>
            <Button />
          </div>
        );
      })}
    </div>
  );
};

export default Order;
