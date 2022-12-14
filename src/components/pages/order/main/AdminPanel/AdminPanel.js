import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../../reusable-ui/buttons/PrimaryButton";
import AdminPanelContent from "./AdminPanelContent";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="admin-nav">
        <PrimaryButton></PrimaryButton>
        <PrimaryButton></PrimaryButton>
        <PrimaryButton></PrimaryButton>
      </div>
      <AdminPanelContent></AdminPanelContent>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background: red;
  position: absolute;
  height: 300px;
  width: 100%;
  bottom: 0px;
  right: 0px;
  z-index: 2;

  .admin-nav {
    display: flex;
    flex-direction: row;
  }
`;
