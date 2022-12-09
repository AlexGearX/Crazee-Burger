import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";

export default function RightNavbar({ name }) {
  const [toggleAdminIsChecked, setToggleAdminIsChecked] = useState(false);
  const handleToggle = () => setToggleAdminIsChecked(!toggleAdminIsChecked);

  return (
    <RightNavbarStyled>
      <ToggleButton
        isChecked={toggleAdminIsChecked}
        onToggle={handleToggle}
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
      />
      <Profile name={name} />
    </RightNavbarStyled>
  );
}

const RightNavbarStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  grid-column-gap: 50px;
`;
