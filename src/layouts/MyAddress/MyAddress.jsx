import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

import "./MyAddress.scss";

import * as Yup from "yup";
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";
import Axios from "axios";

const initialValues = {
  b_City: "",
  b_AddressOne: "",
  b_AddressTwo: "",
  b_Country: "",
  b_ZipCode: "",
  b_Phone: "",

  s_City: "",
  s_AddressOne: "",
  s_AddressTwo: "",
  s_Country: "",
  s_ZipCode: "",
  s_Phone: "",
};

const validationSchema = Yup.object().shape({
  b_City: Yup.string().required("Required!"),
  b_AddressOne: Yup.string().required("Required!"),
  b_Country: Yup.string().required("Required!"),
  b_ZipCode: Yup.string().required("Required!"),
  s_City: Yup.string().required("Required!"),
  s_AddressOne: Yup.string().required("Required!"),
  s_Country: Yup.string().required("Required!"),
  s_ZipCode: Yup.string().required("Required!"),
});

function MyAddress() {
  return (
    <div className="my-address-box border rounded overflow-hidden px-md-5 py-md-4 p-3">
      <h5 className="font-weight-bold">My Address</h5>

      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);

            Axios.post("http://localhost:3000/profile", values)
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }, 1000);
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <MDBRow>
              <MDBCol md="6" sm="12" className="mt-3">
                <h6 className="text-muted text-uppercase">billing address</h6>
                <hr />
                <div className="mt-3">
                  <label htmlFor="b_City">
                    <small>
                      <b>City</b>
                    </small>
                  </label>
                  <Field
                    className="form-control rounded-pill"
                    type="text"
                    id="b_City"
                    name="b_City"
                    placeholder="Tyumen"
                  />
                  <small style={{ color: "red" }}>
                    <ErrorMessage name="b_City">
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                  </small>
                </div>
                <div className="mt-3">
                  <label htmlFor="b_AddressOne">
                    <small>
                      <b>Address 1</b>
                    </small>
                  </label>
                  <Field
                    className="form-control rounded-pill"
                    type="text"
                    id="b_AddressOne"
                    name="b_AddressOne"
                    placeholder="Tyumen"
                  />
                  <small style={{ color: "red" }}>
                    <ErrorMessage name="b_AddressOne">
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                  </small>
                </div>
                <div className="mt-3">
                  <label htmlFor="b_AddressTwo">
                    <small>
                      <b>Address 2</b>
                    </small>
                  </label>
                  <Field
                    className="form-control rounded-pill"
                    type="text"
                    id="b_AddressTwo"
                    name="b_AddressTwo"
                    placeholder="Tyumen"
                  />
                  <small style={{ color: "red" }}>
                    <ErrorMessage name="b_AddressTwo">
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                  </small>
                </div>
                <div className="mt-3">
                  <label htmlFor="b_Country">
                    <small>
                      <b>Country</b>
                    </small>
                  </label>
                  <Field
                    className="form-control rounded-pill"
                    type="text"
                    id="b_Country"
                    name="b_Country"
                    placeholder="Tyumen"
                  />
                  <small style={{ color: "red" }}>
                    <ErrorMessage name="b_Country">
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                  </small>
                </div>

                <MDBRow>
                  <MDBCol md="5" sm="12">
                    <div className="mt-3">
                      <label htmlFor="b_ZipCode">
                        <small>
                          <b> ZIP Code </b>
                        </small>
                      </label>
                      <Field
                        className="form-control rounded-pill"
                        type="text"
                        id="b_ZipCode"
                        name="b_ZipCode"
                        placeholder="00055"
                      />
                      <small style={{ color: "red" }}>
                        <ErrorMessage name="b_ZipCode">
                          {(msg) => <div>{msg}</div>}
                        </ErrorMessage>
                      </small>
                    </div>
                  </MDBCol>
                  <MDBCol md="7" sm="12">
                    <div className="mt-3">
                      <label htmlFor="b_Phone">
                        <small>
                          <b> Phone number </b>
                        </small>
                      </label>
                      <Field
                        className="form-control rounded-pill"
                        type="text"
                        id="b_Phone"
                        name="b_Phone"
                        placeholder="+998 99 999 99 99"
                      />
                      <small style={{ color: "red" }}>
                        <ErrorMessage name="b_Phone">
                          {(msg) => <div>{msg}</div>}
                        </ErrorMessage>
                      </small>
                    </div>
                  </MDBCol>
                </MDBRow>

                <div className="mt-3">
                  <MDBBtn color="light" className="rounded-pill mr-2" rounded>
                    Close
                  </MDBBtn>
                  <MDBBtn
                    color="warning"
                    className="rounded-pill"
                    rounded
                    type="submit"
                  >
                    Save
                  </MDBBtn>
                </div>
              </MDBCol>

              <MDBCol md="6" sm="12" className="mt-3">
                <h6 className="text-muted text-uppercase">SHIPPING ADRESS</h6>
                <hr />
                <div className="mt-3">
                  <label htmlFor="s_City">
                    <small>
                      <b>City</b>
                    </small>
                  </label>
                  <Field
                    className="form-control rounded-pill"
                    type="text"
                    id="s_City"
                    name="s_City"
                    placeholder="Tyumen"
                  />
                  <small style={{ color: "red" }}>
                    <ErrorMessage name="s_City">
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                  </small>
                </div>
                <div className="mt-3">
                  <label htmlFor="s_AddressOne">
                    <small>
                      <b>Address 1</b>
                    </small>
                  </label>
                  <Field
                    className="form-control rounded-pill"
                    type="text"
                    id="s_AddressOne"
                    name="s_AddressOne"
                    placeholder="Tyumen"
                  />
                  <small style={{ color: "red" }}>
                    <ErrorMessage name="s_AddressOne">
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                  </small>
                </div>
                <div className="mt-3">
                  <label htmlFor="s_AddressTwo">
                    <small>
                      <b>Address 2</b>
                    </small>
                  </label>
                  <Field
                    className="form-control rounded-pill"
                    type="text"
                    id="s_AddressTwo"
                    name="s_AddressTwo"
                    placeholder="Tyumen"
                  />
                  <small style={{ color: "red" }}>
                    <ErrorMessage name="s_AddressTwo">
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                  </small>
                </div>
                <div className="mt-3">
                  <label htmlFor="s_Country">
                    <small>
                      <b>Country</b>
                    </small>
                  </label>
                  <Field
                    className="form-control rounded-pill"
                    type="text"
                    id="s_Country"
                    name="s_Country"
                    placeholder="Tyumen"
                  />
                  <small style={{ color: "red" }}>
                    <ErrorMessage name="s_Country">
                      {(msg) => <div>{msg}</div>}
                    </ErrorMessage>
                  </small>
                </div>

                <MDBRow>
                  <MDBCol md="5" sm="12">
                    <div className="mt-3">
                      <label htmlFor="s_ZipCode">
                        <small>
                          <b> ZIP Code </b>
                        </small>
                      </label>
                      <Field
                        className="form-control rounded-pill"
                        type="text"
                        id="s_ZipCode"
                        name="s_ZipCode"
                        placeholder="00055"
                      />
                      <small style={{ color: "red" }}>
                        <ErrorMessage name="s_ZipCode">
                          {(msg) => <div>{msg}</div>}
                        </ErrorMessage>
                      </small>
                    </div>
                  </MDBCol>
                  <MDBCol md="7" sm="12">
                    <div className="mt-3">
                      <label htmlFor="s_Phone">
                        <small>
                          <b> Phone number </b>
                        </small>
                      </label>
                      <Field
                        className="form-control rounded-pill"
                        type="text"
                        id="s_Phone"
                        name="s_Phone"
                        placeholder="+998 99 999 99 99"
                      />
                      <small style={{ color: "red" }}>
                        <ErrorMessage name="s_Phone">
                          {(msg) => <div>{msg}</div>}
                        </ErrorMessage>
                      </small>
                    </div>
                  </MDBCol>
                </MDBRow>

                <div className="mt-3 d-flex justify-content-end">
                  <MDBBtn color="primary" className="rounded-pill" rounded>
                    Edit
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MyAddress;
