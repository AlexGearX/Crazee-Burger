import styled from "styled-components";
import LoginForm from "./LoginForm";
import logoLoginPage from "../../../assets/images/login/F03logo-orange.png";
import background from "../../../assets/images/login/F03burger-background.jpg";
import { theme } from "../../../theme";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="LoginPageTitle">
        <h1 className="h1-LoginPages">CRAZEE</h1>
        <img src={logoLoginPage} alt="Logo" />
        <h1 className="h1-LoginPages">BURGER</h1>
      </div>
      <LoginForm />
    </LoginPageStyled>
  );
}
const LoginPageStyled = styled.div`
  .LoginPageTitle {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-family: "Amatic SC", cursive;
    text-align: center;
    color: ${theme.colors.white};
  }

  .h1-LoginPages {
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P6};
    letter-spacing: ${theme.spacing.xxs};
    font-weight: ${theme.weights.heavy};
  }
  img {
    width: 200px;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: url(${background}) rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
  }
`;
