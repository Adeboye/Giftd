import React from 'react';
import PropTypes from 'prop-types';

import StyledGiftImage from './Styles';

const propTypes = {
  url: PropTypes.string.isRequired
};

const GiftImage = ({ url }) => <StyledGiftImage src={url} />;

GiftImage.propTypes = propTypes;

export default GiftImage;
