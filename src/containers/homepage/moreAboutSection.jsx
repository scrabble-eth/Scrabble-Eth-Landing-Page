import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import AboutImgUrl from "../../assets/illustrations/futureplans.gif";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #FF66C4;
  font-family: 'Work Sans', sans-serif;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;

  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <SectionTitle>Future Plans for Scrabble.Eth</SectionTitle>
      <AboutContainer>
        <AboutText>
        In the future we are thinking of adding "fonts" into the game where each word card can have a font style associated with it, where some font styles are rarer than others. When the player forms a sentence in the game which consists entirely of words of the same style, they will be awarded a score boost. Rarer styles also improve the aesthetic value of the NFTs, which may improve their digital art aspect.{<br />}
          {<br />} These set of ideas open up a lot of possibilities for future collaborations with different ideas and dApps around English language.{" "}
          {<br />}
          {<br />} Something like an incentive based language learning platform (similar to Duolingo) can be implemented using such stuff on the Web 3.0 world. 
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
}
