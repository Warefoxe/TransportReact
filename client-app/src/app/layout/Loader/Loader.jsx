import React from "react";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
