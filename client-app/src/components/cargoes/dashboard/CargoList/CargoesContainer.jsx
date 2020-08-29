import React, { Component } from "react";
import { connect } from "react-redux";
import Cargoes from "./Cargoes";
import {
  setCargoes,
  setCurrentPage,
  setTotalCargoCount,
  toggleIsFetching,
  getCargoes,
} from "../../../../redux/cargoes-reducer";
import Loader from "../../../../app/layout/Loader/Loader";

class CargoesContainer extends Component {
  componentDidMount() {
    this.props.getCargoes(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getCargoes(pageNumber, this.props.pageSize);
    
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
  getCargoes,
})(CargoesContainer);
