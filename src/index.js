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
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
