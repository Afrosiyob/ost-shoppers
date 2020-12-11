import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import "./ProductUnderTab.scss";

function ProductUnderTab() {
  return (
    <div>
      <MDBAnimation reveal type="fadeInUp">
        <MDBContainer>
          <div className="product-under-tab">
            <div className="bg-shadow-box">
              <div className="left-box">
                <h3>Subscribe to store products</h3>
                <p>
                  Subscribe to store news to instantly histories of each new
                  product.
                </p>
              </div>
              <div className="right-box">
                <form action="#!">
                  <input type="email" placeholder="Enter email address" />
                  <button type="submit" className="text-uppercase">
                    subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </MDBContainer>
      </MDBAnimation>
    </div>
  );
}

export default ProductUnderTab;
