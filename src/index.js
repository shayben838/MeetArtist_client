import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// REDUX impors
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { watchLogged } from "../src/redux/sagas/saga"
import allReducers from "../src/redux/reducers/index_reducers"

// REDUX config
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchLogged);




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
