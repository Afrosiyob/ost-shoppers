import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import "./ProductUnderTab.scss";
import { useTranslation } from "react-i18next";

function ProductUnderTab() {
  const [ t ] = useTranslation();

  return (
    <div>
      <MDBAnimation reveal type="fadeInUp">
        <MDBContainer>
          <div className="product-under-tab">
            <div className="bg-shadow-box">
              <div className="left-box">
                <h3>{ t(`ProductUnderTab.Titul`) }</h3>
                <p>{ t(`ProductUnderTab.Titul2`) }</p>
              </div>
              <div className="right-box">
                <form action="#!">
                  <input type="email" placeholder= { t(`ProductUnderTab.Titul3`) } />
                  <button type="submit" className="text-uppercase">
                  { t(`ProductUnderTab.Titul4`) } 
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

export default ProductUnderTab;
