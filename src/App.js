import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import IntlWrapper from './modules/Intl/IntlWrapper'
import AppIndex from './modules/App/App'

import rootReducer from './reducers'
import rootSaga from './sagas'
// Import Style
import styles from './App.css';


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,

  composeEnhancers(
    applyMiddleware(
      sagaMiddleware
    )
  )
)
sagaMiddleware.run(rootSaga)
class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter >
          <Route path="/" component={AppIndex} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
