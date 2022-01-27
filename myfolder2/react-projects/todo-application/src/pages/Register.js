import styled from "styled-components";
import groupBackground from "../images/groupphoto.jpg";
// import { handleSubmit } from "../data";
import { mobile, mobileM } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${groupBackground});
  background-color: #e3dacf;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "100vh" })};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  width: 40%;
  background-color: white;
  ${mobile({ height: "50vh" })};
  ${mobileM({ height: "50vh" })};
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  ${mobile({ fontSize: "16px", textAlign: "center", marginTop: "-200px" })};
  ${mobileM({ fontSize: "16px", textAlign: "center" })};
`;

const FormContainer = styled.div`
  ${mobile({ height: "40%" })};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${mobile({ height: "80%", flexWrap: "nowrap" })};
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ margin: "10px 5px 0px 0px", padding: "5px" })};
  ${mobileM({ margin: "5px 5px 0px 0px", padding: "5px" })};
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 10px;
  ${mobile({ margin: "10px 5px", fontSize: "8px" })};
  ${mobileM({ margin: "10px 5px", fontSize: "12px" })};
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #cda902;
  color: black;
  cursor: pointer;
  ${mobile({ textAlign: "center", width: "100%" })};
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <FormContainer>
          <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>Join</Button>
            {/* <Submit
              type="submit"
              value="Create an Account"
              //TODO: add onClick method for submitting form
            /> */}
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
