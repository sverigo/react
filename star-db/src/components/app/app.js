import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';

import './app.css';
import PeoplePage from '../people-page';


export default class App extends Component {

    state = {
        selectedPerson: 5,
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <ErrorButton />
                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
            </div>
        );
    }
}