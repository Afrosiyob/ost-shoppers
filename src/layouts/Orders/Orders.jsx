import React from "react";
import "./Orders.scss";
import ReactStars from "react-rating-stars-component";

const arry = [
  {
    id: 1,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 4,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 5,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 6,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
  {
    id: 7,
    name: "Nike Air Force 1 '07 LX",
    price: "SHIPPED",
    count: 1,
    img:
      "https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg",
  },
];

function Orders() {
  // const [productCount, setProductCount] = useState(false);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  // const hundleClick = (id, item) => {
  //   if (item === 1) {
  //     arry.forEach((element) => {
  //       if (element.id === id) element.count = element.count + 1;
  //     });
  //     setProductCount(!productCount);
  //     console.log(arry);
  //     return;
  //   }
  //   if (item === 0) {
  //     arry.forEach((element) => {
  //       if (element.id === id && element.count !== 0)
  //         element.count = element.count - 1;
  //     });
  //     setProductCount(!productCount);
  //     return;
  //   }

  //   return;
  // };
  return (
    <div>
      <div className="cart-page-one-1">
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <div className="my-cart-container">
          <div className="product-menu">
            <div>PRODUCT</div>
            <div>STATUS</div>
            <div>ARRIVED ON</div>
          </div>
          <div>
            {arry.map((element) => {
              return (
                <div key={element.id} className="product-one-list">
                  <div>
                    <div>
                      <img
                        src="https://unimall.az/images/detailed/280/05db4b29-0b74-4e6b-acd4-fc504be73f83.jpg"
                        alt="fwefwef"
                      />
                    </div>
                    <h4>
                      {element.name}
                      <div>
                        <ReactStars
                          count={5}
                          onClick={ratingChanged}
                          size={18}
                          activeColor="#ffd700"
                        />
                      </div>
                    </h4>
                    <p>
                      <p className="bg-color-bz">{element.price}</p>
                      <div className="a-none">14 Jul. 2020 - 14:27 PM</div>
                    </p>
                    <div className="b-none">14 Jul. 2020 - 14:27 PM</div>
                    {/* <div className="ma-txt">
                                    <p></p>
                                </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
