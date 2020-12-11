import React, { useState, useEffect } from "react";
import "./ProductDetailLeftSilder.scss";
import Slider from "react-slick";
function ProductDetailLeftSlider() {
  const [nav, setNav] = useState({ nav1: null, nav2: null });
  let slider1;
  let slider2;

  useEffect(() => {
    const someFunc = () => {
      const myNav = {
        nav1: slider1,
        nav2: slider2,
      };
      setNav(myNav);
    };

    someFunc();
  }, []);
  return (
    <div className="product-detail-left-slider">
      {" "}
      <div className="my-product-sec-tree">
        <div className="my-product-list">
          <div>
            <Slider asNavFor={nav.nav2} ref={(slider) => (slider1 = slider)}>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://img.kentfaith.com/cache/catalog/products/us/GW01.0147/GW01.0147-1-518x518.jpg"
                    alt="img1"
                  ></img>
                </div>
              </div>
              <div className="my-product-img">
                <img
                  src="https://i.pinimg.com/originals/47/32/d6/4732d61092c8e271c55716b04ddb8533.jpg"
                  alt="img2"
                ></img>
              </div>
              <div className="my-product-img">
                <img
                  src="https://www.gearbestcoupondeals.com/wp-content/uploads/2019/08/Alfawise-S16-HD-Color-Display-Blood-Pressure-Heart-Rate-Smart-Watch-788x812.jpg"
                  alt="img3"
                ></img>
              </div>
              <div className="my-product-img">
                <img
                  src="https://img.gkbcdn.com/s3/p/2019-07-19/kw19-smartwatch-1-3-inch-tft-hd-screen-bluetooth-4-0-black-1571989652618.jpg"
                  alt="img4"
                ></img>
              </div>
              <div className="my-product-img">
                <img
                  src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                  alt="img5"
                ></img>
              </div>
              <div className="my-product-img">
                <img
                  src="https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/2C/89/463f2b7e-0326-41ba-829d-3f386e606abf.jpg"
                  alt="img5"
                />
              </div>
            </Slider>
            <Slider
              asNavFor={nav.nav1}
              ref={(slider) => (slider2 = slider)}
              slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://img.kentfaith.com/cache/catalog/products/us/GW01.0147/GW01.0147-1-518x518.jpg"
                    alt="img11"
                  ></img>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://i.pinimg.com/originals/47/32/d6/4732d61092c8e271c55716b04ddb8533.jpg"
                    alt="img12"
                  ></img>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://www.gearbestcoupondeals.com/wp-content/uploads/2019/08/Alfawise-S16-HD-Color-Display-Blood-Pressure-Heart-Rate-Smart-Watch-788x812.jpg"
                    alt="img13"
                  ></img>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://img.gkbcdn.com/s3/p/2019-07-19/kw19-smartwatch-1-3-inch-tft-hd-screen-bluetooth-4-0-black-1571989652618.jpg"
                    alt="img14"
                  ></img>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="img15"
                  ></img>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/2C/89/463f2b7e-0326-41ba-829d-3f386e606abf.jpg"
                    alt="img16"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailLeftSlider;
