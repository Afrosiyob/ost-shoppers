import { MDBAnimation } from "mdbreact";
import React from "react";
import TopNavOne from "./TopNavOne/TopNavOne";
import TopNavTwo from "./TopNavTWo/TopNavTwo";
import "./TopNav.scss";
import HomeMobHeader from "../HomeMobHeader/HomeMobHeader";

function TopNav() {
  return (
    <div className="top-nav">
      <MDBAnimation type="fadeInDown">
        <TopNavOne />
        <TopNavTwo />
        <div className="home-mob-header">
          <HomeMobHeader />
        </div>
      </MDBAnimation>
    </div>
  );
}

export default TopNav;
