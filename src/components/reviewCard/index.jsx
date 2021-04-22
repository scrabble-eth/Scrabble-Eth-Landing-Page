import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

const CardContainer = styled.div`
  width: 350px;
  height: 430px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 5px;
  margin: 5px 0;
  position: relative;
  align-content: center;
  padding: 10px 1.2em;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 13px;
  left: 17px;
  color: #d1d1d1;
  font-size: 37px;
`;

const ReviewText = styled.p`
  font-size: 18px;
  color: #00C2CB;
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 125px;
  height: 125px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

const Username = styled.span`
  font-size: 22px;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  align-items: center;
  margin: auto;
  color: #FF66C4;
`;

export function ReviewCard(props) {
  const { reviewText, username, userImgUrl } = props;

  return (
    <CardContainer>
      <Marginer direction="vertical" margin="1em" />
      <UserImg src = {userImgUrl}>
      </UserImg>
      <Marginer direction="vertical" margin="3em" />
      <UserDetails>
        <Username>{username}</Username>
      </UserDetails>
      <Marginer direction="vertical" margin="2em" />
      <ReviewText>{reviewText}</ReviewText>
    </CardContainer>
  );
}
