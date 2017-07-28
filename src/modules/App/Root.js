import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './Routes'
// Import Style
import styles from './Root.css';


class App extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store} >
        <BrowserRouter >
          <Route path="/" component={Routes} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
