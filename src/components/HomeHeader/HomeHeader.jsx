import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import "./HomeHeader.scss";
import SliderBox from "./SliderBox/SliderBox";
import SubMneu from "./SubMenu/SubMneu";

function HomeHeader() {
  return (
    <MDBAnimation reveal type="fadeInUp">
      <MDBContainer>
        <div className="home-header-box">
          <div className="left-header">
            <div className="top-box">
              <i className="fas fa-bars"></i>
              All Departments
            </div>
            <div className="under-box">
              <SubMneu />
            </div>
          </div>

          <div className="right-header">
            <div className="top-box">
              <span>#one</span>
              <span>#one</span>
              <span>#one</span>
              <span>#one</span>
              <span>#one</span>
            </div>
            <div className="under-box">
              <SliderBox />
            </div>
          </div>
        </div>

        <div className="mob-home-hedaer-box">
          <SliderBox />
        </div>
      </MDBContainer>
    </MDBAnimation>
  );
}

export default HomeHeader;
