import React, { useState } from "react";
import "./DropDownLang.scss";

import { useTranslation } from "react-i18next";

function DropDownLang() {
  const { i18n } = useTranslation();

  function langChange(lang) {
    i18n.changeLanguage(lang);
    setlangText(lang);
    setlangClass(!langClass);
  }
  const [langText, setlangText] = useState("en");
  const [langClass, setlangClass] = useState(false);

  return (
    <div className="lang-box">
      <div
        className="top-box-lang"
        onClick={() => {
          setlangClass(!langClass);
        }}
      >
        {langText}{" "}
        <i className={`fas fa-angle-${langClass ? "up" : "down"}`}></i>
      </div>
      <div className={`under-box-lang ${langClass ? "active" : ""} `}>
        <span onClick={() => langChange("uz")}> Uzbek</span>
        <span onClick={() => langChange("ru")}>Russian</span>
        <span onClick={() => langChange("en")}>English</span>
      </div>
    </div>
  );
}

export default DropDownLang;
