import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.div`
  a {
    color: #000000;
    font-size: 15px;
    font-weight: 500;
    margin-left: 30px;
    transition: 0.2s linear;
  }

  a.active {
    color: #01bedc !important;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink exact to="/" activeClassName="active">
        Cargoes
      </NavLink>
      <NavLink exact to="/transport" activeClassName="active">
        Transports
      </NavLink>
    </Nav>
  );
};

export default Navbar;
