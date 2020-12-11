import React, { useState } from "react";

import "./Dashboard.scss";

function Dashboard() {
  const [defBef, setDefBef] = useState(2);

  function hundleClick(item) {
    setDefBef(item);
  }

  return (
    <div>
      <div className="my-dashboard-page-one">
        <div className="my-dashboard-page-one-container">
          <h3 className="top-txt">Quick informations</h3>

          <div className="dashboard-page-one-box">
            <div className="dashboard-box">
              <div>14</div>
              <p>Total orders</p>
            </div>
            <div className="dashboard-box">
              <div>12</div>
              <p>Shipped item</p>
            </div>
            <div className="dashboard-box">
              <div>2</div>
              <p>Backtracks</p>
            </div>
            <div className="dashboard-box">
              <div>8</div>
              <p>Winned coupons</p>
            </div>
            <div className="dashboard-box">
              <div>21%</div>
              <p>Last sale</p>
            </div>
            <div className="dashboard-box">
              <div>47</div>
              <p>Total reviews</p>
            </div>
          </div>

          <div className="content-ditalis">
            <div className="content-ditalis-one">
              <h3>Recent order status</h3>
              <div className="content-ditalis-one-left">
                <div className="submit-cl">
                  <div>
                    <div
                      className={`bef ${defBef === 1 ? "bef-block" : ""}`}
                      onClick={() => hundleClick(1)}
                    ></div>
                    <div
                      className={`def ${defBef === 1 ? "def-block" : ""}`}
                    ></div>
                  </div>
                  <div>
                    <h3>[Shenzhen] Data received</h3>
                    <p>28 Aug 2020 22:09</p>
                  </div>
                </div>
                <div className="submit-cl">
                  <div>
                    <div
                      className={`bef ${defBef === 2 ? "bef-block" : ""}`}
                      onClick={() => hundleClick(2)}
                    ></div>
                    <div
                      className={`def ${defBef === 2 ? "def-block" : ""}`}
                    ></div>
                  </div>
                  <div>
                    <h3>Yo’lda</h3>
                    <p>28 Aug 2020 16:09</p>
                  </div>
                </div>
                <div className="submit-cl">
                  <div>
                    <div
                      className={`bef ${defBef === 3 ? "bef-block" : ""}`}
                      onClick={() => hundleClick(3)}
                    ></div>
                    <div
                      className={`def ${defBef === 3 ? "def-block" : ""}`}
                    ></div>
                  </div>
                  <div>
                    <h3>Order picking & packing</h3>
                    <p>28 Aug 2020 16:09</p>
                  </div>
                </div>
                <div className="submit-cl">
                  <div>
                    <div
                      className={`bef ${defBef === 4 ? "bef-block" : ""}`}
                      onClick={() => hundleClick(4)}
                    ></div>
                    <div
                      className={`def ${defBef === 4 ? "def-block" : ""}`}
                    ></div>
                  </div>
                  <div>
                    <h3>Awaiting order picking</h3>
                    <p>28 Aug 2020 16:09</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-ditalis-two">
              <h3>Product details</h3>
              <div className="content-ditalis-one-right">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg"
                  alt=""
                />
                <h2>
                  <span>Men's Shoe</span>
                  <br />
                  Nike Sky Force 3/4
                </h2>
                <p>
                  Wear the past in the Nike Sky Force 3/4, updated with modern
                  comfort and details to bring you to the present. Leather on
                  the upper is paired with color-popped details that highlight
                  the OG design for a sweet off-court look.
                </p>
                <div className="fot-size-color">
                  <div className="fot-size">
                    <div>Size:</div>
                    <div>44</div>
                  </div>
                  <div className="fot-color">
                    <div>Color[White]</div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
