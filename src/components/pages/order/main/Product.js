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
  flex: 1;
  display: grid;
  justify-content: space-around;
  justify-items: center;
  align-content: space-around;
  align-items: center;

  grid-template-columns: repeat(4, 1fr);
  padding: 150px 10px 50px 10px;
  gap: 70px 10px;
  overflow-y: auto;
`;
