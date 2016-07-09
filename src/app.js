import React from 'react';
import ReactDOM from 'react-dom';
import combinedReducers from './js/reducers/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, IndexRoute, hashHistory  } from 'react-router';
import PageWrapper from './js/containers/index.js';
import 'react-color-picker/index.css';
import './styles/style.scss';

let store = createStore(
            combinedReducers,
            applyMiddleware(thunkMiddleware)
            );

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/(:pageName)' component={PageWrapper} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
