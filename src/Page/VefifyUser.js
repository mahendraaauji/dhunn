import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VefifyUser() {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const handleVerification = () => {
    console.log("handleVerification", otp);
    axios
      .post("http://localhost:4000/verify", {
        otp: otp,
        userId: "641a068e5b9e44ae44778ce4",
        contactNumber: "+916352085282",
      })
      .then((response) => {
        console.log("verifyOtpHandler response ", response);
        localStorage.setItem("access_token", response.data.data.token);
        navigate("/dhunn");
      })
      .catch((err) => {
        console.log("err ========>", err);
      });
  };
  return (
    <div>
      <h1>Please Verify your number </h1>
      Please recieved OTP here
      <input
        name="otp"
        type="number"
        onChange={(e) => setOTP(e.target.value)}
      />
      <button onClick={handleVerification}>Submit OTP</button>
    </div>
  );
}

export default VefifyUser;
