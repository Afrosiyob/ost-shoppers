import React, { useState } from "react";
import "./CardPageLeft.scss";
const arry = [
  {
    id: 1,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 4,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 5,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 6,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 7,
    name: "Nike Air Force 1 '07 LX",
    price: 1100,
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
];

function CardPageLeft(props) {
  // const price = 110;
  const [productCount, setProductCount] = useState(false);

  function handleSummChange(value) {
    props.onChange(value);
  }

  setTimeout(() => {
    handleSummChange(123456789);
  }, 1000);

  const hundleClick = (id, item) => {
    if (item === 1) {
      arry.forEach((element) => {
        if (element.id === id) element.count = element.count + 1;
      });
      setProductCount(!productCount);
      console.log(arry);
      return;
    }
    if (item === 0) {
      arry.forEach((element) => {
        if (element.id === id && element.count !== 0)
          element.count = element.count - 1;
      });
      setProductCount(!productCount);
      return;
    }

    return;
  };
  return (
    <div className="cart-page-one mt-5">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />
      <div className="my-cart-container">
        <div className="product-menu">
          <div>PRODUCT</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>TOTAL</div>
        </div>
        <div>
          {arry.map((element) => {
            return (
              <div key={element.id} className="product-one-list">
                <div>
                  <div>
                    <img
                      src="https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg"
                      alt="wfwefcwef"
                    />
                  </div>
                  <h4>{element.name}</h4>
                  <p>
                    <p>${element.price}.00</p>
                    <div className="a-none">
                      <div className="my-count-product">
                        <div
                          onClick={() => {
                            hundleClick(element.id, 0);
                          }}
                        >
                          <i class="fa fa-minus"></i>
                        </div>
                        <div>{element.count}</div>
                        <div
                          onClick={() => {
                            hundleClick(element.id, 1);
                          }}
                        >
                          <i class="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  </p>
                  <div className="b-none">
                    <div className="my-count-product">
                      <div
                        onClick={() => {
                          hundleClick(element.id, 0);
                        }}
                      >
                        <i class="fa fa-minus"></i>
                      </div>
                      <div>{element.count}</div>
                      <div
                        onClick={() => {
                          hundleClick(element.id, 1);
                        }}
                      >
                        <i class="fa fa-plus"></i>
                      </div>
                    </div>
                  </div>
                  <div className="ma-txt">
                    <p>${element.count * element.price}.00</p>
                    <div className="product-delete a-none">
                      <i class="fal fa-trash-alt"></i>
                    </div>
                  </div>
                  <div className="product-delete b-none">
                    <i class="fal fa-trash-alt"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardPageLeft;
