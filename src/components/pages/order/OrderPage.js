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
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: ${theme.colors.primary};
    background-size: cover;
    background-position: center;
  }
  .container {
    background-color: ${theme.colors.background_white};
    border: 1px transparent black;
    border-radius: ${theme.borderRadius.extraRound};
    margin: ${theme.spacing.md};
    width: 100%;
    max-width: 1400px;
  }
`;
