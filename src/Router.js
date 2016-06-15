import {hashHistory, Router as ReactRouter, Route, IndexRedirect} from 'react-router';
import React, {Component} from 'react';
import App from './App';
import Home from './pages/Home';

export default class Router extends Component {
  render() {
    return (
      <ReactRouter history={hashHistory} {...this.props}>
        <Route title="MD Style Experiment" path="/" component={App}>
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
