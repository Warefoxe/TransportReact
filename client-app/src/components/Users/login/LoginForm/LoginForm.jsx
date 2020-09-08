import React from "react";
import { reduxForm, Field } from "redux-form";
import s from "./LoginForm.module.css";
import { NavLink } from "react-router-dom";
import { Input } from "../../../../app/layout/FormControls/FormControls";
import { required } from "../../../../utils/validators/validators";
// import error from "../../../../app/layout/FormControls/FormControls.module.css";

const LoginForm = (props) => {
  return (
    <>
      <h1 className="large text-primary">Увійти</h1>
      <p className="lead">Увійдіть у свій обліковий запис</p>
      <form className="form" onSubmit={props.handleSubmit}>
        <div className="form-group">
          <Field
            className={s.field}
            placeholder="Електронна адреса"
            name={"email"}
            validate={required}
            component={Input}
            type="email"
          />
        </div>
        <div className="form-group">
          <Field
            className={s.field}
            placeholder="Пароль"
            name={"password"}
            validate={required}
            component={Input}
            type="password"
          />
        </div>
        {/* {props.error && (
          <div className={error.form_summary_error}>{props.error}</div>
        )} */}
        <button className="btn btn-primary">Увійти</button>
        <p className="my-1">
          Не маєте облікового запису?{" "}
          <NavLink to="/register">Зареєструйтесь</NavLink>
        </p>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
