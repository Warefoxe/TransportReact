import React from "react";
import LoginReduxForm from "../LoginForm/LoginForm";
import { connect } from "react-redux";
import { login } from "../../../../redux/auth-reducer";

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password);
  };
  return (
    <div>
      <h1>Логінка</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { login })(LoginPage);
