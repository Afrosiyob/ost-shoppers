import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import TitleHemlet from "../../components/TitleHemlet/TitleHemlet";
import OtherPageNav from "../../components/TopNav/OtherPageNav/OtherPageNav";
import UserLogin from "../../layouts/UserAccount/UserLogin/UserLogin";
import UserRegistration from "../../layouts/UserAccount/UserRegistration/UserRegistration";

function UserAccount() {
  return (
    <div>
      <TitleHemlet title="User Account"/>
      <OtherPageNav />
      <MDBContainer>
        <div className="my-5 w-100 pt-5">
          <h1 className="w-100 text-center font-weight-bold">My Account</h1>
        </div>

        <MDBRow className="justify-content-between">
          <MDBCol md="5" sm="12" className="mt-3">
            <UserLogin />
          </MDBCol>
          <MDBCol md="5" sm="12" className="mt-3">
            <UserRegistration />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default UserAccount;
