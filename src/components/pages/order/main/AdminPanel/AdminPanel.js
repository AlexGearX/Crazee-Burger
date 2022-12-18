import React, { useState } from "react";
import styled from "styled-components";
import AdminPanelContent from "./AdminPanelContent";
import AdminPanelTab from "./AdminPanelTab";
import { useContext } from "react";
import AdminPanelContext from "../../../../../context/AdminPanelContext";

export default function AdminPanel() {
  const [adminContent, setAdminContent] = useState({
    content: "Ajouter un produit",
    collapse: false,
  });
  const { isModeAdmin } = useContext(AdminPanelContext);
  return (
    <AdminPanelStyled>
      <div className={`${isModeAdmin ? "panel-open" : "panel-close"}`}>
        <AdminPanelTab setAdminContent={setAdminContent} adminContent={adminContent} />
        <AdminPanelContent adminPanelContent={adminContent} />
      </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  overflow: hidden;
  position: absolute;
  /* width: 75%; Quand il y aura le Panier*/
  width: 100%;
  bottom: 0px;
  right: 0;
  z-index: 2;
  .panel-close {
    animation: slideOut 0.5s;
    visibility: hidden;
    transition: visibility 0.5s;
  }
  .panel-open {
    display: block;
    animation: slideIn 0.5s;
  }
  @keyframes slideIn {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes slideOut {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;
