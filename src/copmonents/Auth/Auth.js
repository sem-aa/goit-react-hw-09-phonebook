import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Auth.module.css";
import {Button} from "react-bootstrap"

const Auth = () => (
  <div className={s.App}>
    <NavLink
      to="/register"
      exat
      className={s.link}>
      <Button variant="primary">Register</Button>  
    </NavLink>
    <NavLink
      to="/login"
      exat
      className={s.link}>
      <Button variant="primary">LogIn</Button>
    </NavLink>
  </div>
);

export default Auth;
