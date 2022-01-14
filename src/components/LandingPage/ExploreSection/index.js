import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
// Icons
import BoxIcon from "../../../public/images/boxicon.svg";
import BrandIcons from "../../../public/images/brands.svg";
import NextImage from "common/components/NextImage";

const ContainerStyle = styled.div`
  background: white;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 20px;
`;
const Icon = styled.img``;
const Brands = styled.img``;
const Heading = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #000000;
`;
const HeadingText = styled.p`
  display: flex;
  align-items: center;
  opacity: 0.9;
  font-size: 45px;
  line-height: 125%;
  color: #c07654;
  margin-bottom: 20px;
`;
const Text = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #c07654;
  opacity: 0.9;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: 1200px) {
    gap: 20px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    gap: 20px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Box = styled.div`
  min-width: 384px;
  min-height: 336px;
  @media (max-width: 1024px) {
    min-width: 280px;
    min-height: 280px;
  }

  @media (max-width: 800px) {
    min-width: 384px;
    min-height: 336px;
  }

  background: rgba(88, 50, 218, 0.05);
  border-radius: 24px;
  -webkit-transition: 0.5s;
  &:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 384px;
  padding: 24px;
`;
const BoxHeader = styled.p`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: rgba(88, 50, 218, 1);
`;
const BoxSubheader = styled(BoxHeader)`
  color: #b8bcca;
  opacity: 0.5;
`;
const SpanStyle = styled(BoxHeader)`
  color: #12355b;
  margin-right: 5px;
`;
const BoxText = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: #808080;
  opacity: 0.9;
`;

const ExploreSection = () => {
  return (
    <ContainerStyle className=" ptb-100 container">
      <HeadingText>Explore 2,305 courses from various instructors</HeadingText>
      <FlexContainer>
        <>
          <Heading>
            Courses from 1,513 different institutions like IBM, Emory, and
            Harvard.
          </Heading>
        </>
        <Text>
          See all <i class="ri-arrow-right-s-line"></i>
        </Text>
      </FlexContainer>
      <Fade up delay={100}>
        <TopWrapper>
          <Box>
            <Flex>
              <NextImage src={BoxIcon} alt="image" />
              <NextImage src={BrandIcons} alt="image" />
            </Flex>
            <InnerWrapper>
              <BoxHeader>
                <SpanStyle>68</SpanStyle>
                {"  "}Project Management
              </BoxHeader>
              <BoxSubheader>Courses</BoxSubheader>
              <BoxText>
                Learn from top management firms like McKinsey & Company,
                Accenture, Deloitte and more
              </BoxText>
            </InnerWrapper>
          </Box>
          <Box>
            <Flex>
              <NextImage src={BoxIcon} alt="image" />
              <NextImage src={BrandIcons} alt="image" />
            </Flex>
            <InnerWrapper>
              <BoxHeader>
                {" "}
                <SpanStyle>183 </SpanStyle>Software Engineering Courses
              </BoxHeader>
              <BoxSubheader>Courses</BoxSubheader>
              <BoxText>
                Learn from top management firms like McKinsey & Company,
                Accenture, Deloitte and more
              </BoxText>
            </InnerWrapper>
          </Box>
          <Box>
            <Flex>
              <NextImage src={BoxIcon} alt="image" />
              <NextImage src={BrandIcons} alt="image" />
            </Flex>
            <InnerWrapper>
              <BoxHeader>
                {" "}
                <SpanStyle>140</SpanStyle>Product Design Courses
              </BoxHeader>
              <BoxSubheader>Courses</BoxSubheader>
              <BoxText>
                Learn from top management firms like McKinsey & Company,
                Accenture, Deloitte and more
              </BoxText>
            </InnerWrapper>
          </Box>
        </TopWrapper>
      </Fade>

      <Fade up delay={100}>
        <BottomWrapper>
          <Box>
            <Flex>
              <NextImage src={BoxIcon} alt="image" />
              <NextImage src={BrandIcons} alt="image" />
            </Flex>
            <InnerWrapper>
              <BoxHeader>
                {" "}
                <SpanStyle>68</SpanStyle>Econometrics Courses
              </BoxHeader>
              <BoxSubheader>Courses</BoxSubheader>
              <BoxText>
                Learn from top management firms like McKinsey & Company,
                Accenture, Deloitte and more
              </BoxText>
            </InnerWrapper>
          </Box>
          <Box>
            <Flex>
              <NextImage src={BoxIcon} alt="image" />
              <NextImage src={BrandIcons} alt="image" />
            </Flex>
            <InnerWrapper>
              <BoxHeader>
                {" "}
                <SpanStyle>183</SpanStyle>Software Engineering Courses
              </BoxHeader>
              <BoxSubheader>Courses</BoxSubheader>
              <BoxText>
                Learn from top management firms like McKinsey & Company,
                Accenture, Deloitte and more
              </BoxText>
            </InnerWrapper>
          </Box>
          <Box>
            <Flex>
              <NextImage src={BoxIcon} alt="image" />
              <NextImage src={BrandIcons} alt="image" />
            </Flex>
            <InnerWrapper>
              <BoxHeader>
                {" "}
                <SpanStyle>43</SpanStyle>Property Valuation Courses
              </BoxHeader>
              <BoxSubheader>Courses</BoxSubheader>
              <BoxText>
                Learn from top management firms like McKinsey & Company,
                Accenture, Deloitte and more
              </BoxText>
            </InnerWrapper>
          </Box>
        </BottomWrapper>
      </Fade>
    </ContainerStyle>
  );
};

export default ExploreSection;
