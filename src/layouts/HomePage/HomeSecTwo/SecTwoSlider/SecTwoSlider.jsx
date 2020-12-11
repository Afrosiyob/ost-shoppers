import React, { Component } from "react";
import Slider from "react-slick";
import "./SecTwoSlider.scss";
export default class SecTwoSlider extends Component {
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
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };
    return (
      <div className="sec-two-slide-box">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div key={1}>
            <div className="slide-item">
              <span className="sale-box">36%</span>
              <img
                src="https://cdn.thewirecutter.com/wp-content/uploads/2020/05/androidphones-lowres--630x420.jpg "
                alt="ewgf"
              />
              <h5>Mobile phone</h5>
              <p>268 products avalible</p>
            </div>
          </div>
          <div key={2}>
            <div className="slide-item">
              <span className="sale-box">36%</span>
              <img
                src="https://cdn.thewirecutter.com/wp-content/uploads/2020/05/androidphones-lowres--630x420.jpg "
                alt="ewgf"
              />
              <h5>Mobile phone</h5>
              <p>268 products avalible</p>
            </div>
          </div>
          <div key={3}>
            <div className="slide-item">
              <span className="sale-box">36%</span>
              <img
                src="https://cdn.thewirecutter.com/wp-content/uploads/2020/05/androidphones-lowres--630x420.jpg "
                alt="ewgf"
              />
              <h5>Mobile phone</h5>
              <p>268 products avalible</p>
            </div>
          </div>
          <div key={4}>
            <div className="slide-item">
              <span className="sale-box">36%</span>
              <img
                src="https://cdn.thewirecutter.com/wp-content/uploads/2020/05/androidphones-lowres--630x420.jpg "
                alt="ewgf"
              />
              <h5>Mobile phone</h5>
              <p>268 products avalible</p>
            </div>
          </div>
          <div key={5}>
            <div className="slide-item">
              <span className="sale-box">36%</span>
              <img
                src="https://cdn.thewirecutter.com/wp-content/uploads/2020/05/androidphones-lowres--630x420.jpg "
                alt="ewgf"
              />
              <h5>Mobile phone</h5>
              <p>268 products avalible</p>
            </div>
          </div>
          <div key={6}>
            <div className="slide-item">
              <span className="sale-box">36%</span>
              <img
                src="https://cdn.thewirecutter.com/wp-content/uploads/2020/05/androidphones-lowres--630x420.jpg "
                alt="ewgf"
              />
              <h5>Mobile phone</h5>
              <p>268 products avalible</p>
            </div>
          </div>
        </Slider>
        {/* <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div> */}
      </div>
    );
  }
}
