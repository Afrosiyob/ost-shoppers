import React from "react";
import "./MovSearch.scss";
function MobSearch() {
  return (
    <form action="#!">
      <div className="mob-search-box">
        <input type="text" placeholder="search" />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default MobSearch;
