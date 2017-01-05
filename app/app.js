import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';

import App from './view/App';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
