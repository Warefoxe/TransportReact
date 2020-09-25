import React from "react";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import Loader from "../../../app/layout/Loader/Loader";

// const DIV = styled.div`
//   background-color: transparent;
//   width: 100%;
//   height: 800px;
// `;

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

const CargoDetails = (props) => {
  if (!props.cargo) {
    return <Loader />;
  }

  return (
    <section className="container">
      <NavLink to="/cargo" className="btn">
        Повернутися до замовлень
      </NavLink>
      <div className="cargo bg-white p-1 my-1">
        <div>
          <img
            className="round-img"
            src={
              props.cargo.image ||
              "https://www.iconfinder.com/data/icons/abstract-1/512/no_image-512.png"
            }
            alt=""
          />
        </div>
        <div>
          <p className="my-1">
            <strong>{props.cargo.name}</strong>
          </p>
          <p className="my-1">
            <b>Вага: </b>
            {props.cargo.weight} кг.
          </p>
          <p className="my-1">
            <b>Деталі замовлення: </b>
            {props.cargo.description}
          </p>
        </div>
      </div>{" "}
    </section>
    // <section className="container">
    //   <NavLink to="/cargo" className="btn">
    //     Повернутися до замовлень
    //   </NavLink>
    //   <DIV>
    //     <Name>{props.cargo.name}</Name>
    //     <Body>
    //       <Desc>
    //         <b>Профіль замовника: </b>
    //         {/* {props.cargo.attendees[0].displayName} */}
    //       </Desc>
    //       <Desc>
    //         <Weight>
    //           <b>Вага: </b>
    //           {props.cargo.weight} кг.
    //         </Weight>
    //       </Desc>
    //       <Desc>
    //         <Description>
    //           <b>Деталі замовлення: </b>
    //           {props.cargo.description}
    //         </Description>
    //       </Desc>
    //     </Body>
    //   </DIV>
    // </section>
  );
};

export default CargoDetails;
