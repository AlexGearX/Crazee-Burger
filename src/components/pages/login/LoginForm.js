import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = () => navigate(`/order/${name}`);

  const handleChange = (event) => setName(event.target.value);

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={name}
        type="text"
        placeholder="Entrez votre prénom..."
        onChange={handleChange}
        required
      ></input>
      <button>Accéder à votre espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  h1 {
    font-family: "Amatic SC", cursive;
  }
  h2 {
    font-family: "Amatic SC", cursive;
  }
  input {
    font-family: "Open Sans", sans-serif;
  }
  button {
    font-family: "Open Sans", sans-serif;
  }
`;
