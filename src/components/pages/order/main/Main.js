import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import Admin from "./Admin/Admin";
// import Basket from "./Basket";
import Menu from "./Menu";

export default function Main() {
    const { isModeAdmin } = useContext(OrderContext)
  return (
    <MainStyled>
      {/* <Basket /> */}
      <Menu />
      {isModeAdmin && <Admin />}
    </MainStyled>
  );
}

const MainStyled = styled.div`
  position: relative;
  display: grid;
  /* grid-template-columns: 25% 75%; Quand il y aura le panier*/
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: calc(84.9vh);
`;
