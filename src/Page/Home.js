import React, { useState } from "react";
import LoginContact from "./LoginContact";
import "../Styles/loginContact.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <Link  to="/login">
      Login with Dhunn
    </Link>
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
