import React, { useState } from "react";
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

// const Name = styled.h3`
//   padding: 7px 15px;
//   border: 1px solid #c1bdbd;
//   font-size: 16px;
// `;

// const Body = styled.div`
//   padding: 7px 15px;
//   border: 1px solid #c1bdbd;
//   font-size: 15px;
//   color: #2d2d2d;
//   border-top: 0px;
// `;

// const Desc = styled.div`
//   padding: 5px 0px;
//   word-wrap: break-word;
// `;

// const Weight = styled.div`
//   color: #000000;
//   font-weight: 300;
//   margin: 6px 0;
// `;

// const Description = styled.p`
//   color: #000000;
//   font-weight: 300;
// `;

const Cargoes = React.memo((props) => {
  let pagesCount = Math.ceil(props.totalCargosCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / 10);
  let [portionNumber, setportionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * 10 + 1;
  let rightPortionPageNumber = portionNumber * 10;

  console.log(props.cargoes);
  return (
    <div>
      <div>
        <NavLink exact to="/createCargo" className={s.add_zakaz}>
          Додати замовлення
        </NavLink>
      </div>
      <div className={s.news_header}>
        <span>Замовлення на перевезення</span>
      </div>
      {props.cargoes.map((cargo) => (
        <div key={cargo.id} className="cargoes">
          <div className="cargo bg-white p-1 my-1">
            <div>
              <NavLink to={"/cargo/" + cargo.id}>
                <img
                  className="round-img"
                  src={
                    cargo.image ||
                    "https://www.iconfinder.com/data/icons/abstract-1/512/no_image-512.png"
                  }
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              <p className="my-1">
                <strong>{cargo.name}</strong>
              </p>
              <p className="my-1">
                <b>Вага: </b>
                {cargo.weight} кг.
              </p>
              <p className="my-1">
                <b>Деталі замовлення: </b>
                {cargo.description}
              </p>
            </div>
          </div>
        </div>
        // <div key={cargo.id}>
        //   <NavLink to={"/cargo/" + cargo.id}>
        //     <Name>{cargo.name}</Name>
        //   </NavLink>
        //   <Body>
        //     <img
        //       className="round-img"
        //       src="https://www.iconfinder.com/data/icons/abstract-1/512/no_image-512.png"
        //       alt=""
        //     />
        //     <Desc>
        //       <Weight>
        //         <b>Вага: </b>
        //         {cargo.weight} кг.
        //       </Weight>
        //     </Desc>
        //     <Desc>
        //       <Description>
        //         <b>Деталі замовлення: </b>
        //         {cargo.description}
        //       </Description>
        //     </Desc>
        //   </Body>
        // </div>
      ))}

      <div>
        {portionNumber > 1 && (
          <Pagination>
            <A
              onClick={() => {
                setportionNumber(portionNumber - 1);
              }}
            >
              PREV
            </A>
          </Pagination>
        )}
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <Pagination key={p}>
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
        {portionCount > portionNumber && (
          <Pagination>
            <A
              onClick={() => {
                setportionNumber(portionNumber + 1);
              }}
            >
              NEXT
            </A>
          </Pagination>
        )}
      </div>
    </div>
  );
});

export default Cargoes;
