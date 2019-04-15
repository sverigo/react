import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './action-form.css';

const ActionForm = (props) => {
    const { state, handleCancel, handleChange, handleSubmit } = props;
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <TextField margin="normal" fullWidth name="make" value={state.make} 
                    onChange={handleChange} placeholder="Make" label="Make" />
                <TextField margin="normal" fullWidth name="model" value={state.model} 
                    onChange={handleChange} placeholder="Model" label="Model"  />
                <TextField margin="normal" fullWidth name="price" value={state.price} 
                    onChange={handleChange} placeholder="Price" label="Price"  />
                <Button color="primary" type="submit">OK</Button>
                <Button color="secondary" type="button" onClick={handleCancel}>Cancel</Button>
            </form>
        </div>
    );
};

export default ActionForm;