import { Navigate, Route, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/isAuth";

const PrivateRoute = ({ children, ...props }) => {
  const navigate = useNavigate();

  console.log("isAuthenticated()", isAuthenticated());

  if (isAuthenticated()) {
    return children;
  } else {
    navigate("/login");
  }
  // return isAuthenticated() ? <Route {...props} /> : <Navigate to="/login" />;

};

export default PrivateRoute;
