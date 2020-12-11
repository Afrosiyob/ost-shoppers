import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import "./HomeSecFive.scss";

function HomeSecFive() {
  return (
    <div className="my-3">
      <MDBAnimation reveal type="fadeInUp">
        <MDBContainer>
          <div className="home-sec-five-box">
            <div className="bg-shadow-box">
              <div className="left-box">
                <h3>Sign up to Newsletter</h3>
                <p>...and receive $20 coupon for first shopping.</p>
              </div>
              <div className="right-box">
                <form action="#!">
                  <input type="email" placeholder="Enter email address" />
                  <button type="submit">Sign up</button>
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
