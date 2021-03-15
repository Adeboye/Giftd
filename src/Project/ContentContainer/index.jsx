import React from 'react';
import PropTypes from 'prop-types';

import {
  ContentContainer,
  Header,
  SubHeader,
  BubbleTitle,
  BubbleContainer,
  Bubble,
  InputContainer,
  InputGroup,
  InputLabel,
  Input,
  BackButton,
  FormButton,
  BackImage
} from './Styles';

import Button from '../../shared/components/Button';
import backImage from '../../assets/back-arrow.png';

const propTypes = {
  content: PropTypes.object.isRequired,
  moveBack: PropTypes.func.isRequired,
  moveForward: PropTypes.func.isRequired,
  updateGiftCriteria: PropTypes.func.isRequired,
  removeGiftCriteria: PropTypes.func.isRequired,
  criteria: PropTypes.object.isRequired
};

const ProjectContentContainer = ({
  content,
  moveBack,
  moveForward,
  updateGiftCriteria,
  removeGiftCriteria,
  criteria
}) => {
  const { header, subHeader, bubbleTitle, bubble, input, button, back } = content;

  const bubbleClickHandler = (val) => {
    updateGiftCriteria(val);
    moveForward();
  };

  const backClickHandler = () => {
    removeGiftCriteria();
    moveBack();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const min = event.target.form[0].valueAsNumber;
    const max = event.target.form[1].valueAsNumber;
    updateGiftCriteria({
      min,
      max
    });
    moveForward();
  };

  return (
    <ContentContainer>
      {header && <Header>{header}</Header>}

      {subHeader && <SubHeader>{subHeader(criteria)}</SubHeader>}

      {bubbleTitle && <BubbleTitle>{bubbleTitle(criteria)}</BubbleTitle>}

      {bubble && (
        <BubbleContainer>
          {bubble.map((entry) => {
            return (
              <Bubble key={entry.id} onClick={() => bubbleClickHandler(entry)}>
                {entry.name}
              </Bubble>
            );
          })}
        </BubbleContainer>
      )}

      {input && (
        <InputContainer>
          {input.map((entry) => {
            return (
              <InputGroup key={entry}>
                <InputLabel>{entry}</InputLabel>
                <Input name={entry} />
              </InputGroup>
            );
          })}
          <FormButton onClick={formSubmitHandler}>Next</FormButton>
        </InputContainer>
      )}

      {button && <Button onClick={moveForward}>{button}</Button>}

      {back && (
        <BackButton onClick={backClickHandler}>
          <BackImage src={backImage} alt="back image" /> Back
        </BackButton>
      )}
    </ContentContainer>
  );
};

ProjectContentContainer.propTypes = propTypes;

export default ProjectContentContainer;
