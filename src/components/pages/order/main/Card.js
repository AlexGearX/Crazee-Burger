import React from "react";
import styled from "styled-components";

export default function Card({ card }) {
  return <CardStyled></CardStyled>;
}
const CardStyled = styled.div`
  background: red;
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
