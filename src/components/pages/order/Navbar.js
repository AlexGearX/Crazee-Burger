import React from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { theme } from "../../../theme";
import Logo from "../../reusable-ui/Logo";

export default function Navbar({ name }) {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <div>
      <Logo className="logo-size"></Logo>
      <div>
        <div>
          <h3>
            Hey,<span>{name}</span>
          </h3>
          <button onClick={handleClick}>Déconnexion</button>
        </div>
        <IoPersonCircleOutline size={50} color={theme.colors.greyDark} />
      </div>
    </div>
  );
}
