import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './components/index';
import weather from './components/weather';

export default (
  <Route path="/" component={Index}>
    <IndexRoute component={weather} />
  </Route>
);
