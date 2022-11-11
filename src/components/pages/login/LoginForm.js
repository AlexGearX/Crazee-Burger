import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

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
        <div className="input-container cta-LoginForm">
          <div className="personcircle">
            <IoPersonCircleOutline size={25} color={theme.colors.greyBlue}></IoPersonCircleOutline>
          </div>
          <input
            value={name}
            type="text"
            placeholder="Entrez votre prénom"
            onChange={handleChange}
            required
          ></input>
        </div>
        <button className="cta-LoginForm ">
          Accéder à votre espace
          <span className="arrow">
            {" "}
            <MdKeyboardArrowRight size={20} />
          </span>
        </button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .h1-LoginForm {
    font-size: ${theme.fonts.P5};
  }
  .ligne {
    width: 370px;
    border: 1px solid ${theme.colors.orange};
    margin-left: auto;
    margin-right: auto;
  }
  .h2-LoginForm {
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
  }
  .input-container {
    width: 370px;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .cta-LoginForm {
    height: 50px;
    border: 1px solid black;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.p0};
    font-weight: ${theme.weights.semiBold};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .personcircle {
    padding-top: 5px;
    padding-right: 10px;
  }
  input {
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.p0};
    font-weight: ${theme.weights.semiBold};
    width: 300px;
    border: 0px;
  }
  button {
    width: 370px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }
  .arrow {
    padding-top: 3px;
    margin-left: 10px;
  }

  button:hover {
    content: "";
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
`;
