import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import App from "./App";
import { Router, browserHistory } from "react-router";
import { BrowserRouter, Route } from 'react-router-dom'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Route path="/:filter?" component={App} />
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
