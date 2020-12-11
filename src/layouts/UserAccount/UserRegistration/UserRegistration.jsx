import React from "react";
import "./UserRegistration.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

const initialValues = {
  email: "",
};

const validationScheme = Yup.object().shape({
  email: Yup.string().email("Invalid Email!").required("Required!"),
});

function UserRegistration() {
  return (
    <div>
      <h3 className="text-muted font-weight-bolder">Regstration</h3>
      <hr />

      <h5 className="font-weight-bold text-uppercase">
        {" "}
        Create new account today to reap the benefits of a personalized shopping
        experience.{" "}
      </h5>

      <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mt-3">
              <label htmlFor="email">
                <small>
                  <b>Username or Email Address</b>
                </small>
              </label>
              <Field
                className="form-control rounded-pill"
                type="email"
                id="email"
                name="email"
                placeholder="Email Addresss"
              />
              <small style={{ color: "red" }}>
                <ErrorMessage name="email">
                  {(msg) => <div>{msg}</div>}
                </ErrorMessage>
              </small>
            </div>

            <div className="p-2 mt-3 text-muted">
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage your account, and for other
                purposes described in our <Link>privacy policy.</Link>
              </p>
            </div>

            <div className="mt-3">
              <p className="font-weight-bold">
                Sign up today and you will be able to :{" "}
              </p>

              <div className="mt-2">
                <p>
                  {" "}
                  <svg
                    className="mr-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4274 2.73421C19.1332 2.43948 18.6558 2.43897 18.3616 2.73296L9.31892 11.7518L6.05634 8.20831C5.77442 7.9023 5.29778 7.88245 4.99126 8.16433C4.68497 8.44624 4.66536 8.92312 4.94728 9.2294L8.74126 13.3498C8.88021 13.5008 9.07466 13.5885 9.2797 13.5927C9.28521 13.593 9.29052 13.593 9.29579 13.593C9.49505 13.593 9.68673 13.5138 9.82794 13.3731L19.4259 3.80026C19.7209 3.50632 19.7214 3.02894 19.4274 2.73421Z"
                      fill="#83E226"
                    />
                    <path
                      d="M19.2462 9.24621C18.8299 9.24621 18.4925 9.58363 18.4925 10C18.4925 14.6829 14.6829 18.4925 10 18.4925C5.31734 18.4925 1.50754 14.6829 1.50754 10C1.50754 5.31734 5.31734 1.50754 10 1.50754C10.4163 1.50754 10.7538 1.17012 10.7538 0.753789C10.7538 0.337422 10.4163 0 10 0C4.48594 0 0 4.48594 0 10C0 15.5138 4.48594 20 10 20C15.5138 20 20 15.5138 20 10C20 9.58367 19.6626 9.24621 19.2462 9.24621Z"
                      fill="#83E226"
                    />
                  </svg>
                  Speed your way through checkout
                </p>
                <p>
                  {" "}
                  <svg
                    className="mr-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4274 2.73421C19.1332 2.43948 18.6558 2.43897 18.3616 2.73296L9.31892 11.7518L6.05634 8.20831C5.77442 7.9023 5.29778 7.88245 4.99126 8.16433C4.68497 8.44624 4.66536 8.92312 4.94728 9.2294L8.74126 13.3498C8.88021 13.5008 9.07466 13.5885 9.2797 13.5927C9.28521 13.593 9.29052 13.593 9.29579 13.593C9.49505 13.593 9.68673 13.5138 9.82794 13.3731L19.4259 3.80026C19.7209 3.50632 19.7214 3.02894 19.4274 2.73421Z"
                      fill="#83E226"
                    />
                    <path
                      d="M19.2462 9.24621C18.8299 9.24621 18.4925 9.58363 18.4925 10C18.4925 14.6829 14.6829 18.4925 10 18.4925C5.31734 18.4925 1.50754 14.6829 1.50754 10C1.50754 5.31734 5.31734 1.50754 10 1.50754C10.4163 1.50754 10.7538 1.17012 10.7538 0.753789C10.7538 0.337422 10.4163 0 10 0C4.48594 0 0 4.48594 0 10C0 15.5138 4.48594 20 10 20C15.5138 20 20 15.5138 20 10C20 9.58367 19.6626 9.24621 19.2462 9.24621Z"
                      fill="#83E226"
                    />
                  </svg>
                  Track your orders easily
                </p>
                <p>
                  {" "}
                  <svg
                    className="mr-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4274 2.73421C19.1332 2.43948 18.6558 2.43897 18.3616 2.73296L9.31892 11.7518L6.05634 8.20831C5.77442 7.9023 5.29778 7.88245 4.99126 8.16433C4.68497 8.44624 4.66536 8.92312 4.94728 9.2294L8.74126 13.3498C8.88021 13.5008 9.07466 13.5885 9.2797 13.5927C9.28521 13.593 9.29052 13.593 9.29579 13.593C9.49505 13.593 9.68673 13.5138 9.82794 13.3731L19.4259 3.80026C19.7209 3.50632 19.7214 3.02894 19.4274 2.73421Z"
                      fill="#83E226"
                    />
                    <path
                      d="M19.2462 9.24621C18.8299 9.24621 18.4925 9.58363 18.4925 10C18.4925 14.6829 14.6829 18.4925 10 18.4925C5.31734 18.4925 1.50754 14.6829 1.50754 10C1.50754 5.31734 5.31734 1.50754 10 1.50754C10.4163 1.50754 10.7538 1.17012 10.7538 0.753789C10.7538 0.337422 10.4163 0 10 0C4.48594 0 0 4.48594 0 10C0 15.5138 4.48594 20 10 20C15.5138 20 20 15.5138 20 10C20 9.58367 19.6626 9.24621 19.2462 9.24621Z"
                      fill="#83E226"
                    />
                  </svg>
                  Keep a record of all your purchases
                </p>
              </div>
            </div>

            <MDBBtn
              color="primary"
              className="rounded-pill"
              rounded
              type="submit"
            >
              Registration
            </MDBBtn>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserRegistration;
