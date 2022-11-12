import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function PrimaryButton({ className, divBefore, text, divAfter }) {
  return (
    <PrimaryButtonStyled className={className}>
      {divBefore}
      {text}
      {divAfter}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  width: 380px;

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
