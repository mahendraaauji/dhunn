import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import LoginContact from "./Page/LoginContact";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/login-test" element={<LoginContact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

// export default routes;
