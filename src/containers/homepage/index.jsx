import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { MoreAboutSection } from "./moreAboutSection";
import { ReviewsSection } from "./reviewsSection";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #eeeeee;
  display: flex;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      <TopSection />
      <ServicesSection />
      <Marginer direction="vertical" margin="2em" />
      <Line/>
      <ReviewsSection />
      <Marginer direction="vertical" margin="2em" />
      <Line/>
      <MoreAboutSection />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </PageContainer>
  );
}
