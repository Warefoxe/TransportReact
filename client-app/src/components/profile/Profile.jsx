import React from "react";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <section className="container">
      <h1>Profile</h1>
      {props.displayName}
    </section>
  );
};

export default Profile;
