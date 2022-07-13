import React from "react";

function SearchBar({ typed, onType }) {
  return (
    <>
      <input id="search" placeholder="Search" value={typed} onChange={(event) => onType(event)} className="search-bar" />
    </>
  );
}

export default SearchBar;
