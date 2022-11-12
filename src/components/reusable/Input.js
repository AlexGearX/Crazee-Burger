import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Input({ className, value, type, placeholder, onChange, required }) {
  return (
    <InputStyled
      className={className}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  );
}

const InputStyled = styled.input`
  ::placeholder {
    color: ${theme.colors.greyMedium};
    font-weight: ${theme.weights.medium};
  }
  color: ${theme.colors.dark};
  font-size: ${theme.fonts.M};
  font-weight: ${theme.weights.semiBold};
  width: 300px;
  border: 0px;
`;
