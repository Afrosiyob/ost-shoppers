import React, { useState, useEffect } from "react";
import "./RightModal.scss";

import { MDBTooltip, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import Login from "../FormComponent/Login/Login";
import ResetPass from "../FormComponent/ResetPass/ResetPass";
import SignUp from "../FormComponent/SignUp/SignUp";

function RightModal(props) {
  const [modal, setmodal] = useState(props.isBoolen);
  console.log("props.isBoolen=" + props.isBoolen, "module=" + modal);
  const toggle = () => {
    setmodal(!modal);
  };

  useEffect(() => {
    setmodal(props.isBoolen);
  });

  const renderSwitch = (componentName) => {
    switch (componentName) {
      case "Login":
        return (
          <div>
            {" "}
            <Login />{" "}
          </div>
        );
      case "ResetPass":
        return (
          <div>
            {" "}
            <ResetPass />{" "}
          </div>
        );
      case "SignUp":
        return (
          <div>
            {" "}
            <SignUp  />{" "}
          </div>
        );
      default:
        return <div>this is first modal</div>;
    }
  };

  return (
    <div>
      <span
        style={{ fontSize: "20px" }}
        onClick={() => {
          toggle();
        }}
      >
        <MDBTooltip domElement tag="span" placement="top">
          <span className="blue-text">
            {" "}
            <i class={`fas fa-${props.iconName}-alt`}></i>{" "}
          </span>
          <span> {props.nameBtn} </span>
        </MDBTooltip>
      </span>
      <MDBModal
        isOpen={modal}
        toggle={() => {
          toggle();
        }}
        fullHeight
        position="right"
      >
        <MDBModalHeader
          toggle={() => {
            toggle();
          }}
        ></MDBModalHeader>
        <MDBModalBody>{renderSwitch(props.componentName)}</MDBModalBody>
      </MDBModal>
    </div>
  );
}

export default RightModal;
