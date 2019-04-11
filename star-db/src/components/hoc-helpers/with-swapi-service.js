import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped) => {
    return (props) => {
        <SwapiServiceConsumer>
            <Wrapped {...props} />
        </SwapiServiceConsumer>
        
    }
};