import React from "react";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.profile_info}>
      <h1>Profile</h1>
      {props.displayName}
    </div>
  );
};

export default Profile;
