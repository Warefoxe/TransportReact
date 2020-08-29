import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Логін" name={"email"} component={"input"} />
      </div>
      <div>
        <Field placeholder="Пароль" name={"password"} component={"input"} type="password" />
      </div>
      <div>
        <button>Увійти</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
