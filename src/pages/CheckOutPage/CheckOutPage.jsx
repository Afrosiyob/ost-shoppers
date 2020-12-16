import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import "./CheckOutPage.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
// import { MDBAnimation } from "mdbreact";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import OtherPageNav from "../../components/TopNav/OtherPageNav/OtherPageNav";
import { useTranslation } from "react-i18next";
import TitleHemlet from "../../components/TitleHemlet/TitleHemlet";

function CheckOutPage() {
  const { t } = useTranslation();
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
    firstName: Yup.string().required(t(`CheckOutPage.Titul20`)),
    lastName: Yup.string().required(t(`CheckOutPage.Titul20`)),

    country: Yup.string().required(t(`CheckOutPage.Titul20`)),
    streetAddress: Yup.string().required(t(`CheckOutPage.Titul20`)),
    aptSuit: Yup.string().required(t(`CheckOutPage.Titul20`)),
    city: Yup.string().required(t(`CheckOutPage.Titul20`)),
    postcodeZip: Yup.string().required(t(`CheckOutPage.Titul20`)),
    state: Yup.string().required(t(`CheckOutPage.Titul20`)),
    email: Yup.string().email(t(`CheckOutPage.Titul21`)).required("Required !"),
    phone: Yup.string()
      .min(7, t(`CheckOutPage.Titul22`))
      .max(20, t(`CheckOutPage.Titul23`))
      .required(t(`CheckOutPage.Titul20`)),
    payment: Yup.string().required(t(`CheckOutPage.Titul20`)),

    // payment: Yup.string().required("Required !"),
    // readAgree: Yup.string().required("Required !"),
  });

  return (
    <div className="check-out-page">
      <TitleHemlet title="Check Out Page"/>
      <OtherPageNav />
      <MDBContainer>
        <div className="my-5 w-100 pt-5">
          <h1 className="w-100 text-center font-weight-bold">
            {t(`CheckOutPage.Titul`)}
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
                {t(`CheckOutPage.Titul1`)}
              </h3>
              <MDBRow>
                <MDBCol md="8" sm="12">
                  <MDBRow>
                    <MDBCol md="6" sm="12">
                      <div>
                        <label htmlFor="firstName">
                          <small>
                            <b>{t(`CheckOutPage.Titul2`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder={t(`CheckOutPage.Titul2`)}
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
                            <b>{t(`CheckOutPage.Titul3`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder={t(`CheckOutPage.Titul3`)}
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
                            <b>
                              {" "}
                              {t(`CheckOutPage.Titul4`)} (
                              {t(`CheckOutPage.Titul5`)})
                            </b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="companyName"
                          name="companyName"
                          placeholder={t(`CheckOutPage.Titul4`)}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="mt-3">
                        <label htmlFor="country">
                          <small>
                            <b>{t(`CheckOutPage.Titul6`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="country"
                          name="country"
                          placeholder={t(`CheckOutPage.Titul6`)}
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
                            <b>{t(`CheckOutPage.Titul7`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="streetAddress"
                          name="streetAddress"
                          placeholder={t(`CheckOutPage.Titul7`)}
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
                            <b>{t(`CheckOutPage.Titul15`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="aptSuit"
                          name="aptSuit"
                          placeholder={t(`CheckOutPage.Titul15`)}
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
                            <b>{t(`CheckOutPage.Titul16`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="city"
                          name="city"
                          placeholder={t(`CheckOutPage.Titul16`)}
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
                            <b>{t(`CheckOutPage.Titul17`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="postcodeZip"
                          name="postcodeZip"
                          placeholder={t(`CheckOutPage.Titul17`)}
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
                            <b>{t(`CheckOutPage.Titul9`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="texxt"
                          id="state"
                          name="state"
                          placeholder={t(`CheckOutPage.Titul9`)}
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
                            <b>{t(`CheckOutPage.Titul10`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="email"
                          id="email"
                          name="email"
                          placeholder={t(`CheckOutPage.Titul10`)}
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
                            <b>{t(`CheckOutPage.Titul18`)}</b>
                          </small>
                        </label>
                        <Field
                          className="form-control"
                          type="phone"
                          id="phone"
                          name="phone"
                          placeholder={t(`CheckOutPage.Titul18`)}
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
                            <b>{t(`CheckOutPage.Titul11`)}</b>
                          </p>
                          <small>{t(`CheckOutPage.Titul12`)}</small>
                        </div>
                      </label>
                    </div>
                  </MDBCol>
                  <div className="my-3">
                    <hr />
                  </div>

                  <h3 className="text-uppercase font-weight-bold">
                    {t(`CheckOutPage.Titul13`)}
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
                            <b>{t(`CheckOutPage.Titul14`)}</b>
                          </p>
                        </div>
                      </label>
                    </div>
                  </MDBCol>

                  <div className="my-3">
                    <label htmlFor="orderNotes">
                      <small>
                        <b>
                          {t(`CheckOutPage.Titul19`)} (
                          {t(`CheckOutPage.Titul5`)})
                        </b>
                      </small>{" "}
                    </label>
                    <Field
                      className="form-control"
                      as="textarea"
                      id="orderNotes"
                      name="orderNotes"
                      placeholder={t(`CheckOutPage.Titul19`)}
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
                      {t(`CheckOutPage.Titul39`)}
                      </p>
                      <Link className="font-weight-bold h5" to="/useraccount">
                      {t(`CheckOutPage.Titul40`)}
                       {" "}
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
                      <p className="p-0 m-0 h6 text-muted">
                      {t(`CheckOutPage.Titul24`)}

                      </p>
                      <Link className="font-weight-bold h5">
                      {t(`CheckOutPage.Titul25`)}
                        {" "}
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
                    {t(`CheckOutPage.Titul26`)}
                    </h4>

                    <div className="d-flex justify-content-between">
                      <p className="font-weight-bold">
                      {t(`CheckOutPage.Titul27`)}
                      </p>
                      <p className="font-weight-bold">
                      {t(`CheckOutPage.Titul28`)}
                      </p>
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
                      {t(`CheckOutPage.Titul29`)}
                      </p>
                      <p>$12354</p>
                    </div>
                    <div className=" d-flex justify-content-between">
                      <p className="text-uppercase font-weight-bold">
                      {t(`CheckOutPage.Titul30`)}
                      </p>
                      <div>
                        <small>
                        {t(`CheckOutPage.Titul31`)}
                        </small>
                        <p>$12300</p>
                      </div>
                    </div>
                    <div className=" d-flex justify-content-between">
                      <p className="text-uppercase font-weight-bold">
                      {t(`CheckOutPage.Titul32`)}
                      </p>
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
                        <small>
                        {t(`CheckOutPage.Titul33`)}
                        </small>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="payment"
                          value="Two payment"
                          className="mr-2"
                        />
                        <small> 
                        {t(`CheckOutPage.Titul34`)}
                        </small>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="payment"
                          value="Three payment"
                          className="mr-2"
                        />
                        <small>
                        {t(`CheckOutPage.Titul35`)}
                        </small>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="payment"
                          value="Four payment"
                          className="mr-2"
                        />
                        <small>
                          PayPal <Link>
                          {t(`CheckOutPage.Titul36`)}
                          </Link>
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
                            {t(`CheckOutPage.Titul37`)}
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
                        {t(`CheckOutPage.Titul38`)}
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
