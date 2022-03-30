import React from "react";
import { useNavigate } from "react-router";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section id="home">
      <div className="background">
        <img
          src="http://e.heebee.in/skin/frontend/rwd/equasar/heebee/slider.jpg"
          alt="background"
        />
      </div>
      <div className="content">
        <h1 className="content_header">NOW YOU CAN FEEL THE ENERGY</h1>
        <em>Start Your Day with A cup of Black Coffee</em>
        <button
          className="banner_button"
          onClick={() => {
            navigate("/orders");
          }}
        >
          ORDER NOW
        </button>
      </div>
    </section>
  );
};

export default Banner;
