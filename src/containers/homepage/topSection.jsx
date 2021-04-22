import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/company_team.jpg";
import insideimage from "../../assets/pictures/subtitle.png";
import logo from "../../assets/logo/logo_big.png"
import callforaction from "../../assets/logo/logo.gif";
import insidebox from "../../assets/logo/insidebox.gif";
import { Button } from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-color: #FEFEFE;
  background-image: url(${BackgroundImg});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MiddleContainer = styled.div`
  width: 99%; /* Can be in percentage also. */
  height: 98%;
  margin: auto;
  display: inline-block;
  position: relative;
  background-color: #FFFFFF;
  border-radius: 25px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const FirstContainer = styled.div`
  width: 99%;
  height: 98%;
  background-color: #AF92E8;
  display: flex;
  justify-content: center;
  align-items: center; 
  border-radius: 25px;
  position: relative;
`;

const SecondContainer = styled.div`
  width: 99%;
  height: 98%;
  background-color: #F8BAC8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  position: relative;
`;

const ThirdContainer = styled.div`
  width: 800px;
  height: 500px;
  background-color: #5CE1E6;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 25px;
  position: relative;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const BottomContainer = styled.div`
  width: 700px;
  height: 150px;
  display: flex;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.15);
  border-radius: 10px;
  position: relative;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 30px;
`;



const AboutImg = styled.img`
  width: 500px;
  height: 250px;
  display: block;
`;

const LogoImg = styled.img`
  width: 770px;
  height: 150px;
  display: block;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 8px;
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
  text-align: center;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

const SubmitButton = styled.button`
  padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
  border-radius: 5px;
  background-color: #8C52FF;
  color: #fff;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  font-size: ${({ small }) => (small ? "12px" : "16px")};
  font-size: 21px;
  outline: none;
  border: 2px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  text-align: center;
  align-content: center;
  &:hover {
    background-color: transparent;
    color: #000000;
    border: 2px solid #8C52FF;
  }
`;

const ServiceImg = styled.img`
  width: 100%;
  height: 93%;
  margin: auto;
  margin-left: 10px;
  @media screen and (max-width: 480px) {
    width: 18em;
    height: 13em;
  }
`;

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };

  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          <Navbar />
              <ThirdContainer>
                <SecondContainer>
                  <FirstContainer>
                    <MiddleContainer>
                      <LogoImg src = {insidebox}/>
                      <Marginer direction="vertical" margin="1em" />
                      <BottomContainer>
                      <ServiceImg src = {insideimage}/>
                      </BottomContainer>
                    </MiddleContainer>
                  </FirstContainer>
                </SecondContainer>
                </ThirdContainer>
          <Marginer direction="vertical" margin="1em" />
          <SubmitButton>
          <Marginer direction="vertical" margin="0.5em" />
          <Marginer direction="horizontal" margin="0.5em" />
            LET'S PLAY !
            <Marginer direction="vertical" margin="0.5em" />
            <Marginer direction="horizontal" margin="0.5em" />
          </SubmitButton>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}
