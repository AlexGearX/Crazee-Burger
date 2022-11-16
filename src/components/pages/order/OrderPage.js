import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function OrderPage() {
  const navigate = useNavigate();
  const { name } = useParams();

  const handleClick = () => navigate("/");

  return (
    <div>
      <Navbar />
      <h1>Bonjour {name}</h1>
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
}
