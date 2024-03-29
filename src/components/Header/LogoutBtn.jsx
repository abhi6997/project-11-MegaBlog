import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../features/authSlice.js";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:text-black hover:bg-blue-100 rounded-lg font-bold"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
