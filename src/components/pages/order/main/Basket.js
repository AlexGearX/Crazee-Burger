import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Basket() {
  return <BasketStyled></BasketStyled>;
}
const BasketStyled = styled.div`
  background: ${theme.colors.background_dark};
`;
