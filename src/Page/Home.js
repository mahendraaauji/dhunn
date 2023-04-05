import React, { useState } from "react";
// import LoginContact from "./LoginContact";
import "../Styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <>
      <div className="start-page">
        <img
          src="./image/dhunnLogo.png"
          alt=""
        />
      </div>
      <div className="dhunn-start-link">
        <Link to="/login" className="start-button">
          Login with Dhunn
        </Link>
      </div>
    </>
    // <div className="popup">
    //   <button type="set" onClick={() => setShowModel(true)}>
    //     Login with Dhunn
    //   </button>
    //   {showModel && (
    //     <LoginContact showModel={showModel} setShowModel={setShowModel} />
    //   )}
    // </div>
  );
};

export default Home;
