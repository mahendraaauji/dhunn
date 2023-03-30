import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import "../Styles/loginContact.css";

const LoginContact = (props) => {
  console.log("props", props);

  const [mobileNumber, setMobileNumber] = useState();
  const [isGetOTP, setIsGetOTP] = useState(false);
  const [otpValue, setOtpValue] = useState();
  const [isRegisterForm, setIsRegisterForm] = useState(true);

  console.log("mobileNumber", mobileNumber);

  const onClickHandler = () => {
    console.log("onClickHandler", mobileNumber);

    if (isRegisterForm) {
      axios
        .post("http://localhost:4000/register", {
          contactNumber: mobileNumber,
        })
        .then((response) => {
          console.log("verifyOtpHandler response ", response);
          setIsGetOTP(true);
        })
        .catch((err) => {
          console.log("err ========>", err);
          if (err.response.data.message === "Already registered")
            setIsRegisterForm(false);
        });
    } else {
      axios
        .post("http://localhost:4000/login", {
          contactNumber: mobileNumber,
        })
        .then((response) => {
          console.log("verifyOtpHandler response ", response);
          setIsGetOTP(true);
        })
        .catch((err) => {});
    }
  };

  const verifyOtpHandler = () => {
    console.log("onClickHandler", mobileNumber, otpValue);
    // verify otp api call
    axios
      .post("http://localhost:4000/verifyOTP-test", {
        contactNumber: mobileNumber,
        otp: otpValue,
      })
      .then((response) => {
        console.log("verifyOtpHandler response ", response);
        setIsGetOTP(false);
        props.setIsModalOpen(false);
      });
  };

  return (
    <>
      <div
        className="model-wrap"
        onClick={() => props.setShowModel(false)}
      ></div>
      <div className="model-container">
        <h2>{isRegisterForm ? "Register here" : "Login here"}</h2>
        <div className="delete-btn">
          <button type="reset" onClick={() => props.setShowModel(false)}>
            X
          </button>
        </div>

        <PhoneInput
          placeholder="Enter phone number"
          value={mobileNumber}
          onChange={setMobileNumber}
          className="phoneinput"
          req={true}
        />
        <button type="submit" onClick={onClickHandler}>
          {isRegisterForm ? "Register" : "Login"}
        </button>

        <button onClick={() => props.setIsModalOpen(false)}>close</button>

        {/* to send otp here have otp input box - start */}

        {isGetOTP && (
          <>
            <input
              type="number"
              placeholder="Please Enter OTP"
              onChange={(e) => setOtpValue(e.target.value)}
            />
            <button onClick={verifyOtpHandler}>Send OTP</button>
            <button>Resend OTP</button>
          </>
        )}
        {/* to send otp here have otp input box - end */}
      </div>
    </>
  );
};

export default LoginContact;
