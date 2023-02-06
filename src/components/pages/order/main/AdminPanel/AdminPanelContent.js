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
  box-shadow: inset 0px -1px 20px 2px rgba(0, 0, 0, 0.1);
  .content-collapse {
    height: 0px;
  }
  .content-show {
    height: 250px;
  }
`;
