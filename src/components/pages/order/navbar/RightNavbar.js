import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { theme } from "../../../../theme";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";

export default function RightNavbar({ name }) {
  const [toggleAdminIsChecked, setToggleAdminIsChecked] = useState(false);
  const handleToggle = () => setToggleAdminIsChecked(!toggleAdminIsChecked);
  const setToast = () => {
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
      <ToggleButton isChecked={toggleAdminIsChecked} onClick={setToast} onToggle={handleToggle} />
      <Profile name={name} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </RightNavbarStyled>
  );
}

const RightNavbarStyled = styled.div`
  display: flex;
  align-items: center;
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
