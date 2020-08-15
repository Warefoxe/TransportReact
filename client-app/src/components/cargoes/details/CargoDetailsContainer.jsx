import React, { Component } from "react";
import CargoDetails from "./CargoDetails";
import * as axios from "axios";
import { connect } from "react-redux";
import { setCargo } from "../../../redux/cargoes-reducer";
import { withRouter } from "react-router-dom";

class CargoDetailsContainer extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(
        // "http://localhost:59101/api/cargo"
        `http://localhost:59101/api/cargo/` + id
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

const WithUrlDataContainer = withRouter(CargoDetailsContainer);

export default connect(mapStateToProps, { setCargo })(WithUrlDataContainer);
