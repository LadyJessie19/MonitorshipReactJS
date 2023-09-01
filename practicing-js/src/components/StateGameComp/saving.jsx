import React, { useState } from 'react'
import { StyledGameCard } from '../../styles/Styles'
import ColorSquare from './ColorSquare'

const colors = [
    "#FF5733", "#FFC300", "#36DBCA", "#4CAF50",
    "#9C27B0", "#FF9800", "#00BCD4", "#795548",
    "#E91E63", "#8BC34A", "#3F51B5", "#FFEB3B",
    "#607D8B", "#2196F3", "#9E9E9E", /* "#FF5722" */
]

const StateGame = () => {
    const [squares, setSquares] = useState([
        "#FF5733", "#FFC300", "#36DBCA", "#4CAF50",
        "#9C27B0", "#FF9800", "#00BCD4", "#795548",
        "#E91E63", "#8BC34A", "#3F51B5", "#FFEB3B",
        "#607D8B", "#2196F3", "#9E9E9E"
    ])
   
    const RandomSquare = () => {
        const RandomNumber = Math.round(Math.random() * squares.length)
        const squareColor = colors[RandomNumber === 0 ? RandomNumber : RandomNumber - 1]
        setSquares(squares.push(squareColor))
    }

  return (
    <>
        <StyledGameCard>
            <div>
                <h1>Find duplicate color</h1>
            </div>
            <div>
                <span>Score:0 </span>
                <span>Health:💚💚💚💚💚</span>
            </div>
            <div>
                <button onClick={RandomSquare}>Start!</button>
            </div>
            <div className='squares-section'>
                {squares.map((item, index) => <ColorSquare key={index} color={item}/>)}
            </div>
        </StyledGameCard>
    </>
  )
}

export default StateGame

/* 
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

  const RandomSquare = () => {
    const randomIndex = Math.floor(Math.random() * squares.length);
    const randomColor = squares[randomIndex];
    setSquares([...squares, randomColor]);
  };

  useEffect(() => {
    RandomSquare()
  }, []);

  return (
    <>
      <StyledGameCard>
        <div>
          <h1>Find duplicate color</h1>
        </div>
        <div>
          <span>Score: 0</span>
          <span>Health: 💚💚💚💚💚</span>
        </div>
        <div className='squares-section'>
          {squares.map((item, index) => (
            <ColorSquare key={index} color={item} />
          ))}
        </div>
      </StyledGameCard>
    </>
  );
};

export default StateGame;
*/