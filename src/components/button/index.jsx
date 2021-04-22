import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
  border-radius: 5px;
  background-color: #8C52FF;
  color: #fff;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  font-size: ${({ small }) => (small ? "12px" : "16px")};
  outline: none;
  border: 2px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  align-content: center;
  &:hover {
    background-color: transparent;
    color: #000000;
    border: 2px solid #8C52FF;
  }
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
