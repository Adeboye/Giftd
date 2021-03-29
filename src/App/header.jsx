import React from 'react';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const resetPage = () => {
    history.go(0);
  };

  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <StyledAnchor onClick={resetPage}>GIFT&apos;D</StyledAnchor>
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
