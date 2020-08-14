const SET_CARGOES = "SET_CARGOES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_CARGOS_COUNT = "SET_TOTAL_CARGOS_COUNT";

let initialState = {
  cargoes: [],
  pageSize: 2,
  totalCargosCount: 0,
  currentPage: 1,
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

export default cargoesReducer;
