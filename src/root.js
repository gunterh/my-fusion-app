// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';

import Home from './pages/home.js';
import PageNotFound from './pages/pageNotFound.js';
import TicTacToePage from './pages/ticTacToePage.js';

const root = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/tictactoe" component={TicTacToePage} />
    <Route component={PageNotFound} />
  </Switch>
);

export default root;
