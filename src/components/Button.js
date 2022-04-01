import React, { useState } from "react";
import "./Button.css";
const Button = () => {
  const [count, setCount] = useState(1);
  const [container, showContainer] = useState(false);
  return (
    <div className="order_bigContainer">
      <span
        onClick={() => {
          showContainer(!container);
        }}
      >
        {container ? "" : "Add to Cart"}
      </span>
      <div
        className={
          container === true ? "order_showcontainer" : "order_nocontainer"
        }
      >
        <button
          onClick={() => {
            if (count >= 2) {
              setCount(count - 1);
            } else if (count === 1) {
              showContainer(false);
            }
          }}
        >
          -
        </button>
        <div>{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Button;
