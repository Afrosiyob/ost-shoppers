import React from "react";
import "./ResetPass.scss";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  email: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

  return (
    <div className="res-pass-wrap">
      <div className="res-header-top">
        <h3>Yay, Help me :(</h3>
        <p>
          Don't worry, your password is attached to the email you entered during
          the registration process.
        </p>

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
              <button type="submit" className="login-submit my-4">
                LOGIN
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ResetPass;
