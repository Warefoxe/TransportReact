import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  outline: none;
  width: 250px;
  background-color: transparent;
  color: rgb(105, 145, 255);
  font-size: 16px;
  border: 2px solid rgb(105, 145, 255);
  padding: 0;
  margin-left: auto;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    background-color: #48dbfb;
    color: #fff;
  }
`;

const CargoForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    description: "",
  });

  const { name, weight, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.createCargo(name, weight, description);
  };

  return (
    <>
      <NavLink to="/cargo" className="btn">
        Повернутися до замовлень
      </NavLink>
      <h1 className="large dark-color">Створення вантажу</h1>
      <p className="lead">Створіть свій вантаж, який ви хочете перевезти</p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Назва вантажу"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Вага вантажу"
            name="weight"
            value={weight}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            placeholder="Опис вантажу"
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        {/* <div className="form-group">
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div> */}
        <Button type="submit">Опублікувати перевезення</Button>
      </form>
    </>
  );
};

export default CargoForm;
