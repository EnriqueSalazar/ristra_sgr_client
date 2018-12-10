import React from 'react';
import TextField from '@material-ui/core/TextField';

export const TextInputComponent = props => {
    const { id, label, errors, touched, handleChange, handleBlur } = props;
    return (<TextField
        key={`${id}_textfield`}
        type="string"
        error={errors[id] && touched[id] && errors[id]}
        name={id}
        id={id}
        label={label}
        onChange={handleChange}
        onBlur={handleBlur}
        margin="normal"
        variant="outlined"
        color="primary"
        helperText={errors[id] && touched[id] && errors[id]}
      />)
}