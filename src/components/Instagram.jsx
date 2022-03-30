import React from "react";
import "./Instagram.css";

const Instagram = () => {
  return (
    <div className="post_container">
      <div className="insta_title">
        <h1>
          <span>Our</span> Instagram Posts!
        </h1>
      </div>
      <div className="posts">
        <div className="post_image">
          <img
            src="https://i.ibb.co/SnPq94P/Screenshot-2022-03-30-031553.png"
            alt="post"
            className="actual_image"
          />
        </div>
        <div className="post_image">
          <img
            src="https://i.ibb.co/SnPq94P/Screenshot-2022-03-30-031553.png"
            alt="post"
            className="actual_image"
          />
        </div>
        <div className="post_image">
          <img
            src="https://i.ibb.co/SnPq94P/Screenshot-2022-03-30-031553.png"
            alt="post"
            className="actual_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
