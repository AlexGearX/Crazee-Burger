import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { BsPlus } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import SecondaryButton from "../../../../reusable-ui/buttons/SecondaryButton";

export default function AdminPanelTab({ stateChanger }) {
  const panelTabsConfig = [
    {
      className: "button-collaps",
      onClick: () => stateChanger("Close"),
      icon: <IoIosArrowDown />,
      label: "",
    },
    {
      className: "button-add-product",
      onClick: () => stateChanger("Ajouter un produit"),
      icon: <BsPlus />,
      label: "Ajouter un produit",
    },
    {
      className: "button-edit-product",
      onClick: () => stateChanger("Modifier un produit"),
      icon: <MdEdit />,
      label: "Modifier un produit",
    },
  ];
  return (
    <AdminPanelNavStyled>
      {panelTabsConfig.map(({ className, onClick, icon, label }) => (
        <SecondaryButton className={className} onClick={onClick} icon={icon} label={label} />
      ))}
    </AdminPanelNavStyled>
  );
}

const AdminPanelNavStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 44px;
  button {
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
`;
