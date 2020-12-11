import { MDBAnimation, MDBContainer } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./ProductTab.scss";

function ProductTab() {
  return (
    <div className="my-3">
      <MDBAnimation type="fadeInUp">
        <MDBContainer>
          <div className="product-tab">
            <Tabs>
              <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
              </TabList>

              <TabPanel>
                <div className="productslist">
                  <div className="content">
                    <div className="prodlist-tabs">
                      <div className="prodlist">
                        <Link to="/productdetail/1">
                          <div className="box box1">
                            <div className="border"></div>
                            <div className="container">
                              <h5>147 000 UZS</h5>
                              <p>GoGo Girl Short Jacket</p>
                            </div>
                          </div>
                        </Link>

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
                        <div className="box box15">
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
                        <div className="box box15">
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
                        <div className="box box15">
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
                <div className="load-more my-3">
                  <button className="load-more">load More</button>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
                <div className="load-more my-3">
                  <button className="load-more">load More</button>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </MDBContainer>
      </MDBAnimation>
    </div>
  );
}

export default ProductTab;
