import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import PrimaryButton from "./buttons/PrimaryButton";

export default function Card({ imageSource, title, price, label }) {
  return (
    <CardStyled>
      <div className="img-container">
        <img src={imageSource} alt={title}></img>
      </div>

      <span>{title}</span>
      <div className="product-add">
        <p>{price}</p>
        <PrimaryButton className={"add-button"} label={label} />
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
  span {
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.semiBold};
    width: 100%;
    margin: 20px 0 0 15%;
    text-overflow: ellipsis;
  }
  .product-add {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: -20px;
    grid-row-gap: 0px;
    justify-items: left;
    align-items: center;
    max-width: 200px;
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
