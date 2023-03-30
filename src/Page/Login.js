import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [contactNumber, setContactNumber] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    console.log("handleLogin");
    e.preventDefault();

    axios
      .post("http://localhost:4000/login", {
        contactNumber: contactNumber,
      })
      .then((response) => {
        console.log("Login response ", response);
        toast("Wow so easy!");
        navigate("/verify");
      })
      .catch((err) => {
        console.log("Login err ", err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <input
            // type="number"
            name="contactNumber"
            placeholder="Enter Your Registered number"
            required
            onChange={(e) => setContactNumber(e.target.value)}
          />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <Link to="/register">Register here </Link>
    </div>
  );
};

export default Login;
