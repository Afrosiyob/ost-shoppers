import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import { useTranslation } from "react-i18next";
import BrandSlider from "./BrandSlider/BrandSlider";
import "./HomeSecFour.scss";
function HomeSecFour() {
  const { t } = useTranslation();
  // const [progress, setprogress] = useState();
  let allBrands = 28;
  let showBrands = 10;

  let widthBrands = (showBrands * 100) / allBrands;

  return (
    <div className="home-sec-four">
      <MDBAnimation reveal type="fadeInUp">
        <MDBContainer>
          <div className="brads-box">
            <BrandSlider />
          </div>
          <div className="under-progressbar py-2">
            {" "}
            {t(`HomeSecFour.Titul`)}{" "}
            <span className="wrap-box">
              <div
                className="inner-box"
                style={{ width: `${widthBrands}%` }}
              ></div>
            </span>{" "}
            {showBrands} {t(`HomeSecFour.Titul1`)} {allBrands}{" "}
            {t(`HomeSecFour.Titul2`)}
          </div>
        </MDBContainer>
      </MDBAnimation>
    </div>
  );
}

export default HomeSecFour;
