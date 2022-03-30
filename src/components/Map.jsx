import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map_section">
      <div className="map_title">
        <h1>
          <span>How</span> To Find Us!
        </h1>
      </div>
      <div className="map_image_container">
        <a
          href="https://goo.gl/maps/59QdT4RQAMU2"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="http://e.heebee.in/skin/frontend/rwd/equasar/heebee/map.jpg"
            alt="map"
            className="map_image"
          />
        </a>
      </div>
    </div>
  );
};

export default Map;
