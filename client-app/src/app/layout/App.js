import React, { Component, Fragment } from "react";
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
import RegisterPage from "../../components/users/register/RegisterPage/RegisterPage";
import RegisterForm from "../../components/users/register/RegisterForm/RegisterForm";
import Cargo from "../../components/cargoes/dashboard/Cargo/Cargo";

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
        <Fragment>
          <Navbar />
          {/* <Route exact path="/transport">
            <Transport />
          </Route> */}
          <Route exact path="/" component={Cargo} />

          <Route exact path="/cargo">
            <CargoDashboard />
          </Route>
          <Route
            exact
            path="/cargo/:id"
            render={() => <CargoDetailsContainer />}
          />
          <Route path="/profile" component={ProfileContainer} />

          <section className="container">
            <Switch>
              <Route exact path="/createCargo" component={CargoFormContainer} />
              <Route exact path="/register" component={RegisterForm}></Route>
              <Route exact path="/login" component={LoginPage}></Route>
            </Switch>
          </section>
        </Fragment>
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
