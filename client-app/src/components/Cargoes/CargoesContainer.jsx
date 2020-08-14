import React, { Component } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Cargoes from "./Cargoes";
import {
  setCargoesAC,
  setCurrentPageAC,
  setTotalCargoCountAC,
} from "../../redux/cargoes-reducer";

class CargoesContainer extends Component {
  componentDidMount() {
    axios
      .get(
        // "http://localhost:59101/api/cargo"
        `http://localhost:59101/api/cargo?PageNumber=${this.props.currentPage}&PageSize=${this.props.pageSize}`
      )
      .then((response) => {
        // console.log(response);
        this.props.setCargoes(response.data.data);
        this.props.setTotalCargoCount(response.data.totalRecords);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        // "http://localhost:59101/api/cargo"
        `http://localhost:59101/api/cargo?PageNumber=${pageNumber}&PageSize=${this.props.pageSize}`
      )
      .then((response) => {
        // console.log(response);
        this.props.setCargoes(response.data.data);
      });
  };

  render() {
    return (
      <Cargoes
        totalCargosCount={this.props.totalCargosCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        cargoes={this.props.cargoes}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cargoes: state.cargoesPage.cargoes,
    pageSize: state.cargoesPage.pageSize,
    totalCargosCount: state.cargoesPage.totalCargosCount,
    currentPage: state.cargoesPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCargoes: (cargoes) => {
      dispatch(setCargoesAC(cargoes));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalCargoCount: (totalCount) => {
      dispatch(setTotalCargoCountAC(totalCount));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CargoesContainer);
