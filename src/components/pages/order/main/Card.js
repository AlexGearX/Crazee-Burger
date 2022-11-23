import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../reusable-ui/buttons/PrimaryButton";

export default function Card({ card }) {
  return (
    <CardStyled>
      <img src={card.imageSource} alt={card.title}></img>
      <b>{card.title}</b>
      <div className="product-add">
        <p>{card.price} €</p>
        <PrimaryButton className={"add-button"} label="Ajouter" />
      </div>
    </CardStyled>
  );
}
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: ${theme.borderRadius.extraRound};
  width: 240px;
  height: 330px;
  border: 1px solid black;
  img {
    max-height: 145px;
    max-width: 200px;
  }
  .product-add {
    display: flex;
    flex-direction: row;
  }
  .add-button {
    width: 92px;
    height: 38px;
  }
`;
