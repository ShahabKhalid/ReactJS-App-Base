import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import App from './layout/App'
import configureStore from './core/store';
import registerServiceWorker from './lib/registerServiceWorker'
import './css/index.css';

const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))
registerServiceWorker(); // Enables cache , for slow network users
