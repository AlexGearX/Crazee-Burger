import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/math";
import Card from "../../../reusable-ui/Card";

export default function Products() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <ProductStyled>
      {menu.map(({ id, imageSource, title, price }) => (
        <Card
          key={id}
          imageSource={imageSource}
          title={title}
          leftDescription={formatPrice(price)}
          label={"Ajouter"}
        ></Card>
      ))}
    </ProductStyled>
  );
}
const ProductStyled = styled.div`
  flex: 1;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 50px 50px 150px;
  gap: 60px 0;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);
  }
`;
