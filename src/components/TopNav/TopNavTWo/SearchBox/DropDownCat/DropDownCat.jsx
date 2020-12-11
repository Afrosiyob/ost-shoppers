import React, { useState } from "react";

import "./DropDownCat.scss";

function DropDownCat() {
  const [cat, setcat] = useState(false);
  const [catVal, setcatVal] = useState("All Catigories");
  function handleDrop(val) {
    setcatVal(val);
    setcat(!cat);
  }
  return (
    <div className="cat-box">
      <div
        className="up-box"
        onClick={() => {
          setcat(!cat);
        }}
      >
        {catVal} <i className={`fas fa-angle-${cat ? "up" : "down"}`}></i>{" "}
      </div>

      <div className={`down-box ${cat ? "active" : ""}`}>
        <span onClick={() => handleDrop("first")}>first </span>
        <span onClick={() => handleDrop("second")}>second</span>
        <span onClick={() => handleDrop("third")}>third</span>
      </div>
    </div>
  );
}

export default DropDownCat;
