import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Tab({ onClick, label, icon, className }) {
  return (
    <TabStyled className={className} onClick={onClick}>
        {icon && <div className="icon">{icon}</div>}
        {label && <span>{label}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  border: 1px solid blue;
  padding: 0 22px;
  height: 43px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-size: ${theme.fonts.P0};
  color: ${theme.colors.greySemiDark};

  position: relative;
  left: 5%;
  top: 1px;

  background: #ffffff;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #e4e5e9;
  box-shadow: ${theme.shadows.subtle};
  border-radius: 5px 5px 0px 0px;

  .icon {
    display: flex;
  }

  span {
    margin-left: 13px;
  }

  :hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }
`

