import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function SecondaryButton({ onClick, label, icon, className }) {
  return (
    <SecondaryButtonStyled className={className} onClick={onClick}>
      {icon}
      {label}
    </SecondaryButtonStyled>
  );
}

const SecondaryButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.semiBold};
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  color: ${theme.colors.white};
  font-weight: ${theme.weights.medium};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  color: ${theme.colors.greyMedium};
  height: 36px;
  width: 180px;
  margin-right: 1px;

  cursor: pointer;
  :focus {
    background-color: ${theme.colors.background_dark};
    text-decoration: underline ${theme.colors.white};
    color: ${theme.colors.white};
  }

  :hover {
    text-decoration: underline ${theme.colors.dark};
    border-bottom: 1px solid ${theme.colors.white};
    background-color: ${theme.colors.white};
  }
`;
