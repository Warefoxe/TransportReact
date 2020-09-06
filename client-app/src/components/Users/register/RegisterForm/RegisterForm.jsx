import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { authAPI } from "../../../../app/api/agent";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    userName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { displayName, userName, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Паролі не співпадають");
    } else {
      try {
        authAPI.register(displayName, userName, email, password);
      } catch (error) {
      }
    }
  };

  return (
    <>
      <h1 className="large text-primary">Зареєструйтесь</h1>
      <p className="lead">Створити свій обліковий запис</p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Відображуване ім'я"
            name="displayName"
            value={displayName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Ваше ім'я"
            name="userName"
            value={userName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Електронна адреса"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Підтвердьте пароль"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Реєстрація" />
      </form>
      <p className="my-1">
        Вже є аккаунт? <NavLink to="/login">Увійти</NavLink>
      </p>
    </>
  );
};

export default RegisterForm;
