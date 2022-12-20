import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { MdEdit } from "react-icons/md";

export default function PanelTabsConfig({ setAdminContent, adminContent }) {
  const [activeContent, setActiveContent] = useState(2);
  const collapseStyle = () =>
    adminContent.collapse ? "button-collaps-active button-active" : "button-collaps";
  const activeStyle = (id) => (activeContent === id ? "button-active" : "");
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
          collapse: false,
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
          collapse: false,
        });
        setActiveContent(3);
      },
      icon: <MdEdit />,
      label: "Modifier un produit",
    },
  ];
  return panelTabsConfig;
}
