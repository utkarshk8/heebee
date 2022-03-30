import React, { useState } from "react";
import { ReactComponent as NavIcon } from "../assets/images/svg/heebeeIcon.svg";
import { ReactComponent as MenuIcon } from "../assets/images/svg/menuIcon.svg";
import { ReactComponent as CrossIcon } from "../assets/images/svg/crossIcon.svg";

import "./Navbar.css";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <nav>
      <NavIcon
        className="nav_icon"
        onClick={() => {
          navigate("/");
          if (showMenu === true) {
            setShowMenu(!showMenu);
          }
        }}
      />

      {showMenu ? (
        <CrossIcon
          className="menu_icon"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <MenuIcon
          className="menu_icon"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      )}
      <ul className={showMenu ? "list_on" : "list_off"}>
        <li
          onClick={() => {
            navigate("/");
            setShowMenu(!showMenu);
          }}
        >
          HOME
        </li>
        <li
          onClick={() => {
            navigate("/orders");
            setShowMenu(!showMenu);
          }}
        >
          ORDER/MENU
        </li>
        <li
          onClick={() => {
            navigate("/about");
            setShowMenu(!showMenu);
          }}
        >
          ABOUT US
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
