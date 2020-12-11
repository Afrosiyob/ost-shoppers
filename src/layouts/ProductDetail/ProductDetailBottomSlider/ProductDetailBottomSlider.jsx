import React from "react";
import "./ProductDetailBottomSilder.scss";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
function ProductDetailBottomSlider() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="product-detail-bottom-slider">
      <div className="my-product-sec-six">
        <div className="border-bottom-hr">
          <div>Related products</div>
          <div></div>
        </div>
        <div className="my-slaydir-container">
          <div>
            <Slider {...settings}>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="wfewfwe"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          value={3}
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this iswefcewfcew"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this iwefewfew"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this isolbhobgug"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this is wefcwefcew"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this isfcwefcewfew"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this iswefwefwe"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this iswfwefwe"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this isfwefwefwe"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this is fwefwefwe"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this is wefcwesfcwe"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this isgvfwegvwegvew"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-product-img">
                <div className="my-img-box">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1akWIXtfvK1RjSspoq6zfNpXaG/Teamyo-E28-Smart-Watch-HD-Color-Screen-Fitness-Bracelet-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Smartwatch.jpg"
                    alt="this iswfgvewfgvew"
                  ></img>
                  <div className="my-rating">
                    <div className="my-rating-1">
                      <p>Smart watches</p>
                      <h3>UMIDIGI Uwatch 2S</h3>
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <div className="my-rating-2">
                      <p>
                        <strike>$352.14</strike>
                      </p>
                      <p>$347.85</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailBottomSlider;
