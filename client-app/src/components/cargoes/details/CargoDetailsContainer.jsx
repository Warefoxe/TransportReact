import React, { Component } from "react";
import CargoDetails from "./CargoDetails";
import { connect } from "react-redux";
import { getCargo } from "../../../redux/cargoes-reducer";
import { withRouter } from "react-router-dom";

class CargoDetailsContainer extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getCargo(id);
  }

  render() {
    return <CargoDetails {...this.props} cargo={this.props.cargo} />;
  }
}

const mapStateToProps = (state) => ({
  cargo: state.cargoesPage.cargo,
});

const WithUrlDataContainer = withRouter(CargoDetailsContainer);

export default connect(mapStateToProps, { getCargo })(WithUrlDataContainer);
