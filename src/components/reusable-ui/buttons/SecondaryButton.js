import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function SecondaryButton({ onClick, label, icon, className }) {
  return (
    <SecondaryButtonStyled className={className} onClick={onClick}>
      <div className="btn-container">
        <div className="icon">{icon}</div>
        {label !== '' ? <text>{label}</text> : undefined}
      </div>
    </SecondaryButtonStyled>
  );
}

const SecondaryButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  font-family: "Open Sans", sans-serif;
  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.regular};
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  color: ${theme.colors.GreyLightBlue};
  height: 43px;
  padding: 0 22px 0 22px;
  margin-right: 1px;
text{
  padding-left:10px;
}
  .btn-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  }

  cursor: pointer;

  :hover {
    text-decoration: underline ${theme.colors.GreyLightBlue};
    border-bottom: 1px solid ${theme.colors.white};
    background-color: ${theme.colors.white};
  }

  .icon {
    font-size: 16px;
    padding: 5px 0 0 0;
  }

`;
