import { authAPI } from "../app/api/agent";
import * as axios from "axios";
// import { stopSubmit } from "redux-form";
import { setAlert } from "./alert-reducer";

const SET_USER_DATA = "SET_USER_DATA";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";

let initialState = {
  token: localStorage.getItem("jwtToken"),
  displayName: null,
  userName: null,
  isAuth: false,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  //App -> Profile -> MyPosts
  switch (type) {
    case SET_USER_DATA:
      return { ...state, ...payload };
    case REGISTER_SUCCESS:
      // localStorage.setItem("jwtToken", payload.token);
      // return { ...state, ...payload, isAuth: true, loading: false };
      return { ...state, ...payload };

    case REGISTER_FAIL:
      // localStorage.removeItem("jwtToken");
      // return { ...state, token: null, isAuth: false, loading: false };
      return { ...state, isAuth: false, loading: false };

    default:
      return state;
  }
};

export const setAuthRegisterData = (
  displayName,
  userName,
  email,
  password
) => ({
  type: REGISTER_SUCCESS,
  payload: { displayName, userName, email, password },
});

export const setAuthUserData = (displayName, userName, isAuth) => ({
  type: SET_USER_DATA,
  payload: { displayName, userName, isAuth },
});

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export const getAuthUserData = () => (dispatch) => {
  const token = localStorage.jwtToken;
  if (token) {
    return axios
      .get("https://localhost:44351/api/user", {
        "API-KEY": "45d4232f-3e4f-44b1-b25d-9f3a7e34f6af",
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        let { displayName, userName } = response.data;
        // setAuthorizationToken(token);
        dispatch(setAuthUserData(displayName, userName, true));
      });
  }
};

export const register = (displayName, userName, email, password) => async (
  dispatch
) => {
  authAPI
    .register(displayName, userName, email, password)
    .then((response) => {
      dispatch(setAuthRegisterData(displayName, userName, email, password));
      dispatch(setAlert("Ви успішно зареєстувалися", "success"));
    })
    .catch((err) => {
      const errors = err.response.data.errors;

      if (errors) {
        Object.values(errors).forEach((error) => {
          dispatch(setAlert(error, "danger"));
        });
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const login = (email, password) => (dispatch) => {
  authAPI
    .login(email, password)
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem("jwtToken", token);
      // axios.defaults.headers.common["Authorization"] = token;
      // console.log(JwtDecode(token));
      // setAuthorizationToken(token);
      dispatch(getAuthUserData());
      // console.log(dispatch(loginUser(response.data)));
    })
    .catch((response) => {
      dispatch(setAlert("Логін чи пароль неправильні", "danger"));
      // dispatch(stopSubmit("login", { _error: "Логін чи пароль неправильні" }));
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  // setAuthorizationToken(false);
  dispatch(setAuthUserData(null, null, false));
};

export default authReducer;
