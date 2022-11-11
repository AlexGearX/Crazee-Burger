import styled from "styled-components";
import LoginForm from "./LoginForm";
export default function LoginPage() {
    return (
        <LoginPageStyled>
            <LoginForm />
        </LoginPageStyled>
    );

};
const LoginPageStyled = styled.div`
    border: 1px solid red;
`