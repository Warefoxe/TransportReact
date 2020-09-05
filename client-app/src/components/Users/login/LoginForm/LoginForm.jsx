import React from "react";
import { reduxForm, Field } from "redux-form";
import styled from "styled-components";
import s from "./LoginForm.module.css";
import { NavLink } from "react-router-dom";
import { Input } from "../../../../app/layout/FormControls/FormControls";
import { required } from "../../../../utils/validators/validators";
import error from "../../../../app/layout/FormControls/FormControls.module.css";

const Button = styled.button`
  display: block;
  width: 100px;
  height: 40px;
  margin: 40px auto;
  font-size: 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    background-color: #48dbfb;
    color: #fff;
  }
`;

const LoginForm = (props) => {
  return (
    <div className={s.body}>
      <form className={s.login_form} onSubmit={props.handleSubmit}>
        <h1>Вхід</h1>
        <div className={s.textb}>
          <Field
            className={s.field}
            name={"email"}
            validate={required}
            component={Input}
          />
          <div className={s.placeholder}>Логін</div>
        </div>
        <div className={s.textb}>
          <Field
            className={s.field}
            name={"password"}
            validate={required}
            component={Input}
            type="password"
          />
          <div className={s.placeholder}>Пароль</div>
        </div>
        { props.error && <div className={error.form_summary_error}>{props.error}</div>}
        <Button className={s.btn}>Увійти</Button>
        <NavLink exact to="/cargo">
          Реєстрація
        </NavLink>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
