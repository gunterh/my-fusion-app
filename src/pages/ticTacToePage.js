import React from 'react';
import { Link } from 'fusion-plugin-react-router';
import FusionStyle from '../components/fusionStyle';
import Center from '../components/center';
import TicTacToe from '../games/PacMan';

const TicTacToePage = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Center direction="column">
        <FusionStyle>Tic Tac Toe</FusionStyle>
        <TicTacToe/>
      </Center>
    </>
  )
};

export default TicTacToePage;

