import React from "react";
import "./CardPageRight.scss";
function CardPageRight() {
  return (
    <div className="cart-page-two mt-5">
      <div className="cart-page-two-container">
        <h2>Cart totals</h2>
        <div className="my-grid my-p-bottom">
          <div>Subtotal</div>
          <div className="x-text-m">$1,785.00</div>
        </div>
        <div className="my-grid my-p-bottom">
          <div>Shipping</div>
          <div className="x-text-l">
            Flat Rate: $300.00
            <p>Calculate Shipping</p>
          </div>
        </div>
        <div className="my-grid">
          <div>Total</div>
          <div className="x-text-m">$2,085.00</div>
        </div>
        <div className="my-input">
          <input type="text" placeholder="Coupon code" />
          <div>APPLY</div>
        </div>
        <div className="update-cart">update cart</div>
        <div className="ckeckout-now">ckeckout now</div>
      </div>
    </div>
  );
}

export default CardPageRight;
