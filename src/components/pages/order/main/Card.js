import React from "react";

export default function Card({ card }) {
  return (
    <div>
      <img src={card.imageSource} alt="img" height={100} />
    </div>
  );
}
