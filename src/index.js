import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App/App';
import store from './Store';


ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router></Provider>,
    document.getElementById('app')
)