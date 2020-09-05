import React, { Component } from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";
import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  displayName: state.auth.displayName,
});

export default connect(mapStateToProps, { getAuthUserData })(
  ProfileContainer
);
