import { MDBAnimation, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import { useTranslation } from "react-i18next";
import "./HomeSecThree.scss";
import HomeTabOne from "./HomeTabOne/HomeTabOne";
import HomeTabTwo from "./HomeTabTwo/HomeTabTwo";
import SaleImg from '../../../assets/saleImg.png'
function HomeSecThree() {
  const { t } = useTranslation();
  let daysLeft = 10;
  let sold = 347;
  let progress = (daysLeft * 100) / sold;
  return (
    <div className="my-3 home-sec-three">
      <MDBContainer>
        <MDBRow>
          <MDBCol sm="6" md="3">
            <div className="left-box-sec">
              <MDBAnimation reveal type="fadeInLeft" className="mb-3">
                <div className="left-item">
                  <div className="titul-top">
                    <h2>{t(`HomeSecThree.Titul`)}</h2>
                    <span className="sale-box">
                      <p>{t(`HomeSecThree.Titul1`)}</p>
                      $240
                    </span>
                  </div>
                  <img
                    src={SaleImg}
                    alt="imageseswfe"
                  />
                  <p>{t(`HomeSecThree.Titul2`)}</p>
                  <div className="progress-box">
                    <div className="progress-top">
                      <div className="left-p">
                        {t(`HomeSecThree.Titul3`)}
                        {daysLeft}
                      </div>
                      <div className="right-p">
                        {t(`HomeSecThree.Titul4`)} {sold}
                      </div>
                    </div>
                    <div className="progress-item">
                      <div
                        className="in-progress"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="last-text">* {t(`HomeSecThree.Titul5`)}</p>
                </div>
              </MDBAnimation>

              <MDBAnimation className="pb-2" reveal type="fadeInLeft">
                <div className="best-sel mb-2">
                  <h4>{t(`HomeSecThree.Titul6`)}</h4>
                  <div className="sel-item mb-2">
                    <img
                      src="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/11/36/11369e1ad16cffec548ec9f9ba98d810f4be2fa1.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]"
                      alt="xudy"
                    />
                    <div className="sale-item-info">
                      <h5>Peaky blinder sweatshirt</h5>
                      <p>Started at: 47 000 UZS</p>
                      <p>Already sold: 387</p>
                    </div>
                  </div>
                  <div className="sel-item mb-2">
                    <img
                      src="https://images.ua.prom.st/1865545862_w640_h640_hudi-s-printom.jpg"
                      alt="xudy"
                    />
                    <div className="sale-item-info">
                      <h5>Peaky blinder sweatshirt</h5>
                      <p>Started at: 47 000 UZS</p>
                      <p>Already sold: 387</p>
                    </div>
                  </div>
                  <div className="sel-item mb-2">
                    <img
                      src="https://images.ua.prom.st/1865545862_w640_h640_hudi-s-printom.jpg"
                      alt="xudy"
                    />
                    <div className="sale-item-info">
                      <h5>Peaky blinder sweatshirt</h5>
                      <p>Started at: 47 000 UZS</p>
                      <p>Already sold: 387</p>
                    </div>
                  </div>
                  <div className="sel-item mb-2">
                    <img
                      src="https://images.ua.prom.st/1865545862_w640_h640_hudi-s-printom.jpg"
                      alt="xudy"
                    />
                    <div className="sale-item-info">
                      <h5>Peaky blinder sweatshirt</h5>
                      <p>Started at: 47 000 UZS</p>
                      <p>Already sold: 387</p>
                    </div>
                  </div>
                  <div className="sel-item mb-2">
                    <img
                      src="https://images.ua.prom.st/1865545862_w640_h640_hudi-s-printom.jpg"
                      alt="xudy"
                    />
                    <div className="sale-item-info">
                      <h5>Peaky blinder sweatshirt</h5>
                      <p>Started at: 47 000 UZS</p>
                      <p>Already sold: 387</p>
                    </div>
                  </div>
                </div>
              </MDBAnimation>

              <MDBAnimation className="mb-3" reveal type="fadeInLeft">
                <div className="add-box">{t(`HomeSecThree.Titul7`)}</div>
              </MDBAnimation>
            </div>
          </MDBCol>
          <MDBCol sm="6" md="9">
            <div className="right-box-sec mb-3">
              <div className="mb-3">
                <MDBAnimation reveal type="fadeInRight">
                  {" "}
                  <HomeTabOne />
                </MDBAnimation>
              </div>
              <div>
                <MDBAnimation reveal type="fadeInRight">
                  {" "}
                  <HomeTabTwo />
                </MDBAnimation>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default HomeSecThree;
