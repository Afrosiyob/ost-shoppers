import React, { useEffect } from "react";
import "./PageNotFound.scss";

import $ from "jquery";

import ImgNumber from "../../assets/404page/404.svg";
import ImgHuman from "../../assets/404page/illustraion.svg";
import ImgText from "../../assets/404page/text.svg";
import { MDBAnimation } from "mdbreact";

function PageNotFound() {
  useEffect(() => {
    $(".not-found-page").mousemove(function (e) {
      $(".img-number").css({
        left:
          e.offsetX > e.target.offsetWidth / 2
            ? 50 + e.offsetX / 400 + "%"
            : 50 - e.offsetX / 400 + "%",
        top:
          e.offsetY > e.target.offsetHeight / 2
            ? 40 + e.offsetY / 200 + "%"
            : 40 - e.offsetY / 200 + "%",
      });
      $(".img-human").css({
        left:
          e.offsetX > e.target.offsetWidth / 2
            ? 50 - e.offsetX / 400 + "%"
            : 50 + e.offsetX / 400 + "%",
        top:
          e.offsetY > e.target.offsetHeight / 2
            ? 50 - e.offsetY / 200 + "%"
            : 50 + e.offsetY / 200 + "%",
      });
      $(".img-text").css({
        left:
          e.offsetX > e.target.offsetWidth / 2
            ? 50 + e.offsetX / 400 + "%"
            : 50 - e.offsetX / 400 + "%",
        top:
          e.offsetY > e.target.offsetHeight / 2
            ? 80 - e.offsetY / 200 + "%"
            : 80 + e.offsetY / 200 + "%",
      });
    });
  }, []);

  return (
    <MDBAnimation type="zoomIn">
      {" "}
      <div className="not-found-page">
        <div className="images-wrap-box">
          <img src={ImgNumber} className="img-number" alt="number" />
          <img src={ImgHuman} className="img-human" alt="human" />
          <img src={ImgText} className="img-text" alt="text" />
        </div>
      </div>
    </MDBAnimation>
  );
}

export default PageNotFound;
