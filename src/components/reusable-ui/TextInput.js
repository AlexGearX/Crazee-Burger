import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, icon, ...extraProps }) {
  

  return (
    <TextInputStyled >
      {icon}
      <input autoFocus value={value} type="text" onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 55px;
  width: 400px;

  border-radius: ${theme.borderRadius.round};
  border: 1px solid black;

  font-size: ${theme.fonts.p0};
  font-weight: ${theme.weights.semiBold};
  background-color: ${theme.colors.white};
  margin-bottom: 20px;

  input {
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.M};
    font-weight: ${theme.weights.semiBold};
    width: 300px;
    border: none;
    &::placeholder {
      color: ${theme.colors.greyMedium};
      font-weight: ${theme.weights.medium};
    }
  }
`;
