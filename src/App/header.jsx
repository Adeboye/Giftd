import React from 'react';

import {
  StyledHeader,
  StyledHeaderLogo,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledNavLink,
  StyledAnchor
} from './Styles';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <StyledNavLink to="/">GIFT&apos;D</StyledNavLink>
      </StyledHeaderLogo>
      <StyledNav>
        <StyledList>
          <StyledListItem>
            <StyledNavLink to="/about">About Us</StyledNavLink>
          </StyledListItem>
          <StyledListItem>
            <StyledNavLink to="/reviews">Reviews</StyledNavLink>
          </StyledListItem>
          <StyledListItem>
            <StyledAnchor href="mailto:giftd.gifts@gmail.com">Contact</StyledAnchor>
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
