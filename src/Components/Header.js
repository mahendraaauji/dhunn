import React from "react";
import "../Styles/header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";

function Header({ dhunn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  }
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
          {/* <h4>Mehul</h4> */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Header;
