import React from "react";
import "../Styles/login.css";
import { accessUrl } from "../spotify";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginContact from "./LoginContact";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("isModalOpen", isModalOpen);
  return (
    <>
      {/* <div className="login">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <a href={accessUrl}>LOGIN TO SPOTIFY</a>
      </div> */}
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Login to Dhunn
      </button>

      {isModalOpen && <LoginContact setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default Login;

// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   //validation : 1. blank 2. email/password structure
//   //Singin api call

//   return (
//     <div>
//       <h1>Singin With Email</h1>
//       <input type="text" name="email" placeholder="Email" />
//       <input type="password" name="password" placeholder="Password" />
//       <button>Signin</button>
//       <Link to="/">back to home </Link>
//     </div>
//   );
// };

// export default Login;
