import React from "react";
import DropDownCat from "./DropDownCat/DropDownCat";
import "./SearchBox.scss";
import { useTranslation } from "react-i18next";

function SearchBox() {
  const [ t ] = useTranslation();
  
  return (
    <form className="search-form">
      <input type="text" placeholder={ t(`MobSearch.Titul`) } />
      <div className="right-box">
        <DropDownCat />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
