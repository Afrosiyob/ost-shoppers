import { MDBAnimation, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import "./HomeSecThree.scss";
import HomeTabOne from "./HomeTabOne/HomeTabOne";
import HomeTabTwo from "./HomeTabTwo/HomeTabTwo";

function HomeSecThree() {
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
                    <h2>Special offer</h2>
                    <span className="sale-box">
                      <p>Sale</p>
                      $240
                    </span>
                  </div>
                  <img
                    src="https://www.thehouseofmarley.com/media/catalog/product/cache/15/image/1100x/9df78eab33525d08d6e5fb8d27136e95/e/m/em-fh051_main.png"
                    alt="imageseswfe"
                  />
                  <p>Liquid Ears Bluetooth Metallic Headphones - Rose Gold </p>
                  <div className="progress-box">
                    <div className="progress-top">
                      <div className="left-p">Days left: {daysLeft}</div>
                      <div className="right-p">Already sold: {sold}</div>
                    </div>
                    <div className="progress-item">
                      <div
                        className="in-progress"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="last-text">* With free shipping</p>
                </div>
              </MDBAnimation>

              <MDBAnimation className="pb-2" reveal type="fadeInLeft">
                <div className="best-sel mb-2">
                  <h4>Best sellers</h4>
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
                <div className="add-box">ADS HERE</div>
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
