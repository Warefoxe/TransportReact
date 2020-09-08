import { v4 as uuid } from "uuid";

const SET_ALERT = "SET_ALERT";
const REMOVE_ALERT = "REMOVE_ALERT";

let initialState = [];

export const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  //App -> Profile -> MyPosts
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};

export const setAlert = (msg, alertType, timeout = 4000) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
