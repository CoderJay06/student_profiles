import React from "react";

function ProfileSearchBox({ setSearchInput, searchInput }) {
  return (
    <input
      className="profile-search-box"
      type="text"
      value={searchInput}
      onChange={setSearchInput}
      placeholder="Search by name"
    />
  );
}

export default ProfileSearchBox;
