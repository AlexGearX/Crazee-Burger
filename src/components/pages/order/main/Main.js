import React from "react";
import styled from "styled-components";
// import Basket from "./Basket";
import Products from "./Products";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <Products />
    </MainStyled>
  );
}
const MainStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: calc(84.9vh);
`;
