import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function OrderPage() {
  const { name } = useParams();

  return (
    <div>
      <Navbar name={name} />
    </div>
  );
}
