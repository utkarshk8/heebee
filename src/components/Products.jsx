import React from "react";
import "./Products.css";
const Products = () => {
  const data = [
    {
      name: "New Coffee",
      price: "100.00",
    },
    { name: "New Coffee2", price: "110.00" },
    { name: "New Coffee3", price: "120.00" },
  ];

  return (
    <section>
      <div className="title">
        <h1>
          <span>Favorite</span> Products!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img
                  src="https://zuscoffee.com/wp-content/uploads/2019/11/Iced-Hazelnut-Latte-600x600.png"
                  alt="Product"
                  className="product_image"
                />
              </div>
              <h2 className="product_name">{product.name}</h2>
              <h3>{product.price}</h3>
              <p className="product_description">
                This is the area where Product Description can be showed.
              </p>
              <button className="buy_button">Buy Now</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
