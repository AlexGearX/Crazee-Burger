import React, { useState } from "react";
import { fakeMenu1 } from "../../../../fakeData/fakeMenu";
import Card from "./Card";

export default function Product() {
  const [cards, setCards] = useState(fakeMenu1);

  for (let index = 0; index < fakeMenu1.length - 1; index++) {}
  return (
    <div>
      {cards.map((card) => (
        <Card card={card}></Card>
      ))}
    </div>
  );
}
