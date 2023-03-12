import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./Panel/AdminPanel";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext)
  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`
