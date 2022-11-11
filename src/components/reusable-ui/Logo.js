import React from "react";
import styled from "styled-components";
import logoLoginPage from "../../assets/images/login/F03logo-orange.png";
import { theme } from "../../theme";

export default function Logo() {
  return (
    <LogoStyled>
      <h1 className="h1-LoginPages">CRAZEE</h1>
      <img src={logoLoginPage} alt="Logo" />
      <h1 className="h1-LoginPages">BURGER</h1>
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
  }
  .h1-LoginPages {
    margin: 10px;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P7};
    letter-spacing: ${theme.spacing.xxs};
    font-weight: ${theme.weights.heavy};
  }

  img {
    width: 200px;
  }
`;
