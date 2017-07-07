import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import IntlWrapper from './modules/Intl/IntlWrapper'
import AppIndex from './modules/App/App'
import AppReducer from './modules/App/AppReducer'
// Import Style
import styles from './App.css';

const reducer = combineReducers({ AppReducer })
const store = createStore(reducer)
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
