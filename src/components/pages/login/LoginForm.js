import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import PrimaryButton from "../../reusable/buttons/PrimaryButton";
import Input from "../../reusable/Input";

export default function LoginForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = () => navigate(`/order/${name}`);

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr className="line"></hr>
      <h2>Connectez-vous</h2>
      <div className="cta-container">
        <Input
          className={"input-container cta-LoginForm"}
          value={name}
          type={"text"}
          placeholder={"Entrez votre prénom"}
          onChange={(event) => setName(event.target.value)}
          required={"required"}
          insertBeforeInput={
            <div className="personcircle">
              <IoPersonCircleOutline size={25} color={theme.colors.greyBlue} />
            </div>
          }
        />
        <PrimaryButton
          className={"cta-LoginForm"}
          text={"Accéder à mon espace"}
          insertAfterBtnText={
            <div className="arrow">
              <MdKeyboardArrowRight size={20} />
            </div>
          }
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  h1 {
    font-family: "Amatic SC", cursive;
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }
  .line {
    background-color: ${theme.colors.orange};
    border: 1pt solid ${theme.colors.orange};
    margin-left: auto;
    margin-right: auto;
    width: 380px;
  }
  h2 {
    font-family: "Amatic SC", cursive;
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
    margin-bottom: 15px;
  }
  .cta-container {
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .input-container {
      flex-direction: row;
      background-color: ${theme.colors.white};
      width: 380px;
      margin-bottom: 20px;
    }
    .cta-LoginForm {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      border-radius: ${theme.borderRadius.round};
      border: 1px solid black;
      font-size: ${theme.fonts.p0};
      font-weight: ${theme.weights.semiBold};
      height: 50px;
      .personcircle {
        padding-top: 5px;
        padding-right: 10px;
      }
      .arrow {
        padding-top: 3px;
        margin-left: 10px;
      }
    }
  }
`;
