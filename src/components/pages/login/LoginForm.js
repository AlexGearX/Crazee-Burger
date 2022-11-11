import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { FaRegHandPointer } from "react-icons/fa";

export default function LoginForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = () => navigate(`/order/${name}`);

  const handleChange = (event) => setName(event.target.value);

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1 className="h1-LoginForm">Bienvenue chez nous !</h1>
      <div class="ligne"></div>
      <h2 className="h2-LoginForm">Connectez-vous</h2>
      <div className="cta-container">
        <div className="input-container">
          {/* <img src={FaRegHandPointer} alt="Person"></img> */}
          <input
            className="cta-LoginForm "
            value={name}
            type="text"
            placeholder="Entrez votre prénom"
            onChange={handleChange}
            required
          ></input>
        </div>
        <button className="cta-LoginForm ">Accéder à votre espace</button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  .h1-LoginForm {
    font-size: ${theme.fonts.P5};
  }
  .ligne {
    width: 450px;
    border: 1px solid ${theme.colors.orange};
    margin-left: auto;
    margin-right: auto;
  }
  .h2-LoginForm {
    font-family: "Amatic SC", cursive;
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
  }
  .cta-container {
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .input-container {
  }
  .cta-LoginForm {
    height: 50px;
    border: 1px solid black;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.P1};
    font-weight: ${theme.weights.semiBold};
  }
  input {
    width: 450px;
    color: ${theme.colors.dark};
    margin-bottom: 20px;
  }
  button {
    width: 458px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }
`;
