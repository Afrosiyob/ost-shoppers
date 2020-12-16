import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import OtherPageNav from "../../../components/TopNav/OtherPageNav/OtherPageNav";
import "./ProductHeader.scss";
import { useTranslation } from "react-i18next";

function ProductHeader() {
  const [ t ] = useTranslation();
  return (
    <div>
      <div>
        <OtherPageNav />
      </div>

      <MDBAnimation type="fadeInDown">
        <div className="product-list-header">
          <div className="wrap-img-box">
            <MDBContainer>
              <h1>{ t(`ProductHeader.Titul`) }</h1>
            </MDBContainer>
          </div>
        </div>
      </MDBAnimation>
    </div>
  );
}

export default ProductHeader;
