import styled from "styled-components";
import soloBackground from "../images/blackstyle.jpg";
import { mobile, mobileM } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${soloBackground});
  background-color: #e3dacf;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "column" })};
  ${mobileM({ flexDirection: "column" })};
`;

const LogoContainer = styled.div`
  margin-top: -600px;
  margin-left: -200px;
  ${mobile({ margin: "20px 100px" })};
  ${mobileM({ margin: "20px 100px" })};
`;

const Logo = styled.h1`
  font-size: 50px;
`;
const SignInBox = styled.div`
  padding: 30px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "50%" })};
  ${mobileM({ width: "50%" })};
`;
const SignInText = styled.h2`
  font-size: 24px;
  fonr-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #037430;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 7px;
  ${mobile({ padding: "10px 15px" })};
`;

const Link = styled.a`
  margin: 5px 0 px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>LUVU.</Logo>
      </LogoContainer>
      <SignInBox>
        <SignInText>Sign in</SignInText>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>Login</Button>
          <Link>Forgot Password?</Link>
          <Link>Create A New Account</Link>
        </Form>
      </SignInBox>
    </Container>
  );
};

export default Login;
