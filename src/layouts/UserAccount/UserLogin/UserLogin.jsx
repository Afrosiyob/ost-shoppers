import React from "react";
import "./UserLogin.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import { MDBAnimation } from "mdbreact";
import * as Yup from "yup";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function UserLogin(props) {
  const [ t ] = useTranslation();

  const initialValues = {
    userName: "",
    password: "",
    remember: false,
  };
  
  const validationScheme = Yup.object().shape({
    userName: Yup.string().required(t(`Login.Titul10`)),
    password: Yup.string()
      .min(6, t(`Login.Titul11`))
      .max(50, t(`Login.Titul12`))
      .required(t(`Login.Titul10`)),
  });
  return (
    <div>
      <h3 className="text-muted font-weight-bolder">{t(`UserLogin.Titul`)}</h3>
      <hr />

      <h5 className="font-weight-bold text-uppercase">
        {" "}
        {t(`UserLogin.Titul2`)}{" "}
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
                  <b>{t(`UserLogin.Titul3`)}</b>
                </small>
              </label>
              <Field
                className="form-control rounded-pill"
                type="text"
                id="userName"
                name="userName"
                placeholder= {t(`UserLogin.Titul4`)}
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
                  <b>{t(`UserLogin.Titul5`)}</b>
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
                  <b>{t(`UserLogin.Titul6`)}</b>
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
                {t(`UserLogin.Titul`)}
              </MDBBtn>
            </div>
            <Link>
              <small>{t(`UserLogin.Titul7`)}</small>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserLogin;
