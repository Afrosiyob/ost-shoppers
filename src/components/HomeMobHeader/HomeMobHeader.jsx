import { MDBContainer } from "mdbreact";
import React, { useState } from "react";
import "./HomeMobHeader.scss";
import MobSearch from "./MobSearch/MobSearch";

function HomeMobHeader() {
  const [bg, setbg] = useState(true);

  return (
    <MDBContainer>
      <div
        className="bg-shadow"
        style={{
          opacity: `${bg ? "0" : "1"}`,
          zIndex: `${bg ? "-2222" : "999"}`,
          pointerEvents: `${bg ? "none" : "visible"}`,
        }}
        onClick={() => {
          setbg(!bg);
        }}
      ></div>
      <div
        className="side-bar"
        style={{
          opacity: `${bg ? "0" : "1"}`,
          zIndex: `${bg ? "-2" : "9999"}`,
          left: `${bg ? "-100%" : "0"}`,
        }}
      >
        <div className="close-btn">
          <div
            className="icon-box"
            onClick={() => {
              setbg(!bg);
            }}
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
        <h2>
          beshop <span>.</span>{" "}
        </h2>

        <ul>
          <li>Value of the Day</li>
          <li>Top 100 Offers</li>
          <li>Computers & Accessories</li>
          <li>Cameras, Audio & Video</li>
          <li>Mobiles & Tablets</li>
          <li>TV & Audio</li>
          <li>Watches & Eyewear</li>
          <li>Watches & Eyewear</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="mob-header-box">
        <div
          className="left-item"
          onClick={() => {
            setbg(!bg);
          }}
        >
          <i className="fas fa-bars"></i>
        </div>

        <div className="right-item">
          <MobSearch />
        </div>
      </div>
    </MDBContainer>
  );
}

export default HomeMobHeader;
