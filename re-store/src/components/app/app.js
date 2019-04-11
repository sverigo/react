import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </main>
    );
};

export default App;