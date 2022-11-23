import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Card({ card }) {
  return <CardStyled></CardStyled>;
}
const CardStyled = styled.div`
  background: red;
  border-radius: ${theme.borderRadius.extraRound};
  width: 240px;
  height: 330px;
  border: 1px solid black;
`;
