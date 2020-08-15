import { createStore, combineReducers } from "redux";
import cargoesReducer from "./cargoes-reducer";

let reducers = combineReducers({
  cargoesPage: cargoesReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
