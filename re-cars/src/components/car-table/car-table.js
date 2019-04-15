import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

import './car-table.css';

const CarTable = (props) => {
    const { cars, onCreate, onUpdate, onDelete } = props;

    return (
        <div className="table">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cars.map((car) => {
                            return (
                                <TableRow key={car.id}>
                                    <TableCell>{car.id}</TableCell>
                                    <TableCell>{car.make}</TableCell>
                                    <TableCell>{car.model}</TableCell>
                                    <TableCell>${car.price}</TableCell>
                                    <TableCell>
                                        <Button size="small" onClick={() => onUpdate(car.id)}>Update</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button size="small" onClick={() => onDelete(car.id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
            <Button size="large" onClick={onCreate}>Create</Button>
        </div>
    );
};

export default CarTable;