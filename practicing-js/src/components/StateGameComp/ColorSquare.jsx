import React from 'react';
import { StyledColorSquare } from '../../styles/Styles';

const ColorSquare = ({ color, isRepeated }) => {
  const squareStyle = {
    backgroundColor: color
  };

  const repeatedSquare = () => {
    if (isRepeated) {
      alert('You win!');
    }
  };

  return (
    <StyledColorSquare style={squareStyle} onClick={repeatedSquare}>
    </StyledColorSquare>
  );
};

export default ColorSquare;