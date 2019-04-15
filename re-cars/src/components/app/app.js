import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { CarTableContainer, ActionFormContainer } from '../../containers';
import Error from '../error';

import './app.css';

const App = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={CarTableContainer} />
                <Route path='/create' component={ActionFormContainer} />
                <Route path='/update/:id(\d+)' component={ActionFormContainer} />
                <Route render={() => <Error title="404 - Not Found" message="Requested address doesn't exist" />} />
            </Switch>
        </main>
    );
};

export default App;