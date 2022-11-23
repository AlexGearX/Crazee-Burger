import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function PrimaryButton({ label, icon, className }) {
  return (
    <PrimaryButtonStyled className={className}>
      {label}
      {icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 380px;

  border-radius: ${theme.borderRadius.round};
  border: 0px solid black;

  font-size: ${theme.fonts.p0};
  font-weight: ${theme.weights.semiBold};

  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};

  :hover {
    content: "";
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
  :active {
    content: "";
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
