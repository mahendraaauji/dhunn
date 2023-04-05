import axios from "axios";
import React from "react";
import { useState } from "react";
import "../Styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CallIcon from '@material-ui/icons/Call';
import { toast } from "react-toastify";

// import { Style } from "@material-ui/icons";


function Register(props) {
  const [values, setValues] = useState({ name: "", contactNumber: "" });
  const [errors, setErrors] = useState({});

  let navigate = useNavigate();



  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  const validation = () => {

    const errors = {}
    const nameValidation = /^^[^0-9][a-z0-9]+([_-]?[a-z0-9])*$/;
    const mobileNumberRegex = /^[6-9]\d{9}$/gi;

    console.log("values", values)

    if (!values.name) {
      errors.name = "Username is Required";
    }
    if (!values.contactNumber) {
      errors.contactNumber = "Contact number is Required";
    } else if (values?.contactNumber && !mobileNumberRegex.test(values.contactNumber)) {
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

    if (validation()) {
      axios
        .post("http://localhost:4000/register", {
          name: values.name,
          contactNumber: `+91${values.contactNumber}`,
        })
        .then((response) => {
          console.log("verifyOtpHandler response ", response);
          localStorage.setItem("user", `+91${values.contactNumber}`)
          setErrors({})
          navigate("/verify");
        })
        .catch((err) => {
          if (err.response.data.code === 'PHONE_ALREADY_EXISTS') {
            setErrors({ contactNumber: err.response.data.msg })
          } else {
            setErrors({})
            toast.error("Something went wrong !")
          }
          console.log("err ========>", err);
        })
    }

  };


  return (
    <>
      {/* <div className="logo-first">
        <img
          src="./image/dhunnLogo.png"
          alt="logo"
        />
      </div> */}

      <div className="box">

        <div className="container">
          <div className="top">
            <h1>Register</h1>
          </div>
          <form onSubmit={handleRegister}>

            <div className="input-field">
              <input
                className="input"
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={handleChange}
              />
              <PermIdentityIcon />
              {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div className="input-field">
              <input
                className="input"
                type="number"
                name="contactNumber"
                placeholder="Enter Your Mobile number"
                onChange={handleChange}
              />
              <CallIcon />
              {errors.contactNumber && <p className="error" style={{ color: 'red' }}>{errors.contactNumber}</p>}

            </div>
            <div className="input-field">
              <input type="submit" className="submit" />
            </div>
          </form>
          <div class="two-col">
            <div className="one">
              <label>Already registered please</label>
              <Link to="/login" className="login-link">Login here</Link>
            </div>



          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
