import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AdminPanelContext from "../../../context/AdminPanelContext";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default function OrderPage() {
  const { name } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const isModeAdminContextValue = {
    isModeAdmin,
    setIsModeAdmin,
  };

  return (
    <AdminPanelContext.Provider value={isModeAdminContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar name={name} />
          <Main />
        </div>
      </OrderPageStyled>
    </AdminPanelContext.Provider>
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
