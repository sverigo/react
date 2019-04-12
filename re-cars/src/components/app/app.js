import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CarsList from '../cars-list';
import ActionForm from '../action-form';

import './app.css';

const App = () => {
    return (
        <main className="container">
            <Switch>
                <Route exact path='/' component={CarsList} />
                <Route path='/create' component={ActionForm} />
                <Route path='/update/:id(\d+)' component={ActionForm} />
            </Switch>
        </main>
    );
};

export default App;