import React, { useState } from "react";
import "./Login.scss";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { MDBAnimation, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import ResetPass from "../ResetPass/ResetPass";
import Axios from "axios";

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = async (values) => {
  console.log(values);

  await Axios.post("http://localhost:3000/profile?q=", values)
    .then((res) => {
      console.log(res.status);
      if (res.status === 201) {
        alert("true");
      }
    })
    .catch((err) => console.log(err));
};
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function Login(props) {
  // const [bColor, setbColor] = useState("black");

  const [state, setstate] = useState({
    modal8: false,
    modal9: false,
  });

  function toggle(nr) {
    let modalNumber = "modal" + nr;
    setstate({
      [modalNumber]: !state[modalNumber],
    });
  }

  return (
    <div>
      <MDBModal
        isOpen={state.modal8}
        toggle={() => {
          toggle(8);
        }}
        fullHeight
        position="right"
      >
        <MDBModalHeader
          toggle={() => {
            toggle(8);
          }}
        ></MDBModalHeader>
        <MDBModalBody>
          <ResetPass />
        </MDBModalBody>
      </MDBModal>
      <MDBAnimation type="fadeInRight">
        <div className="login-wrap-box">
          <div className="login-header-top">
            <h3>Welcome Back!</h3>
            <p>Login to manage your account.</p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="my-2 wrap-box">
                    <div
                      className="item-form-box"
                      style={
                        touched.email && !errors.email
                          ? {
                              // succses
                              border: "1px solid green",
                            }
                          : {
                              border: "1px solid #DCDCDC",
                            }
                      }
                    >
                      <div
                        className="icon-box"
                        style={
                          touched.email && !errors.email
                            ? {
                                // succses
                                borderRight: "1px solid green",
                              }
                            : {
                                borderRight: "1px solid #DCDCDC",
                              }
                        }
                      >
                        <label htmlFor="email">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.00022 9.0232C4.25671 9.0232 0.397461 12.8825 0.397461 17.626C0.397461 17.8324 0.56504 18 0.771506 18C0.977973 18 1.14555 17.8324 1.14555 17.626C1.14555 13.2946 4.66895 9.77125 9.00025 9.77125C13.3316 9.77125 16.855 13.2946 16.855 17.626C16.855 17.8324 17.0225 18 17.229 18C17.4355 18 17.603 17.8324 17.603 17.626C17.603 12.8817 13.7437 9.0232 9.00022 9.0232Z"
                              fill="#DCDCDC"
                            />
                            <path
                              d="M9.0001 0C6.73195 0 4.88574 1.84547 4.88574 4.11436C4.88574 6.38325 6.73198 8.22871 9.0001 8.22871C11.2682 8.22871 13.1145 6.38325 13.1145 4.11436C13.1145 1.84547 11.2683 0 9.0001 0ZM9.0001 7.48066C7.14415 7.48066 5.6338 5.97031 5.6338 4.11436C5.6338 2.2584 7.14415 0.748055 9.0001 0.748055C10.8561 0.748055 12.3664 2.2584 12.3664 4.11436C12.3664 5.97031 10.8561 7.48066 9.0001 7.48066Z"
                              fill="#DCDCDC"
                            />
                          </svg>
                        </label>
                      </div>

                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>

                    <small style={{ color: "red" }}>
                      <ErrorMessage name="email">
                        {(msg) => <div>{msg}</div>}
                      </ErrorMessage>
                    </small>
                  </div>

                  <div className="my-2 wrap-box">
                    <div
                      className="item-form-box"
                      style={
                        touched.password && !errors.password
                          ? {
                              // succses
                              border: "1px solid green",
                            }
                          : {
                              border: "1px solid #DCDCDC",
                            }
                      }
                    >
                      <div
                        className="icon-box"
                        style={
                          touched.password && !errors.password
                            ? {
                                // succses
                                borderRight: "1px solid green",
                              }
                            : {
                                borderRight: "1px solid #DCDCDC",
                              }
                        }
                      >
                        <label htmlFor="email">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.00022 9.0232C4.25671 9.0232 0.397461 12.8825 0.397461 17.626C0.397461 17.8324 0.56504 18 0.771506 18C0.977973 18 1.14555 17.8324 1.14555 17.626C1.14555 13.2946 4.66895 9.77125 9.00025 9.77125C13.3316 9.77125 16.855 13.2946 16.855 17.626C16.855 17.8324 17.0225 18 17.229 18C17.4355 18 17.603 17.8324 17.603 17.626C17.603 12.8817 13.7437 9.0232 9.00022 9.0232Z"
                              fill="#DCDCDC"
                            />
                            <path
                              d="M9.0001 0C6.73195 0 4.88574 1.84547 4.88574 4.11436C4.88574 6.38325 6.73198 8.22871 9.0001 8.22871C11.2682 8.22871 13.1145 6.38325 13.1145 4.11436C13.1145 1.84547 11.2683 0 9.0001 0ZM9.0001 7.48066C7.14415 7.48066 5.6338 5.97031 5.6338 4.11436C5.6338 2.2584 7.14415 0.748055 9.0001 0.748055C10.8561 0.748055 12.3664 2.2584 12.3664 4.11436C12.3664 5.97031 10.8561 7.48066 9.0001 7.48066Z"
                              fill="#DCDCDC"
                            />
                          </svg>
                        </label>
                      </div>

                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>

                    <small style={{ color: "red" }}>
                      <ErrorMessage name="password">
                        {(msg) => <div>{msg}</div>}
                      </ErrorMessage>
                    </small>
                  </div>

                  <div className="forgot-psw waves" waves={true}>
                    <small>
                      {" "}
                      <Link onClick={() => toggle(8)}>Forgot Password</Link>
                    </small>
                  </div>

                  <button type="submit" className="login-submit my-4">
                    LOGIN
                  </button>

                  <div className="sign-up-box my-2">
                    Do not have an account ? <Link> Sign up </Link>
                  </div>

                  <div className="mt-2 d-flex justify-content-center align-content-center align-items-center">
                    <svg
                      width="42"
                      height="1"
                      viewBox="0 0 42 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="4.37114e-08"
                        y1="0.5"
                        x2="42"
                        y2="0.500004"
                        stroke="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="28"
                          y1="0.499975"
                          x2="1.5"
                          y2="0.999969"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#4E5262" />
                          <stop
                            offset="1"
                            stopColor="#4E5262"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>{" "}
                    OR{" "}
                    <svg
                      width="42"
                      height="1"
                      viewBox="0 0 42 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: "rotateZ(180deg)" }}
                    >
                      <line
                        x1="4.37114e-08"
                        y1="0.5"
                        x2="42"
                        y2="0.500004"
                        stroke="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="0"
                          y1="1"
                          x2="42"
                          y2="1.00001"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#4E5262" />
                          <stop
                            offset="1"
                            stopColor="#4E5262"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div
                    className="d-flex justify-content-center my-2"
                    style={{ color: "#B6B5B5" }}
                  >
                    Login with your social account
                  </div>

                  <div className="my-2 d-flex justify-content-between sot-box">
                    <Link className="left-box-sot">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 0H2C0.897 0 0 0.897 0 2V14C0 15.103 0.897 16 2 16H14C15.103 16 16 15.103 16 14V2C16 0.897 15.103 0 14 0Z"
                          fill="#3B5998"
                        />
                        <path
                          d="M13.5 8H11V6C11 5.448 11.448 5.5 12 5.5H13V3H11C9.343 3 8 4.343 8 6V8H6V10.5H8V16H11V10.5H12.5L13.5 8Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                      Facebook
                    </Link>

                    <Link className="right-box-sot">
                      {" "}
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 7.14327C12 6.74254 11.9584 6.43321 11.9004 6.1247H6.12202V8.22876H9.59641C8.98592 12.0647 2.33095 11.7456 2.33095 7.00126C2.33095 3.58481 6.36278 1.9631 8.5607 4.07777L10.2224 2.483C6.45338 -1.04771 0 1.59828 0 7.00126C0 14.9017 12 15.3693 12 7.14327Z"
                          fill="#D14130"
                        />
                      </svg>
                      Google
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </MDBAnimation>
    </div>
  );
}

export default Login;
