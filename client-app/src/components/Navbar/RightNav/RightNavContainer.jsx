import React, { Component } from "react";
import { connect } from "react-redux";
import RightNav from "./RightNav";
import { profile } from "../../../redux/auth-reducer";

class RightNavContainer extends Component {
  componentDidMount() {
    this.props.profile();
  }

  render() {
    return <RightNav {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
})


export default connect(mapStateToProps, {profile})(RightNavContainer);
