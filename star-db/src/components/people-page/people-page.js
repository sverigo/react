import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import SwapiService from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 11
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {
        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(item) => (`${item.name} (${item.birthYear})`)}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson} />
            </ErrorBoundry>
        );

        return (
            <Row leftElement={itemList} rightElement={personDetails} />
        );
    }
}