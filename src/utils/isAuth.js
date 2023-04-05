export const isAuthenticated = () => {
  const accessToken = localStorage.getItem("access_token");
  const isAuth = accessToken ? true : false;
  return isAuth;
};


const handleValidationErrorMsg = (status, setMsg) => {
  switch (status) {
    case 400:

      break;

    default:
      break;
  }
}