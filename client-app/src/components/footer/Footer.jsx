import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer_bottom}>
      <div className={s.footer_bottom_content}>
        <span>© 2020 trucking.com.ua All rights reserved. </span>
      </div>
    </div>
  );
};

export default Footer;
