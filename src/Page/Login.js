import axios from "axios";
import React from "react";
import "../Styles/login.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CallIcon from '@material-ui/icons/Call';

const Login = () => {
  const [contactNumber, setContactNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const validation = () => {
    const nameValidation = /^^[^0-9][a-z0-9]+([_-]?[a-z0-9])*$/;
    const mobileNumberRegex = /^[6-9]\d{9}$/gi;
    let isValid = true;

    if (!contactNumber) {
      setError("Contact number is Required");
      isValid = false;
    } else if (contactNumber && !mobileNumberRegex.test(contactNumber)) {
      setError("InValid mobile number")
      isValid = false;
    } else {
      isValid = true;
    }

    return isValid;
  }
  const handleLogin = (e) => {
    e.preventDefault();

    if (validation()) {
      axios
        .post("http://localhost:4000/login", {
          contactNumber: `+91${contactNumber}`,
        })
        .then((response) => {
          setError("")
          console.log("Login response ", response);
          localStorage.setItem("user", `+91${contactNumber}`)

          navigate("/verify");
        })
        .catch((err) => {
          if (err.response.data.code === 'PHONE_NOT_FOUND') {
            setError(err.response.data.msg)
          } else {
            setError("");
            toast.error("Something went wrong !")
          }

          console.log("Login err ", err);
        });
    }
  };



  return (
    <div className="box">
      <div className="container">
        <div className="top-header">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <input
              className="input-login"
              type="number"
              name="contactNumber"
              placeholder="Enter Your Registered number"
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <CallIcon />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div className="input-field">
            <input type="submit" className="submit" />
          </div>
        </form>
        <div class="two-col">
          <div className="two">
            <label>Not yet Register?</label>
            <Link to="/register" className="login-link">Register here </Link>
          </div>
        </div>


      </div>
    </div >
  );
};

export default Login;
