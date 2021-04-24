import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";

const NavbarContainer = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 5px;
  justify-content: center;
`;

const MiddleContainer = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div`
  width = 80%;
`;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: #8C52FF;
  font-family: 'Press Start 2P', cursive;
  &:hover {
    background-color: transparent;
    border: none;
    color: #000000;
  }
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <MiddleContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <Button small>GET STARTED</Button>
        <Marginer direction="horizontal" margin="20px" />
        <LoginButton small>LOGIN</LoginButton>
      </AccessibilityContainer>
      </MiddleContainer>
    </NavbarContainer>
  );
}
