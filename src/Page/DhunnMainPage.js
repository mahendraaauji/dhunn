import React from "react";
import Footer from "../Components/Footer";
import "../Styles/player.css";
import Sidebar from "../Components/Sidebar";
import Body from "../Components/Body";

const DhunnMainPage = ({ dhunn }) => {
  return (
    <>
      <div className="player">
        <div className="player__body">
          <Sidebar />
          <Body spotify={dhunn} />
        </div>
        <Footer spotify={dhunn} />
      </div>
    </>
  );
};

export default DhunnMainPage;
