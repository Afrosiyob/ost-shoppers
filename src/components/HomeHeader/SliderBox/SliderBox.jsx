import Slider from "react-slick";
import "./SliderBox.scss";

import React, { Component } from "react";

export default class SliderBox extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider-box">
        <div className="controls">
          <button className="button" onClick={this.previous}>
            <i className="fas fa-angle-left"></i>
          </button>
          <span></span>
          <button className="button" onClick={this.next}>
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
        <Slider {...settings} ref={(c) => (this.slider = c)}>
          <div className="slide-item">
            <img
              src="https://cdn.redmondpie.com/wp-content/uploads/2019/09/iPhone-11-pro-11-pro-max-1200px.png"
              alt="iphone11"
            />
          </div>
          <div className="slide-item">
            <img
              src="https://i0.wp.com/toptech.news/wp-content/uploads/2019/09/pers-right-here-Gallery-1-1.jpg?resize=1140%2C694&ssl=1"
              alt="wfwefw"
            />
          </div>

          <div className="slide-item">
            <img
              src="https://www.droidviews.com/wp-content/uploads/2019/09/iPhone-11-Wallpapers.jpg"
              alt="imag3"
            />
          </div>
          <div className="slide-item">
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ks6oqb453i3urk7hatvj5v5f87-20190814105142.Medi.jpeg"
              alt="iamg4"
            />
          </div>
          <div className="slide-item">
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ks6oqb453i3urk7hatvj5v5f87-20190814105142.Medi.jpeg"
              alt="iamg4"
            />
          </div>
          <div className="slide-item">
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ks6oqb453i3urk7hatvj5v5f87-20190814105142.Medi.jpeg"
              alt="iamg4"
            />
          </div>
          <div className="slide-item">
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ks6oqb453i3urk7hatvj5v5f87-20190814105142.Medi.jpeg"
              alt="iamg4"
            />
          </div>
          <div className="slide-item">
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ks6oqb453i3urk7hatvj5v5f87-20190814105142.Medi.jpeg"
              alt="iamg4"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
