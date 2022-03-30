import React, { useState } from "react";
import "./ScrollToTop.css";
import { ReactComponent as ArrowUpIcon } from "../assets/images/svg/arrowupIcon.svg";

const ScrollToTop = () => {
  const [scrollState, setScrollTaste] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollTaste(true) : setScrollTaste(false);
  });
  return (
    <div className="icon_container" onClick={toTop} scrollState={scrollState}>
      <ArrowUpIcon className="arrow_icon" width="3rem" />
    </div>
  );
};

export default ScrollToTop;
