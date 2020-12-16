import React from "react";
import "./MovSearch.scss";
import { useTranslation } from "react-i18next";

function MobSearch() {
  const [t] = useTranslation();

  return (
    <form action="#!">
      <div className="mob-search-box">
        <input type="text" placeholder={t(`MobSearch.Titul`)} />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default MobSearch;
