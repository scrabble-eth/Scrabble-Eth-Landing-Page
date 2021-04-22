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

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>What is Scrabble.Eth ?</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="OVERVIEW"
        description="The famous English game Scrabble on the Web 3.0 world, but a twist to make it more fun.
          Using Words as NFTs as in-game assets.Reward the winners in terms of ERC-20 tokens.
          Use of Gaming to make learning fun and enhance English skills."
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="IDEA"
        description="The idea is to have different types of packs of cards based on the rarity of the words in the English Language, where a pack would contain x cards each with a word written on it.
        Each card will have a word written on them, where each has a value associated with it which has been pre-calculated. 
        The criteria for this value is similar to how the value of a word is calculated in Scrabble, basically by summing up the value associated with each of the letters present in that word."
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="GAME LOGIC"
        description="The game logic is similar to Scrabble, but instead of forming words with letters as in the traditional game, the objective is to form sentences with the word cards. 
        The score assigned to the player is the sum of the scores of the individual cards used to form the sentence. "
        imgUrl={Service3Img}
      />
      <OurSerivce
        title="REWARDS"
        description="Once a winner is decided, the NFTs that were used in the game get burnt.
        The funds obtained by the purchasing of packs are pooled and made to generate interest. 
        The overall winner is awarded the interest generated on the fund pool."
        imgUrl={Service4Img}
        isReversed
      />
    </ServicesContainer>
  );
}
