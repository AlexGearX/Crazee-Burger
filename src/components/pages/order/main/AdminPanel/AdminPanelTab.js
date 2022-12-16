import React from "react";
import styled from "styled-components";
import { BsPlus } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import SecondaryButton from "../../../../reusable-ui/buttons/SecondaryButton";

export default function AdminPanelTab({ setAdminContent }) {
  const panelTabsConfig = [
    {
      id: 1,
      className: "button-collaps",
      onClick: () => {
        setAdminContent("Close");
      },
      icon: <IoIosArrowDown />,
      label: "",
    },
    {
      id: 2,
      className: "button-add-product",
      onClick: () => {
        setAdminContent("Ajouter un produit");
      },
      icon: <BsPlus />,
      label: "Ajouter un produit",
    },
    {
      id: 3,
      className: "button-edit-product",
      onClick: () => {
        setAdminContent("Modifier un produit");
      },
      icon: <MdEdit />,
      label: "Modifier un produit",
    },
  ];
  return (
    <AdminPanelNavStyled>
      {panelTabsConfig.map(({ id, className, onClick, icon, label }) => (
        <SecondaryButton
          key={id}
          className={className}
          onClick={onClick}
          icon={icon}
          label={label}
        />
      ))}
    </AdminPanelNavStyled>
  );
}

const AdminPanelNavStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 44px;
  .button-collaps {
    width: 54px;
  }
`;
