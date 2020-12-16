import { MDBAnimation, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import { useTranslation } from "react-i18next";
import CountDown from "./CountDown/CountDown";
import "./HomeSecTwo.scss";
import SecTwoSlider from "./SecTwoSlider/SecTwoSlider";
function HomeSecTwo() {

  const {t} = useTranslation();

  return (
    <div className="my-5">
      <MDBContainer>
        <MDBAnimation reveal type="fadeInUp">
          <div className="home-sec-two-box">
            <MDBRow>
              <MDBCol sm="6" md="3">
                <div className="left-box">
                  <h2>{t(`HomeSecTwo.Titul`)}</h2>
                  <p>{t(`HomeSecTwo.Titul1`)}</p>
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
