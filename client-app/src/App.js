import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CargoesContainer from "./components/Cargoes/CargoesContainer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path="/transport">
          <Transport />
        </Route> */}
        <Route exact path="/">
          <CargoesContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
