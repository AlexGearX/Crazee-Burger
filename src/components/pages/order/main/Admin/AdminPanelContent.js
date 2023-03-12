import React from "react";
import { theme } from "../../../../../theme";
import styled from "styled-components";
import AddProduct from "./Panel/AddProduct";
import EditProduct from "./Panel/EditProduct";

export default function AdminPanelContent({ adminPanelContent }) {
  return (
    <AdminPanelContentStyled>
      <div className={`${adminPanelContent.collapse ? "content-collapse" : "content-show"}`}>
        <div className="admin-container">{adminPanelContent.id === 2 ? <AddProduct/>:<EditProduct/>}</div>
      </div>
    </AdminPanelContentStyled>
  );
}
const AdminPanelContentStyled = styled.div`
  background: ${theme.colors.white};
  box-shadow:  0px -1px 20px 2px rgba(0, 0, 0, 0.1);
  .admin-container{
    padding: 20px;
  }
  .content-collapse {
    height: 0px;
  }
  .content-show {
    height: 250px;
  }
`;
