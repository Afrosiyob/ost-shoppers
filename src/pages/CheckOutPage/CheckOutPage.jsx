import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import "./CheckOutPage.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
// import { MDBAnimation } from "mdbreact";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import OtherPageNav from "../../components/TopNav/OtherPageNav/OtherPageNav";

const initialValues = {
  firstName: "",
  lastName: "",
  companyName: "",
  country: "",
  streetAddress: "",
  aptSuit: "",
  city: "",
  postcodeZip: "",
  state: "",
  email: "",
  phone: "",
  createAnAccount: false,
  createAnAccountTwo: false,
  orderNotes: "",
  productName: "adidas",
  productPrice: "300$",
  productCount: 5,
  subtotal: 1500,
  shipping: 300,
  total: 1800,
  payment: "",
  readAgree: false,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required !"),
  lastName: Yup.string().required("Required !"),

  country: Yup.string().required("Required !"),
  streetAddress: Yup.string().required("Required !"),
  aptSuit: Yup.string().required("Required !"),
  city: Yup.string().required("Required !"),
  postcodeZip: Yup.string().required("Required !"),
  state: Yup.string().required("Required !"),
  email: Yup.string().email("Invalid email").required("Required !"),
  phone: Yup.string()
    .min(7, "Too short!")
    .max(20, "Too Long!")
    .required("Required !"),
  payment: Yup.string().required("Required!"),

  // payment: Yup.string().required("Required !"),
  // readAgree: Yup.string().required("Required !"),
});

function CheckOutPage() {
  return (
    <div className="check-out-page">
      <OtherPageNav />
      <MDBContainer>
        <div className="my-5 w-100 pt-5">
          <h1 className="w-100 text-center font-weight-bold">
            Your selected products
          </h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <h3 className="text-uppercase font-weight-bold">
                billing detail
              </h3>
              <MDBRow>
                <MDBCol md="8" sm="12">
                  <MDBRow>
                    <MDBCol md="6" sm="12">
                      <div>
                        <label htmlFor="firstName">
                          <small>
                            <b>First Name</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="firstName">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" sm="12">
                      <div>
                        <label htmlFor="lastName">
                          <small>
                            <b>Last Name</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="lastName">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <div className="mt-3">
                        <label htmlFor="companyName">
                          <small>
                            <b> Company Name (Optional)</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="companyName"
                          name="companyName"
                          placeholder="Company Name"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="mt-3">
                        <label htmlFor="country">
                          <small>
                            <b>Country</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="country"
                          name="country"
                          placeholder="Country"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="country">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="8" sm="12">
                      <div className="mt-3">
                        <label htmlFor="streetAddress">
                          <small>
                            <b>Street Address</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="streetAddress"
                          name="streetAddress"
                          placeholder="Street Address"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="streetAddress">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <div className="mt-3">
                        <label htmlFor="aptSuit">
                          <small>
                            <b>Apt, Suite, Etc.</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="aptSuit"
                          name="aptSuit"
                          placeholder="Apt, Suite, Etc..."
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="aptSuit">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="5" sm="12">
                      <div className="mt-3">
                        {/* <label htmlFor=""></label>
                        <Field
                          className="form-control"
                          type=""
                          id=""
                          name=""
                          placeholder=""
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small> */}

                        <label htmlFor="city">
                          <small>
                            <b>City</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="city"
                          name="city"
                          placeholder="City"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="city">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="7" sm="12">
                      <div className="mt-3">
                        {" "}
                        <label htmlFor="postcodeZip">
                          <small>
                            <b>Postcode/Zip</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="postcodeZip"
                          name="postcodeZip"
                          placeholder="Postcode/Zip"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="postcodeZip">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="mt-3">
                        {" "}
                        <label htmlFor="state">
                          <small>
                            <b>State</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="texxt"
                          id="state"
                          name="state"
                          placeholder="State"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="state">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" sm="12">
                      <div className="mt-3">
                        {" "}
                        <label htmlFor="email">
                          <small>
                            <b>Email Address</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="email">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" sm="12">
                      <div className="mt-3">
                        {" "}
                        <label htmlFor="phone">
                          <small>
                            <b>Phone</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="phone"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                        />
                        <small style={{ color: "red" }}>
                          <ErrorMessage name="phone">
                            {(msg) => <div>{msg}</div>}
                          </ErrorMessage>
                        </small>
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBCol md="12">
                    <div className="mt-3">
                      <Field
                        type="checkbox"
                        id="createAnAccount"
                        name="createAnAccount"
                      />
                      <label className="ml-3" htmlFor="createAnAccount">
                        <div className="d-flex flex-column">
                          <p className="m-0 p-0">
                            <b>Create An Account?</b>
                          </p>
                          <small>
                            * If you select this option, an account will be
                            opened for you based on the information you entered
                            above.
                          </small>
                        </div>
                      </label>
                    </div>
                  </MDBCol>
                  <div className="my-3">
                    <hr />
                  </div>

                  <h3 className="text-uppercase font-weight-bold">
                    Shipping Details details
                  </h3>

                  <MDBCol md="12">
                    <div className="mt-3">
                      <Field
                        type="checkbox"
                        id="createAnAccountTwo"
                        name="createAnAccountTwo"
                      />
                      <label className="ml-3" htmlFor="createAnAccountTwo">
                        <div className="d-flex flex-column">
                          <p className="m-0 p-0">
                            <b>Create An Account ?</b>
                          </p>
                        </div>
                      </label>
                    </div>
                  </MDBCol>

                  <div className="my-3">
                    <label htmlFor="orderNotes">
                      <small>
                        <b>Order Notes (Optional)</b>
                      </small>{" "}
                    </label>
                    <Field
                      className="form-control"
                      as="textarea"
                      id="orderNotes"
                      name="orderNotes"
                      placeholder="orderNotes"
                      rows="4"
                    />
                    <small style={{ color: "red" }}>
                      <ErrorMessage name="Notes about your order, e.g. special notes for delivery.">
                        {(msg) => <div>{msg}</div>}
                      </ErrorMessage>
                    </small>
                  </div>
                </MDBCol>
                <MDBCol md="4" sm="12">
                  <div className="rounded border  p-4 mt-3">
                    <div className="mb-3">
                      <p className="p-0 m-0 h6 text-muted">
                        Returning customer?
                      </p>
                      <Link className="font-weight-bold h5" to="/useraccount">
                        Click here to log in{" "}
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.265 4.11863C12.0028 3.86893 11.5871 3.87877 11.3374 4.14127C11.0873 4.40377 11.0978 4.81918 11.36 5.06921L16.3941 9.84375H3.28125C2.919 9.84375 2.625 10.1378 2.625 10.5C2.625 10.8623 2.919 11.1563 3.28125 11.1563H16.3731L11.36 15.9311C11.0975 16.1812 11.0873 16.5966 11.3374 16.8591C11.4663 16.9943 11.6392 17.0625 11.8125 17.0625C11.9753 17.0625 12.138 17.0025 12.265 16.8814L17.9904 11.4279C18.2385 11.1802 18.375 10.8508 18.375 10.5C18.375 10.1492 18.2385 9.8198 17.979 9.56091L12.265 4.11863Z"
                            fill="#3366FE"
                          />
                        </svg>
                      </Link>
                    </div>

                    <div>
                      <p className="p-0 m-0 h6 text-muted">Have a coupon?</p>
                      <Link className="font-weight-bold h5">
                        Click here to enter your code{" "}
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.265 4.11863C12.0028 3.86893 11.5871 3.87877 11.3374 4.14127C11.0873 4.40377 11.0978 4.81918 11.36 5.06921L16.3941 9.84375H3.28125C2.919 9.84375 2.625 10.1378 2.625 10.5C2.625 10.8623 2.919 11.1563 3.28125 11.1563H16.3731L11.36 15.9311C11.0975 16.1812 11.0873 16.5966 11.3374 16.8591C11.4663 16.9943 11.6392 17.0625 11.8125 17.0625C11.9753 17.0625 12.138 17.0025 12.265 16.8814L17.9904 11.4279C18.2385 11.1802 18.375 10.8508 18.375 10.5C18.375 10.1492 18.2385 9.8198 17.979 9.56091L12.265 4.11863Z"
                            fill="#3366FE"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="rounded border  p-4 mt-3">
                    <h4 className="text-uppercase font-weight-bold">
                      your order
                    </h4>

                    <div className="d-flex justify-content-between">
                      <p className="font-weight-bold">Product</p>
                      <p className="font-weight-bold">Total</p>
                    </div>

                    <div>
                      {/* map buladigan joy */}
                      <div className=" d-flex justify-content-between">
                        <p>{initialValues.productName}</p>
                        <p>${initialValues.productPrice}</p>
                      </div>
                      <div className=" d-flex justify-content-between">
                        <p>{initialValues.productName}</p>
                        <p>${initialValues.productPrice}</p>
                      </div>
                      <div className=" d-flex justify-content-between">
                        <p>{initialValues.productName}</p>
                        <p>${initialValues.productPrice}</p>
                      </div>
                    </div>
                    <div className="mt-3 d-flex justify-content-between">
                      <p className="text-uppercase font-weight-bold">
                        subtotal
                      </p>
                      <p>$12354</p>
                    </div>
                    <div className=" d-flex justify-content-between">
                      <p className="text-uppercase font-weight-bold">
                        shipping
                      </p>
                      <div>
                        <small>Flat Rate:</small>
                        <p>$12300</p>
                      </div>
                    </div>
                    <div className=" d-flex justify-content-between">
                      <p className="text-uppercase font-weight-bold">total</p>
                      <p>$12354</p>
                    </div>

                    <div className="mt-3 d-flex flex-column">
                      <label>
                        <Field
                          type="radio"
                          name="payment"
                          value="One payment"
                          className="mr-2"
                        />
                        <small>Direct Bank Transfer</small>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="payment"
                          value="Two payment"
                          className="mr-2"
                        />
                        <small>Check Payments</small>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="payment"
                          value="Three payment"
                          className="mr-2"
                        />
                        <small>Cash On Deliver</small>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="payment"
                          value="Four payment"
                          className="mr-2"
                        />
                        <small>
                          PayPal <Link>Whats Is PayPal?</Link>
                        </small>
                      </label>

                      <small style={{ color: "red" }}>
                        <ErrorMessage name="payment">
                          {(msg) => <div>{msg}</div>}
                        </ErrorMessage>
                      </small>
                    </div>
                    <div className="mt-3 d-flex p-0">
                      <Field type="checkbox" id="readAgree" name="readAgree" />
                      <label className="ml-3 p-0" htmlFor="readAgree">
                        <small>
                          <b>
                            {" "}
                            I Have Read And Agree To The Website Terms And
                            Conditions *
                          </b>
                        </small>
                      </label>
                    </div>

                    <div className="mt-3 w-100">
                      <MDBBtn
                        color="primary"
                        className="rounded-pill w-100"
                        rounded
                        type="submit"
                      >
                        Primary
                      </MDBBtn>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </Form>
          )}
        </Formik>
      </MDBContainer>
    </div>
  );
}

export default CheckOutPage;
