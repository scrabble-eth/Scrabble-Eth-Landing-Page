import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import footerLogo  from '../../assets/pictures/devfolio.png';
import { Marginer } from "../marginer";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  width: 100%;
  height: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EEEEEE;
  position: relative;
`;

const MotivationalText = styled.h1`
  font-size: 25px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  line-height: 1.4;
  color: #ff2c5c;
  margin: 0;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #ff2c5c;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  &:hover {
    color: #adadad;
  }
`;

const Link = styled.a`
  color: #ff2c5c;
  font-weight: bold;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
`;

const AboutImg = styled.img`
  width: 5%;
  height: 18%;
  margin-left: 2em;
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 0.1px;
  margin-bottom: 1em;
  background-color: #F8BAC8;
  display: flex;
`;

export function Footer(props) {
  return (
    <FooterContainer>
      <Marginer direction="vertical" margin="3em" />
      <AboutImg src = {footerLogo} />
      <Marginer direction="vertical" margin="1em" />
      <MotivationalText>Built at Ethereum India Fellowship 2.0</MotivationalText>
      <Marginer direction="vertical" margin="3em" />
      <Line/>
      <AccessibilityContainer>
        <PrivacyContainer>
          <Link>Contact Us</Link>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={footerLogo} />
          </SocialIcon>
        </SocialContainer>
      </AccessibilityContainer>
      <RightsReserved>&copy; 2021 Scrabble.Eth All rights reserved</RightsReserved>
    </FooterContainer>
  );
}
