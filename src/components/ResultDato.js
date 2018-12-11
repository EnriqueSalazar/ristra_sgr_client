import React from 'react';
import TextField from '@material-ui/core/TextField';

export const ResultDato = props => (
  <TextField
    {...props}
    disabled
    margin="normal"
    variant="outlined"
    color="primary"
  />
);
