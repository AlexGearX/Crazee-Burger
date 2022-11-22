import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>CRAZEE</h1>
      <img src={"images/F03logo-orange.png"} alt="Logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Amatic SC", cursive;
    text-align: center;
    color: ${theme.colors.white};
    margin: 10px;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P8};
    letter-spacing: ${theme.spacing.xxs};
    font-weight: ${theme.weights.heavy};
  }

  img {
    width: 200px;
  }
`;
