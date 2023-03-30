import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register(props) {
  const [values, setValues] = useState({});
  let navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("values", values);

    axios
      .post("http://localhost:4000/register", {
        name: values.name,
        contactNumber: values.contactNumber,
      })
      .then((response) => {
        console.log("verifyOtpHandler response ", response);
        navigate("/verify");
      })
      .catch((err) => {
        console.log("err ========>", err);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
            onChange={handleChange}
          />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <input
            type="number"
            name="contactNumber"
            placeholder="Enter Your Mobile number"
            required
            onChange={handleChange}
          />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      if you are already registered please <Link to="/login">Login here</Link>
    </div>
  );
}

export default Register;
