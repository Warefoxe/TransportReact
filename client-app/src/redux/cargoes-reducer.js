import { cargoesAPI } from "../app/api/agent";

const SET_CARGOES = "SET_CARGOES";
const SET_CARGO = "SET_CARGO";
const ADD_CARGO = "ADD_CARGO";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_CARGOS_COUNT = "SET_TOTAL_CARGOS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  cargoes: [],
  cargo: null,
  pageSize: 2,
  totalCargosCount: 0,
  currentPage: 1,
  isFetching: true,
};

const cargoesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARGOES:
      return {
        ...state,
        cargoes: action.cargoes,
      };
    case SET_CARGO:
      return {
        ...state,
        cargo: action.cargo,
      };
    case ADD_CARGO:
      return [...state, action.payload];
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_CARGOS_COUNT:
      return {
        ...state,
        totalCargosCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const setCargoes = (cargoes) => {
  return {
    type: SET_CARGOES,
    cargoes,
  };
};

export const setCargo = (cargo) => {
  return {
    type: SET_CARGO,
    cargo,
  };
};

export const addCargo = (cargo) => {
  return {
    type: ADD_CARGO,
    cargo,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalCargoCount = (totalCargosCount) => {
  return {
    type: SET_TOTAL_CARGOS_COUNT,
    count: totalCargosCount,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const getCargoes = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    cargoesAPI.getCargoes(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setCargoes(data.data));
      dispatch(setTotalCargoCount(data.meta.totalCount));
    });
  };
};

export const getCargo = (id) => (dispatch) => {
  cargoesAPI.getCargo(id).then((response) => {
    dispatch(setCargo(response.data));
  });
};

export default cargoesReducer;
