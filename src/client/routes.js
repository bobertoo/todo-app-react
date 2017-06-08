import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TodosPage from './components/todos-page';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={TodosPage} />
    <Route path="/:filter" component={TodosPage} />
  </Route>
);

export default routes;
