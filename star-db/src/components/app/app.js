import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import {
    PersonList, PersonDetails, PlanetList, PlanetDetails,
    StarshipList, StarshipDetails
} from '../sw-components';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
//import DummySwapiService from '../../services/dummy-swapi-service';

import './app.css';

export default class App extends Component {
    swapiService = new SwapiService();
    //swapiService = new DummySwapiService();

    state = {
        showRandomPlanet: true
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header />

                        <PersonDetails itemId={11} />
                        <PlanetDetails itemId={5} />
                        <StarshipDetails itemId={9} />

                        <PersonList />
                        <PlanetList />
                        <StarshipList />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}