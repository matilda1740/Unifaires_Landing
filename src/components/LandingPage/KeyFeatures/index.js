import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
// Icons
import InfoCard from "./InfoCard";

const ContainerStyle = styled.div`
  background: white;
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const KeyFeatures = () => {
  return (
    <ContainerStyle className=" ptb-100 container">
      <Fade up delay={100}>
        <FlexContainer>
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </FlexContainer>
      </Fade>
    </ContainerStyle>
  );
};

export default KeyFeatures;
