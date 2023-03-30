import React from "react";
import "../Styles/header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header({ dhunn }) {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <SearchIcon />
          <input
            placeholder="Search for Artists, Songs, or Podcasts "
            type="text"
          />
        </div>
        <div className="header__right">
          <Avatar src="" alt="" />
          <h4>Mehul</h4>
        </div>
      </div>
    </>
  );
}

export default Header;
