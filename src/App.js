// import 'font-awesome/css/font-awesome.css';
// import './assets/styles/main.css';
import ReactDOM from 'react-dom';
import Routes from './components/routes/routes';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';



ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.querySelector('#root')
    );
 