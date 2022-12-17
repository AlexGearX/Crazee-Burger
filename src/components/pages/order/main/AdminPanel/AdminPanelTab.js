import React, { useState } from "react";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import SecondaryButton from "../../../../reusable-ui/buttons/SecondaryButton";
import { theme } from "../../../../../theme";

export default function AdminPanelTab({ setAdminContent, adminContent }) {
  const [activeContent, setActiveContent] = useState(2);
  const collapseStyle = () => {
    if (adminContent.collapse) {
      return "button-collaps-active button-active";
    } else {
      return "button-collaps";
    }
  };
  const activeStyle = (id) => {
    if (activeContent === id) {
      return "button-active";
    } else {
      return "";
    }
  };
  const panelTabsConfig = [
    {
      id: 1,
      className: collapseStyle(),
      onClick: () =>
        setAdminContent({
          content: "",
          collapse: !adminContent.collapse,
        }),
      icon: <IoIosArrowDown />,
      label: "",
    },
    {
      id: 2,
      className: activeStyle(2),
      onClick: () => {
        setAdminContent({
          content: "Ajouter un produit",
          collapse: collapse(),
        });
        setActiveContent(2);
      },
      icon: <BsPlusLg />,
      label: "Ajouter un produit",
    },
    {
      id: 3,
      className: activeStyle(3),
      onClick: () => {
        setAdminContent({
          content: "Modifier un produit",
          collapse: collapse(),
        });
        setActiveContent(3);
      },
      icon: <MdEdit />,
      label: "Modifier un produit",
    },
  ];
  const collapse = () => {
    if (adminContent.collapse) {
      return false;
    }
  };

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
  .button-collaps-active {
    width: 60px;
    border-radius: 0 0 ${theme.borderRadius.round} ${theme.borderRadius.round};
    transform: rotate(180deg);
  }

  .button-collaps {
    width: 60px;
  }

  .button-active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    :hover {
      text-decoration: underline ${theme.colors.white};
      border-bottom: 1px solid ${theme.colors.white};
      background-color: ${theme.colors.background_dark};
      color: ${theme.colors.white};
    }
  }
`;
