import React from 'react';

import GiftImage from '../shared/components/GiftImage';
import GiftImageFull from '../assets/Illustration-Gifts-full.svg';

import {
  StyledAboutPage,
  AboutPageGrid,
  ContentContainer,
  ImageContainer,
  Title,
  Content,
  StyledDiv
} from './Styles';

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <AboutPageGrid>
        <ContentContainer>
          <Title>About GIFT&apos;D</Title>
          <Content>
            <StyledDiv>
              About Gift’d Gift-giving is part of the culture, no atter where you are and no matter
              how long you stay. ~ Christalynn Brannen (Doing business with Japanese men)
            </StyledDiv>

            <StyledDiv>
              We believe finding the right gift should be fun, but it could be daunting if one has
              no close relationship with the recipient. We designed Gift&apos;d to simplify the gift
              finding process.
            </StyledDiv>

            <StyledDiv>
              The application currently pulls gift choices from the Etsy marketplace.
            </StyledDiv>

            <StyledDiv>We hope you enjoy the gifting process.</StyledDiv>
          </Content>
        </ContentContainer>
        <ImageContainer>
          <GiftImage url={GiftImageFull} />
        </ImageContainer>
      </AboutPageGrid>
    </StyledAboutPage>
  );
};

export default AboutPage;
