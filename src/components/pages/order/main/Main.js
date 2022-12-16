import React from "react";
import styled from "styled-components";
import Basket from "./Basket";
import Products from "./Products";

export default function Main() {
  return (
    <MainStyled>
      <Basket />
      <Products />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: calc(84.9vh);
`;
