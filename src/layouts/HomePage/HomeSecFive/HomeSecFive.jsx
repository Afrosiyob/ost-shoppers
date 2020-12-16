import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import { useTranslation } from "react-i18next";
import "./HomeSecFive.scss";
function HomeSecFive() {
  const {t}=useTranslation();
  return (
    <div className="my-3">
      <MDBAnimation reveal type="fadeInUp">
        <MDBContainer>
          <div className="home-sec-five-box">
            <div className="bg-shadow-box">
              <div className="left-box">
                <h3>{t(`HomeSecFive.Titul`)}</h3>
                <p>{t(`HomeSecFive.Titul1`)}</p>
              </div>
              <div className="right-box">
                <form action="#!">
                  <input type="email" placeholder={t(`HomeSecFive.Titul2`)} />
                  <button type="submit">
                    {t(`HomeSecFive.Titul3`)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </MDBContainer>
      </MDBAnimation>
    </div>
  );
}

export default HomeSecFive;
