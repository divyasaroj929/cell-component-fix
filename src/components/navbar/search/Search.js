import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

import "./search.css";

const Search = () => {
  return (
    <>
      <div className="search-container">
        <div className="search-logo">
          <HiOutlineSearch className="b" />
          <input type="text" placeholder="Search" className="input"></input>
        </div>
      </div>
    </>
  );
};

export default Search;
