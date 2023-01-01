import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Profile({ name }) {
  return (
    <ProfileStyled>
      <div className="user-info">
        <h3>
          Hey, <span>{name}</span>
        </h3>
        <Link to="/">Se déconnecter</Link>
      </div>
      <IoPersonCircleOutline size={50} color={theme.colors.greyDark} />
    </ProfileStyled>
  );
}
const ProfileStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 70px;
  height: 10vh;
  padding-left: 50px;

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 5px 20px 0;
    h3 {
      font-family: "Open Sans", sans-serif;
      font-size: ${theme.fonts.P1};
      font-weight: ${theme.weights.medium};
      color: ${theme.colors.greyBlue};
      margin-bottom: 5px;
      span {
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.bold};
      }
    }
    a {
      cursor: pointer;
      text-decoration: none;
      background-color: transparent;
      border: 0px;
      font-family: "Open Sans", sans-serif;
      font-size: ${theme.fonts.XS};
      font-weight: ${theme.weights.medium};
      color: ${theme.colors.greyDark};
      &:hover {
        text-decoration: underline ${theme.colors.dark};
      }
    }
  }
`;
