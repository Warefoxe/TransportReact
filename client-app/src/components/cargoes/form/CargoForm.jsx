import React from "react";
import styled from "styled-components";
import * as axios from "axios";

const Section = styled.section`
  height: 100vh;
  min-height: 500px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  outline: none;
  padding: 20px;
  min-height: 200px;
  resize: vertical;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  outline: none;
  padding: 20px;
`;

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
  return (
    <Section>
      <Div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            axios.post("http://localhost:44351/api/cargo").then((cargo) => {
              let newCargo = {
                ...cargo,
                id: this.props.cargoes.length + 1,
              };
              console.log(newCargo);
              // this.props.addCargo(newCargo);
            });
          }}
        >
          <Input
            onChange={props.handleInputChange}
            name="name"
            placeholder="Name"
          ></Input>
          <Input
            onChange={props.handleInputChange}
            name="weight"
            placeholder="Weight"
          ></Input>
          <TextArea
            onChange={props.handleInputChange}
            name="description"
            placeholder="Description"
          ></TextArea>
          <Button type="submit">Опублікувати перевезення</Button>
        </Form>
      </Div>
    </Section>
  );
};

export default CargoForm;
