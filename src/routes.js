import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './components/index';
import Whether from './components/whether';

export default (
  <Route path="/" component={Index}>
    <IndexRoute component={Whether} />
  </Route>
);
