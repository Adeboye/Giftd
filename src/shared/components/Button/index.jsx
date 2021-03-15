import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Styles';

const propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  onClick: () => {},
  children: undefined,
  className: undefined
};

const Button = ({ onClick, children, className }) => (
  <StyledButton className={className} onClick={onClick}>
    {children}
  </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
