import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as NavIcon } from "../assets/images/svg/heebeeIcon.svg";
import { ReactComponent as MenuIcon } from "../assets/images/svg/menuIcon.svg";
import { ReactComponent as CrossIcon } from "../assets/images/svg/crossIcon.svg";
import { useNavigate } from "react-router";
import "./Navbar.css";

import "./Navbar.css";

const Navbar = () => {
  const [showList, setShowList] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const onBodyClick = (event) => {
    if (ref.current.contains(event.target)) {
      return;
    }
    setShowList(false);
  };
  const toOrderNow = () => {
    navigate("/orders");
    setShowList(false);
  };
  const toHome = () => {
    navigate("/");
    setShowList(false);
  };
  const toAboutUs = () => {
    navigate("/about");
    setShowList(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <>
      <nav>
        <div>
          <NavIcon className="nav_icon" onClick={toHome} />
        </div>
        {showList ? (
          <CrossIcon
            onClick={() => {
              setShowList(!showList);
            }}
            className="nav_menu_button"
          />
        ) : (
          <MenuIcon
            onClick={() => {
              setShowList(!showList);
            }}
            className="nav_menu_button"
          />
        )}

        <ul className="nav_list1">
          <li onClick={toHome}>Home</li>
          <li onClick={toOrderNow}>Order Now</li>
          <li onClick={toAboutUs}>About Us</li>
        </ul>
      </nav>
      {showList ? (
        <ul className="nav_list2" ref={ref}>
          <li onClick={toHome}>Home</li>
          <li onClick={toOrderNow}>Order Now</li>
          <li onClick={toAboutUs}>About Us</li>
        </ul>
      ) : null}
    </>
  );
};

export default Navbar;
