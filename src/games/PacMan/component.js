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

class PacMan extends React.Component {
  state = {
    turn: 'O'
  }

  handleClick = () => {
    this.setState({ turn: this.state.turn === 'X' ? 'O' : 'X' });
  };

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.turn}</div>
    );
  }
};

export default PacMan;