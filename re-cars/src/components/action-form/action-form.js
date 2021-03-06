import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './action-form.css';

const ActionForm = (props) => {
    const { state, handleCancel, handleChange, handleSubmit } = props;
    return (
        <div className="form-container">
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <TextField margin="normal" name="make" label="Make" fullWidth
                    onChange={handleChange}
                    onBlur={handleChange}
                    value={state.make}
                    error={Boolean(state.validateErrors.make)}
                    helperText={state.validateErrors.make}
                />
                <TextField margin="normal" name="model" label="Model" fullWidth
                    onChange={handleChange}
                    onBlur={handleChange}
                    value={state.model}
                    error={Boolean(state.validateErrors.model)}
                    helperText={state.validateErrors.model}
                />
                <TextField margin="normal" name="price" label="Price" fullWidth
                    onChange={handleChange}
                    onBlur={handleChange}
                    value={state.price}
                    error={Boolean(state.validateErrors.price)}
                    helperText={state.validateErrors.price}
                />
                <Button color="primary" type="submit">OK</Button>
                <Button color="secondary" type="button" onClick={handleCancel}>Cancel</Button>
            </form>
        </div>
    );
};

export default ActionForm;