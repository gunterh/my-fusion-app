// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import FusionStyle from '../components/fusionStyle';
import Center from '../components/center';
import { Link } from 'fusion-plugin-react-router';

const FullHeightDiv = styled('div', {
  height: '100%',
  backgroundColor: '#FFFFFF',
});

const Circle = styled('div', {
  height: '180px',
  width: '180px',
  marginTop: '20px',
  backgroundColor: 'white',
  ':hover': {backgroundColor: '#f0f8fa'},
  border: '10px solid #4db5d9',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const GettingStartedLink = styled('div', {
  textDecoration: 'none',
  color: '#4db5d9',
  fontSize: '18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
});

const Home = () => (
  <FullHeightDiv>
    <style>
      {`
        html,body,#root{height:100%;}
        html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
        body{margin:0;}
        button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
        input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
        `}
    </style>
    <Center>
      <FusionStyle>Let's Play</FusionStyle>

      <Center>
        <Link to="tictactoe">
          <Circle>
            <GettingStartedLink>
              Tic Tac Toe
            </GettingStartedLink>
          </Circle>
        </Link>
      </Center>
    </Center>
  </FullHeightDiv>
);

export default Home;
