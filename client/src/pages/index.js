import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Home from './home';
import Players from './players';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Home path="/" />
      <Players path="playerStats" />
    </Router>
  );
}