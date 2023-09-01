import React, { useState, useEffect } from 'react';
import { StyledGameCard } from '../../styles/Styles';
import ColorSquare from './ColorSquare';

const StateGame = () => {
  const initialColors = [
    "#FF5733", "#FFC300", "#36DBCA", "#4CAF50",
    "#9C27B0", "#FF9800", "#00BCD4", "#795548",
    "#E91E63", "#8BC34A", "#3F51B5", "#FFEB3B",
    "#607D8B", "#2196F3", "#9E9E9E"
  ];

  const [squares, setSquares] = useState(initialColors);
  const [repeatedColor, setRepeatedColor] = useState(null);
  const [lives, setLives] = useState('💚💚💚💚💚')
  const [score, setScore] = useState(0)

  const RandomSquare = () => {
    const randomIndex = Math.floor(Math.random() * squares.length);
    setRepeatedColor(squares[randomIndex]);
    const randomColor = squares[randomIndex];
    setSquares([...squares, randomColor]);
  };

  useEffect(() => {
    RandomSquare();
  }, []);

  const handleSquareClick = (color) => {
    if (color === repeatedColor) {
      alert('You win!');
    }
  };

  return (
    <>
      <StyledGameCard>
        <div>
          <h1>Find duplicate color</h1>
        </div>
        <div>
          <span>Score: {score} </span>
          <span> | </span>
          <span>Health: {lives} </span>
        </div>
        <div className='squares-section'>
          {squares.map((item, index) => (
            <ColorSquare
              key={index}
              color={item}
              isRepeated={item === repeatedColor}
              onClick={() => handleSquareClick(item)}
            />
          ))}
        </div>
      </StyledGameCard>
    </>
  );
};

export default StateGame;