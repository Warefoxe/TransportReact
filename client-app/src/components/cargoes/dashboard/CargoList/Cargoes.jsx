import React from "react";
import s from "./Cargoes.module.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Pagination = styled.div`
  display: inline-block;
  padding: 2px;
  margin: 2px;
  cursor: pointer;
`;

const A = styled.a`
  text-decoration: none;
  color: blue;
  float: left;
  padding: 10px 15px;
`;

const Name = styled.h3`
  padding: 7px 15px;
  border: 1px solid #c1bdbd;
  font-size: 16px;
`;

const Body = styled.div`
  padding: 7px 15px;
  border: 1px solid #c1bdbd;
  font-size: 15px;
  color: #2d2d2d;
  border-top: 0px;
`;

const Desc = styled.div`
  padding: 5px 0px;
  word-wrap: break-word;
`;

const Weight = styled.div`
  color: #000000;
  font-weight: 300;
  margin: 6px 0;
`;

const Description = styled.p`
  color: #000000;
  font-weight: 300;
`;

const Cargoes = (props) => {
  let pagesCount = Math.ceil(props.totalCargosCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {props.cargoes.map((cargo) => (
        <div key={cargo.id}>
          <NavLink to={"/cargo/" + cargo.id}>
            <Name>{cargo.name}</Name>
          </NavLink>
          <Body>
            <Desc>
              <Weight>
                <b>Вага: </b>
                {cargo.weight} кг.
              </Weight>
            </Desc>
            <Desc>
              <Description>
                <b>Деталі замовлення: </b>
                {cargo.description}
              </Description>
            </Desc>
          </Body>
        </div>
      ))}

      <div>
        {pages.map((p) => {
          return (
            <Pagination>
              <A
                className={props.currentPage === p && s.selectedPage}
                onClick={(e) => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </A>
            </Pagination>
          );
        })}
      </div>
    </div>
  );
};

export default Cargoes;
