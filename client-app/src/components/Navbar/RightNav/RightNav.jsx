import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
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

  a:hover {
    color: rgb(105, 145, 255) !important;
  }

  @media screen and (max-width: 980px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    background-color: #ffffff;
    top: 0;
    right: 0;
    height: 100vh;
    max-width: 350px;
    padding: 80px 50px;
    transition: transform 0.3s ease-in-out;

    a {
      display: block;
      font-size: 18px;
      margin: 30px 0;
    }
  }
`;

const navs = [
  {
    id: 1,
    path: "/cargo",
    name: "Вантаж",
  },
  // {
  //   id: 2,
  //   path: "/transport",
  //   name: "Транспорт",
  // },
  // {
  //   id: 3,
  //   path: "/faq",
  //   name: "Питання-відповідь",
  // },
  // {
  //   id: 4,
  //   path: "/messages",
  //   name: "Повідомлення",
  // },
  // {
  //   id: 5,
  //   path: "/news",
  //   name: "Новини",
  // },

  // {
  //   id: 6,
  //   path: "/login",
  //   name: "Вхід",
  // },

  // {
  //   path: "/register",
  //   name: "Реєстрація",
  // },
];

const RightNav = (props) => {
  return (
    <>
      <Nav open={props.open}>
        {navs.map((navItem) => (
          <NavLink
            key={navItem.id}
            exact
            to={navItem.path}
            activeClassName="active"
          >
            {navItem.name}
          </NavLink>
        ))}
        {props.isAuth ? (
          <NavLink to="/profile">
            {props.displayName} -{" "}
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={props.logout}
            >
              Вийти
            </Button>
            {/* <button onClick={props.logout}>Вийти</button> */}
          </NavLink>
        ) : (
          <>
            <NavLink to="/login">Логін</NavLink>
            <NavLink to="/register">Реєстрація</NavLink>
          </>
        )}
      </Nav>
    </>
  );
};

export default RightNav;
