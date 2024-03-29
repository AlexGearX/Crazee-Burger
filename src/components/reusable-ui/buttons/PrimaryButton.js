import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function PrimaryButton({ onClick, label, icon, className }) {
  return (
    <PrimaryButtonStyled className={className} onClick={onClick}>
      {label}
      {icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 380px;

  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};

  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.semiBold};

  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};

  :hover {
    content: "";
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    transition: 0.3s;
    border: 1px solid ${theme.colors.primary};
  }
  :active {
    content: "";
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
