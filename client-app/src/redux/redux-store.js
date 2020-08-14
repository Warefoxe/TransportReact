import { createStore, combineReducers } from "redux";
import cargoesReducer from "./cargoes-reducer";

let reducers = combineReducers({
  cargoesPage: cargoesReducer,
});

let store = createStore(reducers);

export default store;
