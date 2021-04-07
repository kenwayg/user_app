import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchBar() {
  return (
    <div className="searcher">
      <form action="">
        <h1>MILEONE</h1>
        <input type="search" placeholder="Search" />
        <FontAwesomeIcon className="search_sign" size="2x" icon={faSearch} />
      </form>
    </div>
  );
}

export default SearchBar;
