import React, { Component } from "react";
import CargoDetails from "./CargoDetails";
import * as axios from "axios";
import { connect } from "react-redux";
import { setCargo } from "../../../redux/cargoes-reducer";

class CargoDetailsContainer extends Component {
  componentDidMount() {
    axios
      .get(
        // "http://localhost:59101/api/cargo"
        `http://localhost:59101/api/cargo/2`
      )
      .then((response) => {
        this.props.setCargo(response.data.data);
      });
  }

  render() {
    return <CargoDetails {...this.props} cargo={this.props.cargo} />;
  }
}

const mapStateToProps = (state) => ({
  cargo: state.cargoesPage.cargo,
});

export default connect(mapStateToProps, { setCargo })(CargoDetailsContainer);
