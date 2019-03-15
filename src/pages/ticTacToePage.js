import React from 'react';
import { Link } from 'fusion-plugin-react-router';
import FusionStyle from '../components/fusionStyle';
import Center from '../components/center';
import TicTacToe from '../games/TicTacToe';

const TicTacToePage = () => {
  return (
    <>
      <Link to="/"><h1>Home</h1></Link>
      <Center direction="column">
        <FusionStyle>Tic Tac Toe</FusionStyle>
        <TicTacToe/>
      </Center>
    </>
  )
};

export default TicTacToePage;

