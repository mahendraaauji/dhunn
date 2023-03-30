import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/isAuth";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  console.log("isAuthenticated()", isAuthenticated());

  if (isAuthenticated()) {
    return children;
  } else {
    navigate("/login");
  }
};

export default PrivateRoute;
