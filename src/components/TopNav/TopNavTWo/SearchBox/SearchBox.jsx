import React from "react";
import DropDownCat from "./DropDownCat/DropDownCat";
import "./SearchBox.scss";

function SearchBox() {
  return (
    <form className="search-form">
      <input type="text" placeholder="search" />
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
