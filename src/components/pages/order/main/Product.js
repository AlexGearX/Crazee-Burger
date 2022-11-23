import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "./Card";

export default function Product() {
  const [cards, setCards] = useState(fakeMenu2);

  return (
    <ProductStyled>
      {cards.map((card) => (
        <Card card={card}></Card>
      ))}
    </ProductStyled>
  );
}
const ProductStyled = styled.div`
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  background: blue;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 76.67px;
`;
