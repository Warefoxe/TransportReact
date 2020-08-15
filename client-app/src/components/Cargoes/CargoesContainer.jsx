import React, { Component } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Cargoes from "./Cargoes";
import {
  setCargoes,
  setCurrentPage,
  setTotalCargoCount,
  toggleIsFetching,
} from "../../redux/cargoes-reducer";
import Loader from "../../app/layout/Loader/Loader";

class CargoesContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        // "http://localhost:59101/api/cargo"
        `http://localhost:59101/api/cargo?PageNumber=${this.props.currentPage}&PageSize=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        // console.log(response);
        this.props.setCargoes(response.data.data);
        this.props.setTotalCargoCount(response.data.totalRecords);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        // "http://localhost:59101/api/cargo"
        `http://localhost:59101/api/cargo?PageNumber=${pageNumber}&PageSize=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        // console.log(response);
        this.props.setCargoes(response.data.data);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Cargoes
          totalCargosCount={this.props.totalCargosCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          cargoes={this.props.cargoes}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cargoes: state.cargoesPage.cargoes,
    pageSize: state.cargoesPage.pageSize,
    totalCargosCount: state.cargoesPage.totalCargosCount,
    currentPage: state.cargoesPage.currentPage,
    isFetching: state.cargoesPage.isFetching,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setCargoes: (cargoes) => {
//       dispatch(setCargoesAC(cargoes));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalCargoCount: (totalCount) => {
//       dispatch(setTotalCargoCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  setCargoes,
  setCurrentPage,
  setTotalCargoCount,
  toggleIsFetching,
})(CargoesContainer);
