import "./Footer.scss";

import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBAnimation,
} from "mdbreact";

const Footer = () => {
  // scrollToTop = () => window.scrollTo(0, 0);

  return (
    <MDBAnimation type="fadeInUp">
      <MDBFooter className="font-small pt-4 mt-4 footer-box">
        <MDBContainer className="text-md-left footer-top-box pb-3">
          <MDBRow>
            <MDBCol md="5">
              <h1 className="title mb-3">
                beshop<span>.</span>
              </h1>
              <p>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 13.3975C8.95844 13.3975 9.33008 13.0258 9.33008 12.5674C9.33008 12.1089 8.95844 11.7373 8.5 11.7373C8.04156 11.7373 7.66992 12.1089 7.66992 12.5674C7.66992 13.0258 8.04156 13.3975 8.5 13.3975Z"
                    fill="#4E5262"
                  />
                  <path
                    d="M8.5 0C3.80229 0 0 3.80166 0 8.5C0 13.1977 3.80166 17 8.5 17C13.1977 17 17 13.1983 17 8.5C17 3.80229 13.1983 0 8.5 0ZM8.5 15.6719C4.53631 15.6719 1.32812 12.4642 1.32812 8.5C1.32812 4.53631 4.53578 1.32812 8.5 1.32812C12.4637 1.32812 15.6719 4.53578 15.6719 8.5C15.6719 12.4637 12.4642 15.6719 8.5 15.6719Z"
                    fill="#4E5262"
                  />
                  <path
                    d="M8.5 4.2666C7.03534 4.2666 5.84375 5.4582 5.84375 6.92285C5.84375 7.28961 6.14105 7.58691 6.50781 7.58691C6.87457 7.58691 7.17188 7.28961 7.17188 6.92285C7.17188 6.19052 7.76767 5.59473 8.5 5.59473C9.23233 5.59473 9.82812 6.19052 9.82812 6.92285C9.82812 7.65518 9.23233 8.25098 8.5 8.25098C8.13324 8.25098 7.83594 8.54828 7.83594 8.91504V10.5752C7.83594 10.942 8.13324 11.2393 8.5 11.2393C8.86676 11.2393 9.16406 10.942 9.16406 10.5752V9.49506C10.3084 9.19946 11.1562 8.15831 11.1562 6.92285C11.1562 5.4582 9.96466 4.2666 8.5 4.2666Z"
                    fill="#4E5262"
                  />
                </svg>
                Got questions? Call us 24/7!
              </p>
              <div className="buttons my-2">
                <a href="#!" className="left-btn">
                  <MDBBtn color="primary">(800) 8001-8588</MDBBtn>
                </a>
                <a href="#!" className="right-btn">
                  <MDBBtn color="amber">help@beshop.uz</MDBBtn>
                </a>
              </div>

              <div className="location-box mb-3">
                <p>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C5.21989 0 2.14453 3.07536 2.14453 6.85547C2.14453 9.29573 2.88686 10.2743 6.45402 14.9769C7.07323 15.7932 7.77509 16.7184 8.57812 17.7891C8.67772 17.9218 8.83403 18 9.00004 18C9.16604 18 9.32231 17.9218 9.42191 17.789C10.2202 16.7241 10.919 15.8024 11.5356 14.9892C15.1114 10.273 15.8555 9.29152 15.8555 6.85547C15.8555 3.07536 12.7801 0 9 0ZM10.6952 14.352C10.1888 15.0199 9.62705 15.7609 8.99989 16.5946C8.36845 15.7555 7.80349 15.0107 7.29429 14.3395C3.82444 9.76521 3.19922 8.94097 3.19922 6.85547C3.19922 3.65692 5.80145 1.05469 9 1.05469C12.1986 1.05469 14.8008 3.65692 14.8008 6.85547C14.8008 8.93689 14.1739 9.76366 10.6952 14.352Z"
                      fill="#4E5262"
                    />
                    <path
                      d="M9 3.16406C6.96456 3.16406 5.30859 4.82003 5.30859 6.85547C5.30859 8.89091 6.96456 10.5469 9 10.5469C11.0354 10.5469 12.6914 8.89091 12.6914 6.85547C12.6914 4.82003 11.0354 3.16406 9 3.16406ZM9 9.49219C7.54611 9.49219 6.36328 8.30936 6.36328 6.85547C6.36328 5.40158 7.54611 4.21875 9 4.21875C10.4539 4.21875 11.6367 5.40158 11.6367 6.85547C11.6367 8.30936 10.4539 9.49219 9 9.49219Z"
                      fill="#4E5262"
                    />
                  </svg>
                  Location:
                </p>
                <p className="ml-3">
                  <em>17 Princess Road, London, Greater London NW1 8JR, UK</em>
                </p>
              </div>
              <div className="sot-box">
                <a href="#!" waves="true">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" waves="true">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#!" waves="true">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">Customer Services</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Help Center</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Contact Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Report Abuse</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Submit & Dispute</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Policies & Rules</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Get Paid for Your Feedback </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Sell on beshop</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Supplier Memberships</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!"> Learning Center</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!"> Partner Program</a>
                </li>
              </ul>
              <h5 className="title">Buy on beshop</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">All Categories</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!"> Request for Quotation</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!"> Ready to Ship</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3 footer-under-box">
          <MDBContainer>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </MDBAnimation>
  );
};

export default Footer;
