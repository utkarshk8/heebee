import React, { useState, useEffect, useRef } from "react";
const Dropdown = () => {
  const options = [
    {
      label: "HEEBEE SPECIALS",
      value: "#heebee",
    },
    {
      label: "HOT COFFEE",
      value: "#hotcoffee",
    },
    {
      label: "COLD COFFEE",
      value: "#coldcoffee",
    },
    {
      label: "BEE BITES",
      value: "#beebites",
    },
  ];
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    console.log(option.value);
    return (
      <a
        href={option.value}
        style={{ textDecoration: "none", color: "black", lineHeight: "2rem" }}
      >
        <div
          key={option.value}
          className="item"
          onClick={() => setSelected(option)}
        >
          <div className="ui yellow empty circular label"></div>

          {option.label}
        </div>
      </a>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <div
          onClick={() => setOpen(!open)}
          className={`ui floating dropdown labeled icon button ${
            open ? "visible active" : ""
          }`}
        >
          <i className="filter icon white"></i>
          <span className="text">
            <span className="ui yellow empty circular label" />
            {selected.label}
          </span>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
