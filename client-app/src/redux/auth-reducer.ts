import { authAPI } from "../app/api/agent";
import * as axios from "axios";
// import { stopSubmit } from "redux-form";
import { setAlert } from "./alert-reducer";
import { type } from "os";

const SET_USER_DATA = "SET_USER_DATA";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";

export type InitialStateType = {
  displayName: string | null;
  userName: string | null;
  isAuth: boolean;
  loading: boolean;
};

let initialState: InitialStateType = {
  // token: localStorage.getItem("jwtToken"),
  displayName: null,
  userName: null,
  isAuth: false,
  loading: true,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type setAuthRegisterDataPayloadType = {
  displayName: string;
  userName: string;
  email: string;
  password: string;
};

type setAuthRegisterDataType = {
  type: typeof REGISTER_SUCCESS;
  payload: setAuthRegisterDataPayloadType;
};

export const setAuthRegisterData = (
  displayName: string,
  userName: string,
  email: string,
  password: string
): setAuthRegisterDataType => ({
  type: REGISTER_SUCCESS,
  payload: { displayName, userName, email, password },
});

type setAuthUserDataType = {
  type: typeof SET_USER_DATA;
  payload: { displayName: string; userName: string; isAuth: boolean };
};

export const setAuthUserData = (
  displayName: string | null,
  userName: string | null,
  isAuth: boolean
) => ({
  type: SET_USER_DATA,
  payload: { displayName, userName, isAuth },
});

// export function setAuthorizationToken(token) {
//   if (token) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common["Authorization"];
//   }
// }

export const getAuthUserData = () => async (dispatch: any) => {
  const token = localStorage.jwtToken;

  if (token) {
    let response = await authAPI.currentUser();

    let { displayName, userName } = response.data;
    //       // setAuthorizationToken(token);
    dispatch(setAuthUserData(displayName, userName, true));
  }
  // if (token) {
  //   return axios
  //     .get("https://localhost:44351/api/user", {
  //       "API-KEY": "45d4232f-3e4f-44b1-b25d-9f3a7e34f6af",
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((response) => {
  //       let { displayName, userName } = response.data;
  //       // setAuthorizationToken(token);
  //       dispatch(setAuthUserData(displayName, userName, true));
  //     });
  // }
};

export const register = (
  displayName: string,
  userName: string,
  email: string,
  password: string
) => async (dispatch: any) => {
  try {
    let response = await authAPI.register(
      displayName,
      userName,
      email,
      password
    );

    dispatch(setAuthRegisterData(displayName, userName, email, password));
    dispatch(setAlert("Ви успішно зареєстувалися", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      Object.values(errors).forEach((error) => {
        dispatch(setAlert(error, "danger"));
      });
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }

  // authAPI
  //   .register(displayName, userName, email, password)
  //   .then((response) => {
  //     dispatch(setAuthRegisterData(displayName, userName, email, password));
  //     dispatch(setAlert("Ви успішно зареєстувалися", "success"));
  //   })
  //   .catch((err) => {
  //     const errors = err.response.data.errors;

  //     if (errors) {
  //       Object.values(errors).forEach((error) => {
  //         dispatch(setAlert(error, "danger"));
  //       });
  //     }

  //     dispatch({
  //       type: REGISTER_FAIL,
  //     });
  //   });
};

export const login = (email: string, password: string) => async (dispatch: any) => {
  try {
    let response = await authAPI.login(email, password);
    const token = response.data.token;
    localStorage.setItem("jwtToken", token);
    // axios.defaults.headers.common["Authorization"] = token;
    // console.log(JwtDecode(token));
    // setAuthorizationToken(token);
    dispatch(getAuthUserData());
    // console.log(dispatch(loginUser(response.data)));
  } catch (error) {
    dispatch(setAlert("Логін чи пароль неправильні", "danger"));
  }
  // authAPI
  //   .login(email, password)
  //   .then((response) => {
  //     const token = response.data.token;
  //     localStorage.setItem("jwtToken", token);
  //     // axios.defaults.headers.common["Authorization"] = token;
  //     // console.log(JwtDecode(token));
  //     // setAuthorizationToken(token);
  //     dispatch(getAuthUserData());
  //     // console.log(dispatch(loginUser(response.data)));
  //   })
  //   .catch((response) => {
  //     dispatch(setAlert("Логін чи пароль неправильні", "danger"));
  //     // dispatch(stopSubmit("login", { _error: "Логін чи пароль неправильні" }));
  //   });
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem("jwtToken");
  // setAuthorizationToken(false);
  dispatch(setAuthUserData(null, null, false));
};

export default authReducer;
