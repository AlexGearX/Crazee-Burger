import React from "react";
import { theme } from "../../../../../theme";
import styled from "styled-components";

export default function AdminPanelContent({ adminPanelContent }) {
  return (
    <AdminPanelContentStyled>
      <div className={`${adminPanelContent.collapse ? "content-collapse" : "content-show"}`}>
        {adminPanelContent.content}
      </div>
    </AdminPanelContentStyled>
  );
}
const AdminPanelContentStyled = styled.div`
  background: ${theme.colors.white};
  .content-collapse {
    height: 0px;
  }
  .content-show {
    height: 250px;
  }
`;
