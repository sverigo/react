import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/app';
import ActionForm from './components/action-form';

const RouterModule = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/create" component={ActionForm} />
                <Route path="/update/:id" component={ActionForm} />
            </Switch>
        </Router>
    );
};

export default RouterModule;