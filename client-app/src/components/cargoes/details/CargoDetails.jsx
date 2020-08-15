import React from "react";
import styled from "styled-components";
import Loader from "../../../app/layout/Loader/Loader";

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

const CargoDetails = (props) => {
  if (!props.cargo) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <Name>{props.cargo.name}</Name>
        <Body>
          <Desc>
            <Weight>
              <b>Вага: </b>
              {"cargo.weight"} кг.
            </Weight>
          </Desc>
          <Desc>
            <Description>
              <b>Деталі замовлення: </b>
              {"cargo.description"}
            </Description>
          </Desc>
        </Body>
      </div>
    </div>
  );
};

export default CargoDetails;
