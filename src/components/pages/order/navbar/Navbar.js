import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import ReloadPage from "../../../../utils/windows";
import Logo from "../../../reusable-ui/Logo";
import RightNavbar from "./RightNavbar";

export default function Navbar({ name }) {
  const reloadPage = () => ReloadPage();
  return (
    <NavbarStyled>
      <Logo className="logo" onClick={reloadPage} />
      <RightNavbar name={name} />
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
  height: 10vh;
  .logo {
    cursor: pointer;
    margin: 0;
    margin-left: -140px;
    transform: scale(0.45);
  }
`;
