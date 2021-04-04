import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Auth.module.css";

const Auth = () => (
  <div className={s.App}>
    <NavLink
      to="/register"
      exat
      className={s.link}
      activeClassName={s.activeStyle}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      exat
      className={s.link}
      activeClassName={s.activeStyle}
    >
      LogIn
    </NavLink>
  </div>
);

export default Auth;
