import React, { useState } from "react";
import styled from "styled-components";
import RightNavContainer from "../RightNav/RightNavContainer";

const StuiledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 20;
  display: none;

  @media (max-width: 980px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StuiledBurger open={open} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </StuiledBurger>
      <RightNavContainer open={open} />
    </>
  );
};

export default Burger;
