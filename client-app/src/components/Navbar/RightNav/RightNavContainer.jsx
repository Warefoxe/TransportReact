import React, { Component } from "react";
import { connect } from "react-redux";
import RightNav from "./RightNav";
import { getAuthUserData, logout } from "../../../redux/auth-reducer";

class RightNavContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <RightNav {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  displayName: state.auth.displayName,
});

export default connect(mapStateToProps, { getAuthUserData, logout })(
  RightNavContainer
);
