import React from "react";
import "./ProductDetailMidInfo.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
function ProductDetailMidInfo() {
  return (
    <div className="product-detail-mid-info">
      <div className="my-product-sec-four">
        <div className="content-top">
          <h2>
            HOT New luxury women watch X1 Series Bluetooth Call Heart Rate
            Monitor ECG Wireless Charging Smartwatch
          </h2>
          <hr />
          <h3>Quick description</h3>
          <p>
            Uwatch3 use a 1 3-Inch large touch screen can track your daily
            exercise like steps counting calorie consumption exercise distance
            and time etc The workouts are recorded by very Fit Pro app
            accurately monitor sleep mass and measure real-time heart rate All
            day
          </p>
        </div>
        <div className="content-bottom">
          <Tabs>
            <TabList>
              <Tab>Technical informations</Tab>
              <Tab>Feedbacks</Tab>
              <Tab>Reviews</Tab>
            </TabList>

            <TabPanel>
              <div className="my-table">
                <table>
                  <tr>
                    <th>Product Dimensions</th>
                    <td>1.65 x 1.45 x 0.47 inches</td>
                  </tr>
                  <tr>
                    <th>Item Weight</th>
                    <td>1.23 ounces</td>
                  </tr>
                  <tr>
                    <th>ASIN</th>
                    <td>B0824PRRWC</td>
                  </tr>
                  <tr>
                    <th>Item model number</th>
                    <td>UMIDIGI</td>
                  </tr>
                  <tr>
                    <th>OS</th>
                    <td>
                      IOS 8.0/Android 4.4 or above and Bluetooth 4.0 or later
                    </td>
                  </tr>
                  <tr>
                    <th>Wireless communication technologies</th>
                    <td>Bluetooth</td>
                  </tr>
                  <tr>
                    <th>Connectivity technologies</th>
                    <td>Bluetooth, GPS</td>
                  </tr>
                  <tr>
                    <th>GPS</th>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th>Additional Features</th>
                    <td>Sports-and-exercise, Water-resistant, IOS, Android</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMidInfo;
