import React from "react";
import "./UserLogin.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import { MDBAnimation } from "mdbreact";
import * as Yup from "yup";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

const initialValues = {
  userName: "",
  password: "",
  remember: false,
};

const validationScheme = Yup.object().shape({
  userName: Yup.string().required("Required!"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function UserLogin(props) {
  return (
    <div>
      <h3 className="text-muted font-weight-bolder">Login</h3>
      <hr />

      <h5 className="font-weight-bold text-uppercase">
        {" "}
        Welcome back! Sign in to your account.{" "}
      </h5>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={validationScheme}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mt-3">
              <label htmlFor="firstName">
                <small>
                  <b>Username or Email Address</b>
                </small>
              </label>
              <Field
                className="form-control rounded-pill"
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter Username or Email Addresss"
              />
              <small style={{ color: "red" }}>
                <ErrorMessage name="userName">
                  {(msg) => <div>{msg}</div>}
                </ErrorMessage>
              </small>
            </div>

            <div className="my-3">
              <label htmlFor="password">
                <small>
                  <b>Password</b>
                </small>
              </label>
              <Field
                className="form-control rounded-pill"
                type="password"
                id="password"
                name="password"
              />
              <small style={{ color: "red" }}>
                <ErrorMessage name="password">
                  {(msg) => <div>{msg}</div>}
                </ErrorMessage>
              </small>
            </div>

            <div className="mt-3">
              <label htmlFor="remember">
                <Field type="checkbox" id="remember" name="remember" />
                <small className="ml-2">
                  <b> Remember Me</b>
                </small>
              </label>
            </div>

            <div>
              <MDBBtn
                color="primary"
                className="rounded-pill"
                rounded
                type="submit"
              >
                Login
              </MDBBtn>
            </div>
            <Link>
              <small>Lost your password ?</small>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserLogin;
