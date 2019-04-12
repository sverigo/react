import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app';
import CarsService from './services/cars-service';
import { CarsServiceProvider } from './services/cars-service-context';
import store from './store';

const carsService = new CarsService();

ReactDOM.render(
    <Provider store={store}>
        <CarsServiceProvider value={carsService}>
            <Router>
                <App />
            </Router>
        </CarsServiceProvider>
    </Provider>,
    document.querySelector('#root')
);