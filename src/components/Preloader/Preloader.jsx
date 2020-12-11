import React from "react";
import "./Preloader.scss";
function Preloader() {
  return (
    <div className="loader-wrap-box">
      <div className="loader">
        <div className="loader-inner pacman">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
