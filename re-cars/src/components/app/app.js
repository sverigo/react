import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { CarTableContainer } from '../../containers';
import ActionForm from '../action-form';
import Error from '../error';

import './app.css';

const App = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={CarTableContainer} />
                <Route path='/create' component={ActionForm} />
                <Route path='/update/:id(\d+)' component={ActionForm} />
                <Route render={() => <Error title="404 - Not Found" message="Requested address doesn't exist" />} />
            </Switch>
        </main>
    );
};

export default App;