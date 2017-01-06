import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import useRelay from 'react-router-relay';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  applyRouterMiddleware,
} from 'react-router';
import App from './view/App';

import { setRelayNetworkLayer } from './utils';

setRelayNetworkLayer();

export function routeQuery() {
  return {
    viewer: () => Relay.QL`query { viewer }`,
  };
}

const routes = (
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useRelay.default)}
    environment={Relay.Store}
  >

  <Route path="/"
    component={App}
    queries={routeQuery()}
   />
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
