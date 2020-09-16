import React, { Component } from "react";
import { connect } from "react-redux";
import { createCargo } from "../../../redux/cargoes-reducer";
import CargoForm from "./CargoForm";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class CargoFormContainer extends Component {
  render() {
    return <CargoForm {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  cargoes: state.cargoes,
  cargo: state.cargo,
});

export default compose(
  connect(mapStateToProps, { createCargo }),
  withAuthRedirect
)(CargoFormContainer);
