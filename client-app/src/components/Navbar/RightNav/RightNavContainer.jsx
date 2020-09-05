import React, { Component } from "react";
import { connect } from "react-redux";
import RightNav from "./RightNav";
import { logout } from "../../../redux/auth-reducer";

class RightNavContainer extends Component {
  render() {
    return <RightNav {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  displayName: state.auth.displayName,
});

export default connect(mapStateToProps, { logout })(
  RightNavContainer
);
