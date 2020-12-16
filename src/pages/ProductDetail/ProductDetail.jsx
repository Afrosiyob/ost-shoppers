import { MDBAnimation, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import TitleHemlet from "../../components/TitleHemlet/TitleHemlet";
import OtherPageNav from "../../components/TopNav/OtherPageNav/OtherPageNav";
import ProductDetailBottomSlider from "../../layouts/ProductDetail/ProductDetailBottomSlider/ProductDetailBottomSlider";
import ProductDetailLeftSlider from "../../layouts/ProductDetail/ProductDetailLeftSlider/ProductDetailLeftSlider";
import ProductDetailMidInfo from "../../layouts/ProductDetail/ProductDetailMidInfo/ProductDetailMidInfo";
import ProductDetailRightForm from "../../layouts/ProductDetail/ProductDetailRightForm/ProductDetailRightForm";
import ProductDetailUnderSlider from "../../layouts/ProductDetail/ProductDetailUnderSlider/ProductDetailUnderSlider";

import "./ProductDetail.scss";
function ProductDetail() {
  return (
    <div className="product-detail">
      <TitleHemlet title="Product Detail"/>
      <OtherPageNav />

      <MDBContainer>
        <MDBRow className="my-5">
          <MDBCol sm="12" md="4" className="mb-3">
            <MDBAnimation type="fadeInLeft">
              <ProductDetailLeftSlider />
            </MDBAnimation>
          </MDBCol>
          <MDBCol sm="12" md="5" className="mb-3">
            <MDBAnimation type="fadeInUp">
              <ProductDetailMidInfo />
            </MDBAnimation>
          </MDBCol>
          <MDBCol sm="12" md="3" className="mb-3">
            <MDBAnimation type="fadeInRight">
              <ProductDetailRightForm />
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <div className="mb-5">
          <MDBAnimation reveal type="fadeInUp">
            <ProductDetailBottomSlider />
          </MDBAnimation>
        </div>
        <div className="mb-5">
          <MDBAnimation reveal type="fadeInUp">
            <ProductDetailUnderSlider />
          </MDBAnimation>
        </div>
      </MDBContainer>
    </div>
  );
}

export default ProductDetail;
