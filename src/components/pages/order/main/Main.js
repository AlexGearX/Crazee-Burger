import React from "react";
import styled from "styled-components";
import Basket from "./Basket";
import Product from "./Product";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <Product />
    </MainStyled>
  );
}
const MainStyled = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  max-height: 86.5vh;
`;
