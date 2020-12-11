//  scrollToTop = () => window.scrollTo(0, 0);

import React from "react";
import { useTranslation } from "react-i18next";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeSecFive from "../layouts/HomePage/HomeSecFive/HomeSecFive";
import HomeSecFour from "../layouts/HomePage/HomeSecFour/HomeSecFour";
import HomeSecThree from "../layouts/HomePage/HomeSecThree/HomeSecThree";
import HomeSecTwo from "../layouts/HomePage/HomeSecTwo/HomeSecTwo";

import "./HomePage.scss";

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="home-page" style={{ backgroundColor: "rgba(0,0,0,0.04)" }}>
      <HomeHeader />
      <HomeSecTwo />
      <HomeSecThree />
      <HomeSecFour />
      <HomeSecFive />
      <h1>{t("msg")}</h1>
    </div>
  );
}

export default HomePage;
