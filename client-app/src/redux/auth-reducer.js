import { authAPI } from "../app/api/agent";
import * as axios from "axios";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  displayName: null,
  userName: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  //App -> Profile -> MyPosts
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

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
      dispatch(stopSubmit("login", { _error: "Логін чи пароль неправильні" }));
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  // setAuthorizationToken(false);
  dispatch(setAuthUserData(null, null, false));
};

export default authReducer;
