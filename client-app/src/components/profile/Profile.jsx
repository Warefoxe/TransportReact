import React from "react";

const Profile = (props) => {
  return (
    <section className="container">
      <div className="profile-grid my-1">
        <div className="profile-top bg-primary p-2">
          <img
            className="round-img my-1"
            src="https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png"
            alt=""
          />
          <h1 className="large">{props.displayName}</h1>
          <p className="lead">{props.userName}</p>
          {/* <p>{props.userName}</p> */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
