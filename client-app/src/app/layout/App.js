import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import CargoesContainer from "../../components/Cargoes/CargoesContainer";
import { CargoDashboard } from "../../components/cargoes/dashboard/CargoDashboard";
import CargoDetailsContainer from "../../components/cargoes/details/CargoDetailsContainer";
import { Navbar } from "../../components/navbar/Navbar";
import CargoFormContainer from "../../components/cargoes/form/CargoFormContainer";
import LoginPage from "../../components/users/login/LoginPage/LoginPage";
import Profile from "../../components/profile/Profile";

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
        <Route
          exact
          path="/cargo/:id"
          render={() => <CargoDetailsContainer />}
        />
        <Route path="/createCargo" component={CargoFormContainer} />
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
