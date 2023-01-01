import React from "react";
import styled from "styled-components";
import SecondaryButton from "../../../../reusable-ui/buttons/SecondaryButton";
import { theme } from "../../../../../theme";
import panelTabsConfig from "./panelTabsConfig";

export default function AdminPanelTabs({ setAdminContent, adminContent }) {
  const panelTabsConfigUpdated = panelTabsConfig({ setAdminContent, adminContent });

  return (
    <AdminPanelNavStyled>
      {panelTabsConfigUpdated.map(({ id, className, onClick, icon, label }) => (
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
