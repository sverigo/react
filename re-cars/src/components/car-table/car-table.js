import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

import './car-table.css';

const CarTable = (props) => {
    const { cars, onCreate, onUpdate, onDelete } = props;

    return (
        <div className="table">
            <h1>ReCars App</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cars.map((car) => {
                            return (
                                <TableRow className="car-row" key={car.id}>
                                    <TableCell>{car.id}</TableCell>
                                    <TableCell>{car.make}</TableCell>
                                    <TableCell>{car.model}</TableCell>
                                    <TableCell>${car.price}</TableCell>
                                    <TableCell align="right">
                                        <IconButton color="primary" className="car-row-btn" size="small" onClick={() => onUpdate(car.id)}>
                                            <Icon>edit</Icon>
                                        </IconButton>
                                        <IconButton color="secondary" className="car-row-btn" size="small" onClick={() => onDelete(car.id)}>
                                            <Icon>delete</Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
            <Fab className="add-fab" size="medium" color="primary" onClick={onCreate}>
                <Icon>add</Icon>
            </Fab>
        </div>
    );
};

export default CarTable;