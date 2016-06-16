import {hashHistory, Router as ReactRouter, Route, IndexRedirect} from 'react-router';
import React, {Component} from 'react';
import AppFrame from './AppFrame';
import Inbox from './pages/Inbox';

export default class Router extends Component {
  render() {
    return (
      <ReactRouter history={hashHistory} {...this.props}>
        <Route title="MD Style Experiment" path="/" component={AppFrame}>
          <IndexRedirect to="inbox" />
          <Route
            path="inbox"
            component={Inbox}
            title="Inbox"
          />
        </Route>
      </ReactRouter>
    );
  }
}
