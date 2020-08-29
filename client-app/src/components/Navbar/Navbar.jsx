import React from "react";
import s from "./Navbar.module.css";
import logo from "../../assets/img/logo2.png";
import { NavLink } from "react-router-dom";
import Burger from "./Burger/Burger";

export const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.inner_width}>
        <NavLink to="/">
          <img className={s.logo} src={logo} alt="logo" />
        </NavLink>
        <Burger />
      </div>
    </nav>
  );
};
