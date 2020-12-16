import { MDBAnimation, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React, { useState } from "react";
import TitleHemlet from "../../components/TitleHemlet/TitleHemlet";
import OtherPageNav from "../../components/TopNav/OtherPageNav/OtherPageNav";

import CardPageLeft from "../../layouts/CardPage/CardPageLeft/CardPageLeft";
import CardPageRight from "../../layouts/CardPage/CardPageRight/CardPageRight";

import "./CardPage.scss";
function CardPage() {
  const [summ, setSumm] = useState(0);

  function onChangeSumm(newSumm) {
    setSumm(newSumm);
    console.log("====================================");
    console.log("new value of parent ::::", summ);
    console.log("====================================");
  }

  return (
    <div>
      <TitleHemlet title="Card Page"/>
      <OtherPageNav />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="8" sm="12">
            <MDBAnimation type="fadeInLeft">
              <CardPageLeft summ={summ} onChange={onChangeSumm} />
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4" sm="12">
            <MDBAnimation type="fadeInRight">
              <CardPageRight />
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default CardPage;
