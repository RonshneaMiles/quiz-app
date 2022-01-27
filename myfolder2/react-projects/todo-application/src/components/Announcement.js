import React from "react";
import styled from "styled-components";
import { mobile, mobileM } from "../Responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: "100%" })};
  ${mobileM({ width: "100%" })};
`;

const Announcement = () => {
  return <Container>Huge Savings! 50% OFF Everything In Stock!</Container>;
};

export default Announcement;
