import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Input({
  className,
  inputClassName,
  value,
  type,
  placeholder,
  onChange,
  required,
  insertBeforeInput,
  insertAfterInput,
}) {
  return (
    <InputStyled className={className}>
      {insertBeforeInput}
      <input
        className={inputClassName}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
      {insertAfterInput}
    </InputStyled>
  );
}

const InputStyled = styled.div`
  input::placeholder {
    color: ${theme.colors.greyMedium};
    font-weight: ${theme.weights.medium};
  }
  input {
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.M};
    font-weight: ${theme.weights.semiBold};
    width: 300px;
    border: 0px;
  }
`;
