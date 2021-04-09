import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: auto;
  display: flex;
  justify-content: space-between;
`;

export const StyledHeaderLogo = styled.h1`
  color: slategray;
  font-size: 24px;
  cursor: pointer;
`;

export const StyledNav = styled.nav``;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledListItem = styled.li`
  display: inline-block;
  margin-right: 44px;

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledAnchor = styled.a`
  color: #545871;
  font-size: ${({ theme }) => theme.FONT_SIZES.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.SEMI_BOLD};
`;

export const StyledNavLink = styled(NavLink)`
  color: #545871;
  font-size: ${({ theme }) => theme.FONT_SIZES.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.SEMI_BOLD};
`;
