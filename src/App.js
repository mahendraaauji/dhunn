import "./Styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Home from "./Page/Home";
import "react-phone-number-input/style.css";
import Register from "./Page/Register";
import PrivateRoute from "./Route/PrivateRoute";
import VefifyUser from "./Page/VefifyUser";
import DhunnMainPage from "./Page/DhunnMainPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/verify" element={<VefifyUser />} />
          <Route
            exact
            path="/dhunn"
            element={
              <PrivateRoute>
                <DhunnMainPage />
              </PrivateRoute>
            }
          />

          {/* <Route exact path="/login" element={<LoginContact />} /> */}
          {/* <Player /> */}
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
