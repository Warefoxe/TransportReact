import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../../components/Navbar/Navbar";
// import CargoesContainer from "../../components/Cargoes/CargoesContainer";
import { CargoDashboard } from "../../components/cargoes/dashboard/CargoDashboard";
import CargoDetailsContainer from "../../components/cargoes/details/CargoDetailsContainer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path="/transport">
          <Transport />
        </Route> */}
        <Route exact path="/cargo">
          <CargoDashboard />
        </Route>
        <Route exact path="/cargo/:id" render={() => <CargoDetailsContainer />} />
      </Switch>
    </Router>
  );
};

export default App;
