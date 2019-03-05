import React from 'react';
import { styled, withStyle } from 'fusion-plugin-styletron-react';

const Div = styled('div', {
  fontFamily: 'HelveticaNeue-Light, Arial',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

const Center = withStyle(Div, props => ({
  flexDirection: props.direction || 'row',
}));

export default Center;