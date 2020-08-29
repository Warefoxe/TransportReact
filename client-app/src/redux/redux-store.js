import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import cargoesReducer from "./cargoes-reducer";
import usersReducer from "./users-reducer";
import burgerReducer from "./burger-reducer";
import { reducer as formReducer } from 'redux-form'
import authReducer, { setAuthorizationToken } from "./auth-reducer";

let reducers = combineReducers({
  cargoesPage: cargoesReducer,
  usersPage: usersReducer,
  burger: burgerReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
setAuthorizationToken(localStorage.jwtToken);
window.store = store;

export default store;
