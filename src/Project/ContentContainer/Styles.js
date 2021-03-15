import styled from 'styled-components';

import Button from '../../shared/components/Button';

export const ContentContainer = styled.div`
  grid-area: content;
  position: relative;
  align-self: flex-start;
  position: relative;
  height: 100%;
`;

export const Header = styled.div`
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.SEMI_BOLD};
  margin-top: 135px;
  color: black;
  width: 475px;
  max-width: 100%;
  font-size: 40px;
`;

export const SubHeader = styled.div`
  margin-top: 53px;
  font-size: 22px;
  color: slategray;
`;

export const BubbleTitle = styled.div`
  margin-top: 38px;
  font-family: ${({ theme }) => theme.FONT.THIN};
  font-size: 24px;
`;

export const BubbleContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const Bubble = styled.button`
  background-color: white;
  border-radius: 8px;
  border: 2px solid #545871;
  font-size: 18px;
  padding: 14px 20px;
  margin: 0 12px 17px 0;
  cursor: pointer;

  &:hover {
    color: #f5f5f5;
    background-color: #545871;
  }
`;

export const InputContainer = styled.form`
  width: 100%;
  margin-top: 25px;
`;

export const InputGroup = styled.div`
  display: inline-block;
  width: 80px;
  margin-right: 43px;
`;

export const Input = styled.input.attrs(() => ({
  type: 'number'
}))`
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }

  display: block;
  width: 100%;
  height: 38px;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const InputLabel = styled.label`
  text-align: left;
  color: #545871;
  display: inline-block;
  margin-bottom: 8px;
`;

export const FormButton = styled(Button)`
  display: block;
  margin-top: 10px;
`;

export const BackButton = styled.button`
  position: absolute;
  bottom: -36px;
  background: #ffff;
  outline: none;
  display: flex;
  font-size: 28px;
  align-items: center;
  cursor: pointer;
`;

export const BackImage = styled.img`
  height: 40px;
  margin-right: 8px;
`;
