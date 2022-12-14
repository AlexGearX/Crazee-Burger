import React from "react";
import styled from "styled-components";

export default function AdminPanel() {
  return <AdminPanelStyled>AdminPanel</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  background: red;
  position: absolute;
  height: 300px;
  width: 75%;
  bottom: 0px;
  right: 0px;
  z-index: 2;
`;
