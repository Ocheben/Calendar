import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './_store/reducer';

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
