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
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: calc(90%);
`;
