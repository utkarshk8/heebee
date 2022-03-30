import React from "react";
import Banner from "../components/Banner";
import Instagram from "../components/Instagram";
import Map from "../components/Map";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Instagram />
      <Map />
    </div>
  );
};

export default HomePage;
