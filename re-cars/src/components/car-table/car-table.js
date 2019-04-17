import React from 'react';

import DialogWindow from '../dialog-window';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

import './car-table.css';

const CarTable = (props) => {
    const { onCreate, onUpdate, state, handleDialogOpen, handleDialogClose, handleDialogConfirm,
        handleChangePage, handleChangeRowsPerPage } = props;

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
                        state.pagination.displayedCars.map((car) => {
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
                                        <IconButton color="secondary" className="car-row-btn" size="small" onClick={() => handleDialogOpen(car.id)}>
                                            <Icon>delete</Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination 
                            rowsPerPageOptions={state.pagination.rowsPerPageOptions}
                            count={state.pagination.count}
                            rowsPerPage={state.pagination.rowsPerPage}
                            page={state.pagination.page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
            <Fab className="add-fab" size="medium" color="primary" onClick={onCreate}>
                <Icon>add</Icon>
            </Fab>
            <DialogWindow
                open={state.isDialogOpen}
                handleClose={handleDialogClose}
                handleOk={handleDialogConfirm}
            />
        </div>
    );
};

export default CarTable;