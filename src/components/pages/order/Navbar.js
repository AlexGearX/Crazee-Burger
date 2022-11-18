import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";
import { theme } from "../../../theme";
import Logo from "../../reusable-ui/Logo";

export default function Navbar({ name }) {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  const reloadPage = () => window.location.reload(false);
  return (
    <NavbarStyled>
      <Logo className="logo" onClick={reloadPage}></Logo>
      <div className="user-panel">
        <div className="user-info">
          <h3>
            Hey, <span>{name}</span>
          </h3>
          <button className="deconnect-button" onClick={handleClick}>
            Se déconnecter
          </button>
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
  height: ${theme.spacing.xxxl};
  border: 1px transparent black;
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;
  background: ${theme.colors.white};
  box-shadow: -1px 9px 13px -1px rgba(0, 0, 0, 0.2);

  h3 {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.greyBlue};
    margin-bottom: 0px;
    margin-left: 25px;
    margin-right: 5px;
    span {
      color: ${theme.colors.primary};
      font-weight: ${theme.weights.bold};
    }
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: 0px;
  }
  .logo {
    cursor: pointer;
    margin: 0;
    transform: scale(0.4);
    margin-left: -170px;
  }
  .deconnect-button {
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.fonts.XXS};
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.greyDark};
    &:hover {
      text-decoration: underline ${theme.colors.dark};
    }
  }
  .user-panel {
    display: flex;
    margin-right: 70px;
    margin-bottom: 20px;
    .user-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    }
    .icon {
      margin-top: 15px;
    }
  }
`;
