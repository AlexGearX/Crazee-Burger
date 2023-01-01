import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import SecondaryButton from "../../../../reusable-ui/buttons/SecondaryButton";
import { panelTabsConfig } from "./panelTabsConfig";

export default function AdminPanelTabs({ setAdminContent, adminContent }) {
  const [activeContent, setActiveContent] = useState(2);
  const [tabs, setTabs] = useState(panelTabsConfig);

  const activeStyle = (id) =>
    activeContent === id
      ? "button-active"
      : adminContent.collapse && id === 1
      ? "button-collaps-active button-active"
      : "";

  const activeTab = (id) => () => {
    if (id === 1) {
      setAdminContent({ collapse: !adminContent.collapse });
    } else {
      setAdminContent({ collapse: false });
      setActiveContent(id);
    }
  };

  return (
    <AdminPanelNavStyled>
      {tabs.map(({ id, icon, label }) => (
        <SecondaryButton
          key={id}
          className={activeStyle(id)}
          onClick={activeTab(id)}
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
  .button-collaps-active {
    border-radius: 0 0 ${theme.borderRadius.round} ${theme.borderRadius.round};
    transform: rotate(180deg);
  }
`;
