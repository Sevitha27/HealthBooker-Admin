import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const Admin = ({ children }) => {
  const user = jwtDecode(localStorage.getItem("token"));

  if (user.isAdmin) {
    return children;
  }
  return (
    <Navigate
      to={"/"}
      replace={true}
    ></Navigate>
  );
};

export const Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <Navigate
        to={"/"}
        replace={true}
      ></Navigate>
    );
  }
  return children;
};