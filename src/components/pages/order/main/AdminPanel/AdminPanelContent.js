import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanelContent() {
  return <AdminPanelContentStyled>AdminPanelContent</AdminPanelContentStyled>;
}
const AdminPanelContentStyled = styled.div`
  background: ${theme.colors.white};
  height: 88%;
`;
