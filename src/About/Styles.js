import styled from 'styled-components';

export const StyledAboutPage = styled.div`
  margin: 20px 50px 0 110px;
`;

export const AboutPageGrid = styled.div`
  display: grid;
  grid-template-areas: 'content image';
  grid-template-columns: 559px 1fr;
`;

export const ContentContainer = styled.div`
  grid-area: content;
  position: relative;
  align-self: flex-start;
  position: relative;
  height: 100%;
`;

export const ImageContainer = styled.div`
  grid-area: image;
  align-self: center;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
`;

export const Content = styled.div``;

export const StyledDiv = styled.p`
  margin-bottom: 20px;
  font-size: 22px;
`;
