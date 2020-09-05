import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import "./App.css";
// import CargoesContainer from "../../components/Cargoes/CargoesContainer";
import { CargoDashboard } from "../../components/cargoes/dashboard/CargoDashboard";
import CargoDetailsContainer from "../../components/cargoes/details/CargoDetailsContainer";
import { Navbar } from "../../components/navbar/Navbar";
import CargoFormContainer from "../../components/cargoes/form/CargoFormContainer";
import LoginPage from "../../components/users/login/LoginPage/LoginPage";
import ProfileContainer from "../../components/profile/ProfileContainer";
import { connect } from "react-redux";
import { initialize } from "../../redux/app-reducer";
import { compose } from "redux";
import Loader from "./Loader/Loader";

class App extends Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }

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
          <Route path="/profile" component={ProfileContainer} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize })
)(App);
