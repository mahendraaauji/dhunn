export const isAuthenticated = () => {
  const accessToken = localStorage.getItem("access_token");
  const isAuth = accessToken ? true : false;
  return isAuth;
};
