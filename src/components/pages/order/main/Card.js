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
        <p>{parseFloat(card.price).toFixed(2)} €</p>
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
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  width: 240px;
  height: 330px;

  img {
    max-height: 145px;
    max-width: 200px;
  }
  b {
    font-family: "Amatic SC", cursive;
    text-align: center;
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.P4};
    margin: 10px;
  }
  .product-add {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      font-family: "Open Sans", sans-serif;
      text-align: center;
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.P0};
    }
    .add-button {
      width: 92px;
      height: 38px;
      margin-left: 50px;
    }
  }
`;
