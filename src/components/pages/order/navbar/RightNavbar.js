import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";

export default function RightNavbar({ name }) {
  const [toggleAdminIsChecked, setToggleAdminIsChecked] = useState(false);
  const handleToggle = () => setToggleAdminIsChecked(!toggleAdminIsChecked);
  const toastify = () => {
    if (!toggleAdminIsChecked) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <RightNavbarStyled>
      <ToggleButton
        isChecked={toggleAdminIsChecked}
        onClick={toastify}
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
