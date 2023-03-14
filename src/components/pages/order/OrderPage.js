import React from "react";
import { useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default function OrderPage() {
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  
  const handleAdd = (newProduct) => { 
    const productsCopy = [...menu]
    const productUpdated = [newProduct, ...productsCopy]
    setMenu(productUpdated)
  }
  
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd
  }
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  background: ${theme.colors.primary};
  .container {
    background-color: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.extraRound};
    margin: auto;
    height: 95vh;
    width: 100%;
    max-width: 1400px;
    box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.4);
  }
`;
