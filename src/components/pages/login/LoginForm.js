import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import PrimaryButton from "../../reusable-ui/buttons/PrimaryButton";
import TextInput from "../../reusable-ui/TextInput";

export default function LoginForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = () => navigate(`/order/${name}`);
  const handleChange = (event) => setName(event.target.value);

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr className="line"></hr>
      <h2>Connectez-vous</h2>
      <div className="cta-container">
        <TextInput
          value={name}
          onChange={handleChange}
          placeholder="Entrez votre prénom"
          required
          icon={<IoPersonCircleOutline className="personcircle" size={20} color={theme.colors.greyBlue} />}
        />
        <PrimaryButton
          label="Accéder à mon espace"
          icon={
              <MdKeyboardArrowRight className="arrow" size={20} />
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

    .personcircle {
      padding-right: 10px;
    }
    .arrow {
      padding-top: 2px;
      margin-left: 10px;
    }
  }
`;
