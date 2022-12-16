import React, { useState } from "react";
import styled from "styled-components";
import AdminPanelContent from "./AdminPanelContent";
import AdminPanelTab from "./AdminPanelTab";
import { LARGEUR_MENU } from "../Main";

export default function AdminPanel() {
  const [state, setState] = useState("Ajouter un produit");
  return (
    <AdminPanelStyled>
      <AdminPanelTab stateChanger={setState} />
      <AdminPanelContent testLabel={state} />
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  width: ${LARGEUR_MENU};
  height: 300px;
  bottom: 0px;
  /* height: 0px;
  bottom: 35px; */
  right: 0;
  z-index: 2;
`;
