import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import cargoesReducer from "./cargoes-reducer";
import usersReducer from "./users-reducer";
import burgerReducer from "./burger-reducer";
import { reducer as formReducer } from "redux-form";
import authReducer, { setAuthorizationToken } from "./auth-reducer";
import appReducer from "./app-reducer";
import { alertReducer } from "./alert-reducer";

let reducers = combineReducers({
  cargoesPage: cargoesReducer,
  usersPage: usersReducer,
  burger: burgerReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  alertReducer: alertReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// setAuthorizationToken(localStorage.jwtToken);
window.store = store;

export default store;
