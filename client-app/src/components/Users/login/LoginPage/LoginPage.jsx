import React from "react";
import LoginReduxForm from "../LoginForm/LoginForm";
import { connect } from "react-redux";
import { login } from "../../../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(LoginPage);
