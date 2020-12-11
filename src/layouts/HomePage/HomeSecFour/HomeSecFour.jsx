import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import BrandSlider from "./BrandSlider/BrandSlider";
import "./HomeSecFour.scss";

function HomeSecFour() {
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
            Featured{" "}
            <span className="wrap-box">
              <div
                className="inner-box"
                style={{ width: `${widthBrands}%` }}
              ></div>
            </span>{" "}
            {showBrands} of {allBrands} brands{" "}
          </div>
        </MDBContainer>
      </MDBAnimation>
    </div>
  );
}

export default HomeSecFour;
