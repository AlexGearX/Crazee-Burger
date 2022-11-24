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
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 50px 150px;
  gap: 60px 0;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);
  }
`;
