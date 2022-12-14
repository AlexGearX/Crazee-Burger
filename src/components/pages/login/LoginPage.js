import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}
const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: url("/images/burger-and-fries-background.jpg") rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
  }
`;
