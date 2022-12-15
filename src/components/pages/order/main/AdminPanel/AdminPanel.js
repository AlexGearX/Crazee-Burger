import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import PrimaryButton from "../../../../reusable-ui/buttons/PrimaryButton";
import AdminPanelContent from "./AdminPanelContent";
import { BsPlus } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="admin-nav">
        <PrimaryButton className="button-collaps" icon={<IoIosArrowDown />}></PrimaryButton>
        <PrimaryButton
          className="button-add-product"
          icon={<BsPlus />}
          label="Ajouter un produit"
          showIconBeforeLabel={true}
        ></PrimaryButton>
        <PrimaryButton
          className="button-edit-product"
          icon={<MdEdit />}
          label="Modifier un produit"
          showIconBeforeLabel={true}
        ></PrimaryButton>
      </div>
      <AdminPanelContent></AdminPanelContent>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  height: 300px;
  width: 100%;
  bottom: 0;
  right: 0;
  z-index: 2;

  .admin-nav {
    display: flex;
    flex-direction: row;
    padding-left: 44px;
    Button {
      font-weight: ${theme.weights.medium};
      border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
      color: ${theme.colors.greyMedium};
      height: 36px;
      width: 180px;
      margin-right: 1px;
      :hover {
        text-decoration: underline ${theme.colors.dark};
        border-bottom: 1px solid ${theme.colors.white};
      }
      :focus {
        content: "";
        background-color: ${theme.colors.background_dark};
        color: ${theme.colors.white};
      }
    }
    .button-collaps {
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.greyLight};
      width: 54px;
    }
    .button-add-product {
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.greyLight};
    }
    .button-edit-product {
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.greyLight};
    }
  }
`;
