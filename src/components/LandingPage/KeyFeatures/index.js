import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
// Icons
import DefinePath from "../../../public/images/icon1.svg";
import MasterSkill from "../../../public/images/icon2.svg";
import ApplyJob from "../../../public/images/icon3.svg";
import image from "next/image";

const Header = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: #12355b;
  text-align: left;
  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;
const Text = styled.p`
  text-align: left;
  font-size: 16px;
  max-width: 400px;
  color: #000000;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  border: none;
  min-width: 200px;
  min-height: 48px;
  background: #5832da;
  border-radius: 8px;
  color: white;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1200px) {
    max-width: 150px;
  }
`;
const ContainerStyle = styled.div`
  background: white;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  @media (max-width: 1024px) {
    gap: 20px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;
const Icon = styled(image)`
  width: 10px !important;
`;
const KeyFeatures = () => {
  return (
    <ContainerStyle className=" ptb-100">
      <Fade up delay={100}>
        <FlexContainer className="container">
          <InnerWrapper>
            <Icon src={DefinePath} alt="image" />
            <Header>Define your career path</Header>
            <Text>
              Define your career path for yourself, or chart a new territory
              entirely; we’ve got your back either way.
            </Text>
            <Button className="default-btn">
              Discover your career
              <i class="ri-arrow-right-s-line"></i>
            </Button>
          </InnerWrapper>
          <InnerWrapper>
            <Icon src={MasterSkill} alt="image" />
            <Header>Match Skills</Header>
            <Text>
              With our skill-matching technology, we can accurately match your
              skills to the right job opportunites for you.
            </Text>
            <Button className="default-btn">
              Match Skills
              <i class="ri-arrow-right-s-line"></i>
            </Button>
          </InnerWrapper>
          <InnerWrapper>
            <Icon src={ApplyJob} alt="image" />
            <Header>Apply to the right job</Header>
            <Text>
              Get expert coaching to deliver on-demand skills that can help you
              navigate through list of jobs to find that right one.
            </Text>
            <Button className="default-btn">
              Search now
              <i class="ri-arrow-right-s-line"></i>
            </Button>
          </InnerWrapper>
        </FlexContainer>
      </Fade>
    </ContainerStyle>
  );
};

export default KeyFeatures;
