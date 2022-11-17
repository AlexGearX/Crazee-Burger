import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";
import { theme } from "../../../theme";
import Logo from "../../reusable-ui/Logo";

export default function Navbar({ name }) {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <NavbarStyled>
      <Logo className="logo"></Logo>
      <div className="user-panel">
        <div className="user-info">
          <h3>
            Hey, <span>{name}</span>
          </h3>
          <button onClick={handleClick}>Se déconnecter</button>
        </div>
        <IoPersonCircleOutline className="icon" size={40} color={theme.colors.greyDark} />
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${theme.spacing.xxl};
  border: 1px transparent black;
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;
  background: ${theme.colors.background_white};
  margin: ${theme.spacing.md};

  h3 {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.greyBlue};
    margin-bottom: 0px;
    margin-left: 25px;
  }
  span {
    color: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
  }
  button {
    cursor: pointer;
    border: 0px;
    font-family: "Open Sans", sans-serif;
    background-color: ${theme.colors.background_white};
    text-align: center;
    font-size: ${theme.fonts.XXS};
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.greyDark};
    &:hover {
      text-decoration: underline ${theme.colors.dark};
    }
  }
  .logo {
    cursor: pointer;
    transform: scale(0.4);
    margin: 0;
    margin-left: -170px;
  }

  .user-panel {
    display: flex;
    margin-right: 70px;
    margin-bottom: 20px;
  }
  .icon {
    margin-top: 15px;
  }
`;
