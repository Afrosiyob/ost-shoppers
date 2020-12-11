import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import OtherPageNav from "../../components/TopNav/OtherPageNav/OtherPageNav";
import FaqCollapse from "../../layouts/FaqPage/FaqCollapse/FaqCollapse";
import FaqHeader from "../../layouts/FaqPage/FaqHeader/FaqHeader";
import "./FaqPage.scss";

function FaqPage() {
  return (
    <div className="faq-page">
      <OtherPageNav />
      <MDBContainer>
        <div className="my-5">
          <MDBAnimation type="fadeInDown">
            <FaqHeader />
          </MDBAnimation>
        </div>
        <div className="my-5">
          <MDBAnimation reveal type="fadeInUp">
            <FaqCollapse />
          </MDBAnimation>
        </div>
      </MDBContainer>
    </div>
  );
}

export default FaqPage;
