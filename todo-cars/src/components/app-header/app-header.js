import React, { Component } from 'react';

import './app-header.css';

export default class AppHeader extends Component {
    onCreateAction = () => {
        this.props.history.push('/create');
    };

    render() {
        const { count } = this.props;

        return (
            <div className="app-header">
                <h1>Cars List</h1>
                <div className="sub-header">
                    <div className="count">Cars count: <span className="bold">{count}</span></div>
                    <button className="btn btn-outline-secondary" onClick={this.onCreateAction}>Create</button>
                </div>
            </div>
        );
    }
}