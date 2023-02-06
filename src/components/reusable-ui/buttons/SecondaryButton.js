import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function SecondaryButton({ onClick, label, icon, className }) {
  return (
    <SecondaryButtonStyled className={className} onClick={onClick}>
      <div className="btn-container">
        <div className="icon">{icon}</div>
        {label}
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
  font-weight: ${theme.weights.semiBold};
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  color: ${theme.colors.white};
  font-weight: ${theme.weights.medium};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  color: ${theme.colors.greyMedium};
  height: 40px;
  padding: 0 15px 0 15px;
  margin-right: 1px;

  .btn-container{
      display: flex;
  flex-direction: row;
  align-items: center;
  }

  cursor: pointer;

  :hover {
    text-decoration: underline ${theme.colors.greyDark};
    border-bottom: 1px solid ${theme.colors.white};
    background-color: ${theme.colors.white};
  }

  .icon {
    font-size: ${theme.fonts.P2};
    padding: 5px 10px 0 10px;
  }

`;
