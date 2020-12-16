import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import TitleHemlet from "../../components/TitleHemlet/TitleHemlet";
import OtherPageNav from "../../components/TopNav/OtherPageNav/OtherPageNav";
import UserLogin from "../../layouts/UserAccount/UserLogin/UserLogin";
import UserRegistration from "../../layouts/UserAccount/UserRegistration/UserRegistration";
import TitleHelmet from "../../components/TitleHelmet/TitleHelmet";
import { useTranslation } from "react-i18next";

function UserAccount() {
  const [t] = useTranslation();

  return (
    <div>
<<<<<<< HEAD
      <TitleHelmet title="UserAccount page" />
=======
      <TitleHemlet title="User Account"/>
>>>>>>> 088c227aed7f22f476b95fd8afb9f6778c1ec8fe
      <OtherPageNav />
      <MDBContainer>
        <div className="my-5 w-100 pt-5">
          <h1 className="w-100 text-center font-weight-bold">
            {t(`UserAccount.Titul`)}
          </h1>
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
