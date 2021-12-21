import React from "react";

function TagSearchBox({ setSearchInput, searchInput }) {
  return (
    <input
      className="tag-search-box"
      type="text"
      value={searchInput}
      onChange={setSearchInput}
      placeholder="Search by tag"
    />
  );
}

export default TagSearchBox;
