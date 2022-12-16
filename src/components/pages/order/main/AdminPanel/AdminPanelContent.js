import React from "react";
import { theme } from "../../../../../theme";
import styled from "styled-components";

export default function AdminPanelContent({ testLabel }) {
  return <AdminPanelContentStyled>{testLabel}</AdminPanelContentStyled>;
}
const AdminPanelContentStyled = styled.div`
  background: ${theme.colors.white};
  height: 88%;
`;
