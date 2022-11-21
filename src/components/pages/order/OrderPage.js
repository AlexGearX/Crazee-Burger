import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./navbar/Navbar";

export default function OrderPage() {
  const { name } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar name={name} />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  background: ${theme.colors.primary};

  .container {
    background-color: ${theme.colors.background_white};
    border: 1px transparent black;
    border-radius: ${theme.borderRadius.extraRound};
    margin: ${theme.spacing.md};
    width: 100%;
    max-width: 1400px;
  }
`;
