import axios from "axios";
import React from "react";
import "../Styles/verifyuser.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import KeyIcon from '@material-ui/icons/key';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { toast } from "react-toastify";

function VefifyUser() {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const handleVerification = async () => {

    if (!otp) {
      setError("OTP is required");
    } else {
      const contactNumber = localStorage.getItem("user")

      await axios
        .post("http://localhost:4000/verify", {
          otp: otp,
          contactNumber: contactNumber,
        })
        .then((response) => {
          console.log("verifyOtpHandler response ", response);
          localStorage.setItem("access_token", response.data.data.token);
          toast.success("You are loggedin Successfully !")
          navigate("/dhunn");
        })
        .catch((err) => {
          if (err.response.data.code === 'INCORRECT_OTP') {
            setError(err.response.data.msg)
          } else {
            setError("");
            toast.error("Something went wrong !")
          }

          console.log("err ========>", err);
        });
    }
  };
  return (
    <div className="box">
      <div className="container">
        <div className="top">
          <h1>Verify your number </h1>
        </div>
        <div className="input-field">
          <input
            className="input-verify"
            name="otp"
            type="number"
            placeholder="OTP"
            onChange={(e) => setOTP(e.target.value)}
          />
          <VpnKeyOutlinedIcon />
          {error && <p className="error" style={{ color: 'red' }}>{error}</p>}

        </div>
        <div className="input-field">
          <button className="otp-verify-button" onClick={handleVerification}>Submit OTP</button>
        </div>
      </div>
    </div>
  );
}

export default VefifyUser;
