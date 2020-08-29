import { authAPI } from "../app/api/agent";
import * as axios from "axios";

const LOGIN_USER = "LOGIN_USER";

let initialState = {
  currentUser: {},
};

const authReducer = (state = initialState, action) => {
  //App -> Profile -> MyPosts
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export const loginUser = (userObj) => ({
  type: LOGIN_USER,
  payload: userObj,
});

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export const login = (email, password) => (dispatch) => {
  authAPI.login(email, password).then((response) => {
    const token = response.data.token;
    localStorage.setItem("jwtToken", token);
    // axios.defaults.headers.common["Authorization"] = token;
    // console.log(JwtDecode(token));
    dispatch(loginUser(response.data));
    // console.log(dispatch(loginUser(response.data)));
  });
};

export const profile = () => (dispatch) => {
  const token = localStorage.jwtToken;
  axios
    .get("https://localhost:44351/api/user", {
      "API-KEY": "45d4232f-3e4f-44b1-b25d-9f3a7e34f6af",
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      // setAuthorizationToken(token);
      dispatch(loginUser(response.data));
    });
};

export default authReducer;
