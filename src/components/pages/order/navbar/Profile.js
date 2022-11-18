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
      <IoPersonCircleOutline className="icon" size={40} color={theme.colors.greyDark} />
    </ProfileStyled>
  );
}
const ProfileStyled = styled.div`
  display: flex;
  margin-right: 70px;
  margin-bottom: 20px;
  h3 {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.greyBlue};
    margin-bottom: 5px;
    margin-left: 25px;
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
    font-size: ${theme.fonts.XXS};
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.greyDark};
    &:hover {
      text-decoration: underline ${theme.colors.dark};
    }
  }
  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 5px;
  }
  .icon {
    margin-top: 15px;
  }
`;
