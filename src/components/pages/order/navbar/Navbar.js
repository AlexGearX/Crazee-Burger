import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Logo from "../../../reusable-ui/Logo";
import Profile from "./Profile";

export default function Navbar({ name }) {
  const reloadPage = () => window.location.reload(false);
  return (
    <NavbarStyled>
      <Logo className="logo" onClick={reloadPage} />
      <div>
        <Profile name={name} />
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px transparent black;
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;
  background: ${theme.colors.white};
  box-shadow: -1px 9px 13px -1px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid ${theme.colors.greyLight};
  margin-left: -140px;
  height: 10vh;
  .logo {
    cursor: pointer;
    margin: 0;
    transform: scale(0.45);
  }
`;
