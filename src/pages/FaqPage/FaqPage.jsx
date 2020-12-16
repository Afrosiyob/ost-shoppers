import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import TitleHemlet from "../../components/TitleHemlet/TitleHemlet";
import OtherPageNav from "../../components/TopNav/OtherPageNav/OtherPageNav";
import FaqCollapse from "../../layouts/FaqPage/FaqCollapse/FaqCollapse";
import FaqHeader from "../../layouts/FaqPage/FaqHeader/FaqHeader";
import "./FaqPage.scss";
import TitleHelmet from "../../components/TitleHelmet/TitleHelmet";

function FaqPage() {
  return (
    <div className="faq-page">
      <TitleHelmet title="Faq page" />

      <TitleHemlet title="Faq Page" />

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
