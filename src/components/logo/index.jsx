import React from "react";
import styled, { css } from "styled-components";

import GameLogo from "../../assets/logo/logo.gif";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
  width: 80%;
  height: 80%;
`;

const LogoImg = styled.img`
  width: 40%;
  height: 35%;

  ${({ inline }) =>
    inline &&
    css`
      margin-top: 5px;
      margin-right: 6px;
    `};

  ${({ small }) =>
    small &&
    css`
    `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "23px" : "40px"};
  color: ${({ inline }) => (inline ? "#fff" : theme.primary)};
  font-weight: 900;
`;

export function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={GameLogo} inline={inline} small={small} />
    </LogoContainer>
  );
}
