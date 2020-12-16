import React from "react";
import "./HomeTabOne.scss";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
function HomeTabOne() {
  return (
    <div className="home-tab-one">
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>

        <TabPanel>
          <div className="productslist">
            <div className="content">
              <div className="prodlist-tabs">
                <div className="prodlist">
                  <div className="box">
                    <Link to="/productdetail/1">
                      <div className="border"></div>
                      <div className="container">
                        <h5>147 000 UZS</h5>
                        <p>GoGo Girl Short Jacket</p>
                      </div>
                    </Link>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default HomeTabOne;
