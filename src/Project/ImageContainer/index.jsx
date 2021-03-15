import React from 'react';
import PropTypes from 'prop-types';

import ImageContainer from './Styles';
import GiftImage from '../../shared/components/GiftImage';

const propTypes = {
  content: PropTypes.any.isRequired
};

const ProjectImageContainer = ({ content }) => {
  const { image } = content;

  return (
    <ImageContainer>
      <GiftImage url={image} alt="under construction" />
    </ImageContainer>
  );
};

ProjectImageContainer.propTypes = propTypes;

export default ProjectImageContainer;
