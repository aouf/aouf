import React from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './Route';

import Home from '../../pages/Home';
import NotFoundError from '../../pages/NotFoundError';

const App = () => (
  <Switch>
    <AppRoute path="/" exact component={Home} />
    <AppRoute statusCode={404} component={NotFoundError} />
  </Switch>
);

export default App;
