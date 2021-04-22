import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/overview.gif";
import Service2Img from "../../assets/illustrations/idea.gif";
import Service3Img from "../../assets/illustrations/gamelogic.gif";
import Service4Img from "../../assets/illustrations/rewards.gif";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function WhySection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Why Scrabble.Eth ?</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="The very idea of it."
        description="NFTs are driven by collecting unique stuff. Why not collect English Words and play games with them ! "
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Permissionless"
        description="English words are not owned by anyone. They are free to use."
        imgUrl={Service4Img}
        isReversed
      />
      <OurSerivce
        title="Possibilities Ahead"
        description="Use of languages for NFTs is a huge idea itself which can be taken to a lot of different directions from here."
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
