import axios from "axios";
import React from "react";
import { useState } from "react";
import Validation from "../Components/Validation";
import "../Styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import { Style } from "@material-ui/icons";


function Register(props) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  let navigate = useNavigate();



  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  const Validation = () => {
    const errors = {}
    const nameValidation = /^^[^0-9][a-z0-9]+([_-]?[a-z0-9])*$/;
    const mobileNumberRegex = /^[6-9]\d{9}$/;

    if (!values.hasOwnProperty('name') || values.name === " ") {
      errors.name = "Username is Required";
    }
    if (!values.hasOwnProperty('contactNumber') || values.contactNumber === " ") {
      errors.contactNumber = "Contact number is Required";
    } else if (values?.contactNumber?.toString().length != 10 || mobileNumberRegex.test(values.contactNumber)) {
      errors.contactNumber = "InValid mobile number";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return false
    } else {
      setErrors({})
      return true
    }

  }

  const handleRegister = (event) => {
    event.preventDefault();

    if (Validation()) {
      axios
        .post("http://localhost:4000/register", {
          name: values.name,
          contactNumber: values.contactNumber,
        })
        .then((response) => {
          console.log("verifyOtpHandler response ", response);
          setErrors({})
          navigate("/verify");
        })
        .catch((err) => {
          setErrors({})
          console.log("err ========>", err);
          // if(){

          // }else{

          // }

        })
    }

  };


  return (
    <div className="register_form">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>

        <div className="input-container">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div className="input-container">
          <input
            type="number"
            name="contactNumber"
            placeholder="Enter Your Mobile number"
            onChange={handleChange}
          />
          {errors.contactNumber && <p className="error" style={{ color: 'red' }}>{errors.contactNumber}</p>}

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
