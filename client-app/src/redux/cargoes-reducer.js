const SET_CARGOES = "SET_CARGOES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_CARGOS_COUNT = "SET_TOTAL_CARGOS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  cargoes: [],
  pageSize: 4,
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

export const setCargoesAC = (cargoes) => {
  return {
    type: SET_CARGOES,
    cargoes,
  };
};

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalCargoCountAC = (totalCargosCount) => {
  return {
    type: SET_TOTAL_CARGOS_COUNT,
    count: totalCargosCount,
  };
};

export const toggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export default cargoesReducer;
