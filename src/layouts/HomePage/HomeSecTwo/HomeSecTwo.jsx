import { MDBAnimation, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import CountDown from "./CountDown/CountDown";
import "./HomeSecTwo.scss";
import SecTwoSlider from "./SecTwoSlider/SecTwoSlider";

function HomeSecTwo() {
  return (
    <div className="my-5">
      <MDBContainer>
        <MDBAnimation reveal type="fadeInUp">
          <div className="home-sec-two-box">
            <MDBRow>
              <MDBCol sm="6" md="3">
                <div className="left-box">
                  <h2>Deal and offers</h2>
                  <p>Hygiene equipments</p>
                  <CountDown />
                </div>
              </MDBCol>

              <MDBCol sm="6" md="9">
                <div className="right-box">
                  <SecTwoSlider />
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBAnimation>
      </MDBContainer>
    </div>
  );
}

export default HomeSecTwo;
