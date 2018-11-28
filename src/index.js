import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/routes/routes';
import store from './store';
import {Provider } from 'react-redux';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'normalize.css';

ReactDOM.render(  <Provider store={store}>
    <Routes />
</Provider>,  document.getElementById('root'));



