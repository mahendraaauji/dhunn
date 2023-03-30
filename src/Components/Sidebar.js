import React from "react";
import "../Styles/sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import QueueRoundedIcon from '@material-ui/icons/QueueRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

function Sidebar() {
  
  return (
    <>
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="./image/dhunnLogo.png"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      {/* <SidebarOption Icon={LibraryMusicIcon} option="Your Library" /> */}
      {/* <br /> */}

      <SidebarOption Icon={QueueRoundedIcon} option="Create Playlist" />
      <SidebarOption Icon={FavoriteRoundedIcon} option="Liked Songs" />


      
      {/* <strong className="sidebar__title">PLAYLISTS</strong> */}
      <hr />

    </div>
    </>
  );
}

export default Sidebar;