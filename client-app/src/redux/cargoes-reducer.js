import { cargoesAPI } from "../app/api/agent";
import { setAlert } from "./alert-reducer";
import { getAuthUserData } from "./auth-reducer";

const SET_CARGOES = "GET_CARGOES";
const CARGO_ERROR = "CARGO_ERROR";

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
  error: {},
};

const cargoesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARGOES:
      return {
        ...state,
        cargoes: action.cargoes,
      };
    case CARGO_ERROR:
      return {
        ...state,
        error: action,
      };
    case SET_CARGO:
      return {
        ...state,
        cargo: action.cargo,
      };
    case ADD_CARGO:
      return {
        ...state,
        cargoes: [...state.cargoes, action.payload],
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

export const addCargo = (name, weight, description) => {
  return {
    type: ADD_CARGO,
    payload: { name, weight, description },
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

export const createAttendee = (user) => {
  return {
    displayName: user.displayName,
    isHost: false,
    username: user.username,
  };
};

export const createCargo = (name, weight, description, image) => async (dispatch) => {
  console.log(dispatch(getAuthUserData()));
  cargoesAPI
    .createCargo(name, weight, description, image)
    .then((response) => {
      dispatch(addCargo(name, weight, description, image));
      console.log(dispatch(getAuthUserData()));
      // await agent.Activities.create(activity);
      // const attendee = createAttendee(this.rootStore.userStore.user!);
      // attendee.isHost = true;
      // let attendees = [];
      // attendees.push(attendee);
      // activity.attendees = attendees;
      // activity.comments = [];
      // activity.isHost = true;
      dispatch(setAlert("Вантаж створено", "success"));
    })
    .catch((err) => {
      dispatch(setAlert("Логін чи пароль неправильні", "danger"));

      // const errors = err.response.data.errors;
      // if (errors) {
      //   Object.values(errors).forEach((error) => {
      //     dispatch(setAlert(error, "danger"));
      //   });
      // }
      // dispatch({
      //   type: CARGO_ERROR,
      // });
    });
};

export default cargoesReducer;
