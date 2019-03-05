import React, { useState } from 'react';
import { styled } from 'fusion-plugin-styletron-react';

const Board = styled('div', {
  width: '40%',
  border: '1px solid blue',
  ':after': {
    content: '""',
    display: 'block',
    paddingBottom: '100%',
  }
});

const TicTacToe = () => {
  const [turn, setTurn] = useState('O');
  const handleClick = () => {
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  return (
    <div onClick={handleClick}>{turn}</div>
  );
};

export default TicTacToe;