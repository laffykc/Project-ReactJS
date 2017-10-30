import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './container/Home';
import Profile from './container/Profile';
import Service from './container/Service';
import Contact from './container/Contact';
import SignupPage from './container/ssl/SignupPage';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  (state= {}) => state,
  applyMiddleware(thunk)
);



ReactDOM.render(
  <Provider store= {store} >
  <Router history = {hashHistory} >
      <Route path ='/' component ={App} >
        <IndexRoute component={Home} />
        <Route path ='/profile' component ={Profile} />
        <Route path ='/service' component ={Service} />
        <Route path ='/contact' component ={Contact} />
        <Route path ='/signup' component={SignupPage} />
      </Route>
  </ Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
