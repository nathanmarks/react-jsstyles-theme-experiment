import {hashHistory, Router as ReactRouter, Route, IndexRedirect} from 'react-router';
import React, {Component} from 'react';
import AppFrame from './AppFrame';
import Home from './pages/Home';

export default class Router extends Component {
  render() {
    return (
      <ReactRouter history={hashHistory} {...this.props}>
        <Route title="MD Style Experiment" path="/" component={AppFrame}>
          <IndexRedirect to="home" />
          <Route
            path="home"
            component={Home}
            title="Home"
          />
        </Route>
      </ReactRouter>
    );
  }
}
