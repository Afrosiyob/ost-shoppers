import React from "react";
import "./HomeTabTwo.scss";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function HomeTabTwo() {
  const { t } = useTranslation();
  return (
    <div className="home-tab-two">
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
                  <div className="box box1">
                    <Link to="/productdetail/1">
                      <div className="border"></div>
                      <div className="container">
                        <h5>147 000 UZS</h5>
                        <p>GoGo Girl Short Jacket</p>
                      </div>
                    </Link>
                  </div>

                  <div className="box box2">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box3">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box4">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box5">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box6">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box7">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box8">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box9">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box10">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box11">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box12">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box13">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box14">
                    <div className="border"></div>
                    <div className="container">
                      <h5>147 000 UZS</h5>
                      <p>GoGo Girl Short Jacket</p>
                    </div>
                  </div>

                  <div className="box box15">
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

export default HomeTabTwo;
