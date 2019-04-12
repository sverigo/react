import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CarsList from '../cars-list';

import './app.css';

const App = () => {
    return (
        <main className="container">
            <Switch>
                <Route exact path='/' component={CarsList} />
            </Switch>
        </main>
    );
};

export default App;