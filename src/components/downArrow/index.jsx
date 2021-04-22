import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ArrowContainer = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #8C52FF;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #000000;
    border: 3px solid #8C52FF;
  }
`;

const ArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 29px;
`;

export function DownArrow() {
  return (
    <ArrowContainer>
      <ArrowIcon>
        <FontAwesomeIcon icon={faAngleDown} />
      </ArrowIcon>
    </ArrowContainer>
  );
}
