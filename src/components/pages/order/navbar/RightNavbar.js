import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";

export default function RightNavbar({ name }) {
  const [toggleAdminIsChecked, setToggleAdminIsChecked] = useState(false);
  const handleToggle = () => setToggleAdminIsChecked(!toggleAdminIsChecked);
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

  return (
    <RightNavbarStyled>
      <div>
        <ToggleButton
          isChecked={toggleAdminIsChecked}
          onToggle={handleToggle}
          labelIfChecked="Désactiver le mode admin"
          labelIfUnchecked="Activer le mode admin"
        />
      </div>
      <Profile name={name} />
      <ToastContainer
        className="Toastify"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
