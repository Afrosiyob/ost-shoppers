import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import OtherPageNav from "../../../components/TopNav/OtherPageNav/OtherPageNav";
import "./ProductHeader.scss";

function ProductHeader() {
  return (
    <div>
      <div>
        <OtherPageNav />
      </div>

      <MDBAnimation type="fadeInDown">
        <div className="product-list-header">
          <div className="wrap-img-box">
            <MDBContainer>
              <h1>Same discounts for everyone</h1>
            </MDBContainer>
          </div>
        </div>
      </MDBAnimation>
    </div>
  );
}

export default ProductHeader;
