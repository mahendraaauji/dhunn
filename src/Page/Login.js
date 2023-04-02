import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [contactNumber, setContactNumber] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const validation = () => {
    const nameValidation = /^^[^0-9][a-z0-9]+([_-]?[a-z0-9])*$/;
    const mobileNumberRegex = /^[6-9]\d{9}$/;
    let isValid = true;

    if (contactNumber === undefined) {
      setError("Contact number is Required");
      isValid = false;
    }
    if (contactNumber && contactNumber?.toString().length != 10) {
      setError("InValid mobile number")
      isValid = false;
    }

    return isValid;
  }
  const handleLogin = (e) => {
    e.preventDefault();

    if (validation()) {
      axios
        .post("http://localhost:4000/login", {
          contactNumber: contactNumber,
        })
        .then((response) => {
          setError("")
          console.log("Login response ", response);
          toast("Wow so easy!");

          navigate("/verify");
        })
        .catch((err) => {
          setError("")
          console.log("Login err ", err);
        });
    }
  };



  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <input
            type="number"
            name="contactNumber"
            placeholder="Enter Your Registered number"
            onChange={(e) => setContactNumber(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
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
