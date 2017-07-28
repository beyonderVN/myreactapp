import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './modules/App/Root';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'
import rootSaga from './sagas'

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

ReactDOM.render(<Root
    store={store}
/>, document.getElementById('root'));
registerServiceWorker();
