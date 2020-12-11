import React, { Component } from "react";
import Slider from "react-slick";
import "./Brandslider.scss";
export default class BrandSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 700,

      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 6,

      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div className="brand-slider">
        <div>
          <Slider {...settings}>
            <div className="slide-item">
              <img
                src="http://pngimg.com/uploads/adidas/adidas_PNG21.png"
                alt="adidas"
              />
            </div>
            <div className="slide-item">
              <img
                src="http://pngimg.com/uploads/nike/nike_PNG19.png"
                alt="adidas"
              />
            </div>
            <div className="slide-item">
              <img
                src="http://pngimg.com/uploads/adidas/adidas_PNG21.png"
                alt="adidas"
              />
            </div>
            <div className="slide-item">
              <img
                src="http://pngimg.com/uploads/nike/nike_PNG19.png"
                alt="adidas"
              />
            </div>
            <div className="slide-item">
              <img
                src="http://pngimg.com/uploads/adidas/adidas_PNG21.png"
                alt="adidas"
              />
            </div>
            <div className="slide-item">
              <img
                src="http://pngimg.com/uploads/nike/nike_PNG19.png"
                alt="adidas"
              />
            </div>
            <div className="slide-item">
              <img
                src="http://pngimg.com/uploads/adidas/adidas_PNG21.png"
                alt="adidas"
              />
            </div>
            <div className="slide-item">
              <img
                src="http://pngimg.com/uploads/adidas/adidas_PNG21.png"
                alt="adidas"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
