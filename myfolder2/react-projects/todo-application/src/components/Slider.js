import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { React, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ flexDirection: "column", height: "80vh", marginBottom: "2em" })};
`;

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  ${mobile({ width: "100%" })};
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${mobile({ width: "100%", flexDirection: "row" })};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  ${mobile({ width: "50%" })};
`;

const Image = styled.img`
  height: 65%;
  ${mobile({ width: "40vh", marginTop: "40px" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({ width: "60%", padding: "0px" })};
`;

const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "24px", color: "white" })};
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-wight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "10px", margin: "0" })};
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  ${mobile({ marginTop: "1em" })};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} alt="model wearing black coat" />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
