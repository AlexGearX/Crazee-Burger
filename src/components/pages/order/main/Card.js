import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../reusable-ui/buttons/PrimaryButton";
import truncate from "../../../../utils/processString";
export default function Card({ card }) {
  return (
    <CardStyled>
      <div className="img-container">
        <img src={card.imageSource} alt={card.title}></img>
      </div>

      <b>{truncate(card.title, 18)}</b>
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

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 145px;
    img {
      max-height: 145px;
      max-width: 200px;
    }
  }
  b {
    font-family: "Amatic SC", cursive;
    text-align: center;
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.P4};
    margin: 20px 0 0 0;
  }
  .product-add {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-items: center;
    align-items: center;
    margin-top: 10px;
    p {
      font-family: "Open Sans", sans-serif;
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.P1};
    }
    .add-button {
      width: 102px;
      height: 42px;
    }
  }
`;
