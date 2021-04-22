import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { ReviewCard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import { useMediaQuery } from "react-responsive";

import "pure-react-carousel/dist/react-carousel.es.css";

import User1Img from "../../assets/pictures/idea.png";
import User2Img from "../../assets/pictures/permission.png";
import User3Img from "../../assets/pictures/fun.png";
import User4Img from "../../assets/pictures/future.png";

const ReviewsContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #8C52FF;
  }
`;

export function ReviewsSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <ReviewsContainer>
      <SectionTitle>Why Scrabble.Eth is cool .</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText="NFTs are driven by collecting unique stuff. Why not collect English Words and play games with them !"
              username="The very idea of it."
              userImgUrl = {User1Img}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText="English words are not owned by anyone."
              username="Permissionless"
              userImgUrl = {User2Img}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText="The concept of making sentences using words requires good English language skills."
              username="Learning with Fun"
              userImgUrl = {User3Img}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText="Use of languages for NFTs is a huge idea itself which can be taken to a lot of different directions from here."
              username="Possibilities Ahead"
              userImgUrl = {User4Img}
            />
          </StyledSlide>
          <Marginer direction="vertical" margin="2em" />
        </Slider>
        <Marginer direction="vertical" margin="2em" />
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}
