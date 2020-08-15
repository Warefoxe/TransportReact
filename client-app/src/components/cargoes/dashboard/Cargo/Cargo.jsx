import React from "react";
import s from "./Cargo.module.css";
import { NavLink } from "react-router-dom";

const Cargo = () => {
  return (
    <section id={s.home}>
      <div className={s.inner_width}>
        <div className={s.content}>
          <span>ЗАЗНАЧТЕ ЩО ПЕРЕВЕЗТИ</span>
          <div>
            Отримайте кращі пропозиції на перевезення вантажів від водіїв
          </div>
          <div className={s.buttons}>
            <NavLink exact to={"/transport"}>
              Я замовник
            </NavLink>
            <NavLink exact to={"/transport"}>
              Я водій
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cargo;
