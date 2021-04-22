const { default: styled } = require("styled-components");

export const SectionTitle = styled.h1`
  font-size: 50px;
  font-weight: bolder;
  color: #8C52FF;
  font-family: 'Work Sans', sans-serif;
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
