import { MDBContainer } from "mdbreact";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RightModal from "../../RightModal/RightModal";
import $ from "jquery";
import SearchBox from "./SearchBox/SearchBox";

import "./TopNavTwo.scss";
import { useEffect } from "react";

function TopNavTwo() {
  const [salom, setSalom] = useState(false);
  const [hello, setHello] = useState({
    componentName: "Login",
    nameBtn: "Sign in",
    iconName: "sign-in",
  });

  const callHandle = (item) => {
    setHello({
      componentName: item.componentName,
      nameBtn: item.nameBtn,
      iconName: item.iconName,
    });
    setSalom(!salom);
  };

  useEffect(() => {
    $(".right-nav-icons").click(function () {
      $(".sign-dropdown").slideToggle();
    });
  }, []);

  return (
    <div className="wrap-nav-two">
      <MDBContainer>
        <div className="top-nav-two">
          <div className="left-nav">
            <Link to="/">
              beshop<span>.</span>{" "}
            </Link>
          </div>
          <div className="mid-nav">
            <SearchBox />
          </div>
          <RightModal componentName={hello.componentName} isBoolen={salom} />{" "}
          <div className="right-nav">
            <div className="right-nav-icons user">
              {/* <div className="d-flex">
                <div className="mr-2">
                  <span
                    onClick={() =>
                      callHandle({
                        componentName: "Login",
                        nameBtn: "Sign in",
                        iconName: "sign-in",
                      })
                    }
                  >
                    sing in
                  </span>
                  <div>
                    <RightModal
                      componentName={hello.componentName}
                      isBoolen={salom}
                    />{" "}
                  </div>
                </div>
                <div className="mr-2">
                  <span
                    onClick={() =>
                      callHandle({
                        componentName: "SignUp",
                        nameBtn: "Sign up",
                        iconName: "sign-up",
                      })
                    }
                  >
                    sing up
                  </span>
                </div>
              </div> */}

              <div className="mob-sign">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4747 17.8797C19.9589 16.6579 19.2103 15.5481 18.2708 14.6121C17.3341 13.6734 16.2244 12.925 15.0032 12.4082C14.9923 12.4027 14.9813 12.4 14.9704 12.3945C16.6739 11.1641 17.7813 9.15977 17.7813 6.89844C17.7813 3.15234 14.7462 0.117188 11.0001 0.117188C7.25397 0.117188 4.21882 3.15234 4.21882 6.89844C4.21882 9.15977 5.32624 11.1641 7.02976 12.3973C7.01882 12.4027 7.00788 12.4055 6.99694 12.4109C5.77194 12.9277 4.67272 13.6688 3.72937 14.6148C2.79068 15.5516 2.04227 16.6612 1.52546 17.8824C1.01775 19.078 0.743925 20.3599 0.718818 21.6586C0.718089 21.6878 0.723207 21.7168 0.733873 21.744C0.744539 21.7712 0.760537 21.7959 0.780923 21.8168C0.801309 21.8377 0.825671 21.8543 0.852574 21.8657C0.879476 21.877 0.908376 21.8828 0.937568 21.8828H2.57819C2.69851 21.8828 2.79421 21.7871 2.79694 21.6695C2.85163 19.5586 3.69929 17.5816 5.19772 16.0832C6.74812 14.5328 8.8071 13.6797 11.0001 13.6797C13.193 13.6797 15.252 14.5328 16.8024 16.0832C18.3008 17.5816 19.1485 19.5586 19.2032 21.6695C19.2059 21.7898 19.3016 21.8828 19.4219 21.8828H21.0626C21.0918 21.8828 21.1207 21.877 21.1476 21.8657C21.1745 21.8543 21.1988 21.8377 21.2192 21.8168C21.2396 21.7959 21.2556 21.7712 21.2663 21.744C21.2769 21.7168 21.282 21.6878 21.2813 21.6586C21.254 20.3516 20.9833 19.0801 20.4747 17.8797ZM11.0001 11.6016C9.74499 11.6016 8.56374 11.1121 7.67507 10.2234C6.7864 9.33477 6.29694 8.15352 6.29694 6.89844C6.29694 5.64336 6.7864 4.46211 7.67507 3.57344C8.56374 2.68477 9.74499 2.19531 11.0001 2.19531C12.2551 2.19531 13.4364 2.68477 14.3251 3.57344C15.2137 4.46211 15.7032 5.64336 15.7032 6.89844C15.7032 8.15352 15.2137 9.33477 14.3251 10.2234C13.4364 11.1121 12.2551 11.6016 11.0001 11.6016Z"
                    fill="#4E5262"
                  />
                </svg>
                <div className="sign-dropdown">
                  <div
                    className="sign-span rounded-pill text-uppercase text-muted font-weight-bold"
                    onClick={() =>
                      callHandle({
                        componentName: "Login",
                        nameBtn: "Sign in",
                        iconName: "sign-in",
                      })
                    }
                  >
                    sing in
                  </div>
                  <br />
                  <div
                    className="sign-span rounded-pill text-uppercase text-muted font-weight-bold"
                    onClick={() =>
                      callHandle({
                        componentName: "SignUp",
                        nameBtn: "Sign up",
                        iconName: "sign-up",
                      })
                    }
                  >
                    sing up
                  </div>
                </div>
              </div>
            </div>

            <div className="right-nav-icons">
              <span className="counter">1</span>
              <svg
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.125 11.5C0.78125 8.37501 1.5625 3.68751 5.46875 2.12501C9.375 0.562505 11.7188 3.68751 12.5 5.25001C13.2812 3.68751 16.4062 0.562505 20.3125 2.12501C24.2188 3.68751 24.2188 8.37501 21.875 11.5C19.5312 14.625 12.5 20.875 12.5 20.875C12.5 20.875 5.46875 14.625 3.125 11.5Z"
                  stroke="#4E5262"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="right-nav-icons">
              <span className="counter">1</span>
              <svg
                width="19"
                height="23"
                viewBox="0 0 19 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9375 6.22656H14.3516V5.80469C14.3516 3.12578 12.1789 0.953125 9.5 0.953125C6.82109 0.953125 4.64844 3.12578 4.64844 5.80469V6.22656H1.0625C0.595801 6.22656 0.21875 6.60361 0.21875 7.07031V21.2031C0.21875 21.6698 0.595801 22.0469 1.0625 22.0469H17.9375C18.4042 22.0469 18.7812 21.6698 18.7812 21.2031V7.07031C18.7812 6.60361 18.4042 6.22656 17.9375 6.22656ZM6.54688 5.80469C6.54688 4.17256 7.86787 2.85156 9.5 2.85156C11.1321 2.85156 12.4531 4.17256 12.4531 5.80469V6.22656H6.54688V5.80469ZM16.8828 20.1484H2.11719V8.125H4.64844V10.4453C4.64844 10.5613 4.74336 10.6562 4.85938 10.6562H6.33594C6.45195 10.6562 6.54688 10.5613 6.54688 10.4453V8.125H12.4531V10.4453C12.4531 10.5613 12.548 10.6562 12.6641 10.6562H14.1406C14.2566 10.6562 14.3516 10.5613 14.3516 10.4453V8.125H16.8828V20.1484Z"
                  fill="#4E5262"
                />
              </svg>
            </div>

            <div className="summ">1257 364 UZS</div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}

export default TopNavTwo;
