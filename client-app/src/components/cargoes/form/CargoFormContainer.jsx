import React, { Component } from "react";
import { connect } from "react-redux";
import { addCargo } from "../../../redux/cargoes-reducer";
import styled from "styled-components";

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

class CargoFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      weight: "",
      description: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newCargo = {
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      name: this.state.name,
      weight: this.state.weight,
      description: this.state.weight,
    };
    this.props.createCargo(newCargo);  

  };

  handleReset = () => {
    this.setState({
      name: "",
      weight: "",
      description: "",
    });
  };

  render() {
    return (
      <Section>
        <Div>
          <Form onSubmit={this.handleSubmit}>
            <Input
              onChange={this.handleInputChange}
              name="name"
              placeholder="Name"
            ></Input>
            <Input
              onChange={this.handleInputChange}
              name="weight"
              placeholder="Weight"
            ></Input>
            <TextArea
              onChange={this.handleInputChange}
              name="description"
              placeholder="Description"
            ></TextArea>
            <Button type="submit">Опублікувати перевезення</Button>
          </Form>
        </Div>
      </Section>
    );
  }
}

const mapStateToProps = (state) => ({
  cargoes: state.cargoes,
  cargo: state.cargo,
});

const mapActionToProps = {
  createCargo: addCargo,
}

export default connect(mapStateToProps, mapActionToProps)(CargoFormContainer);
