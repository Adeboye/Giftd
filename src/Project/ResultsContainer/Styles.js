import styled from 'styled-components';

export const Results = styled.div``;

export const GiftWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 215px);
  justify-content: space-between;
  gap: 60px 90px;
  margin-bottom: 20px;
`;

export const GiftCard = styled.div`
  width: 100%;
  height: 100%;
`;

export const GiftLink = styled.a``;

export const GiftImage = styled.img`
  width: 215px;
  height: 215px;
  border: 1px solid grey;
  object-fit: fill;
`;

export const GiftLabel = styled.div`
  padding-top: 14px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZES.BASE};
`;

export const SeeMore = styled.button`
  display: block;
  width: 100%;
  margin-top: 40px;
  text-align: right;
  color: #545871;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.SEMI_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM};
  background: #ffff;
  outline: none;
  cursor: pointer;
`;
