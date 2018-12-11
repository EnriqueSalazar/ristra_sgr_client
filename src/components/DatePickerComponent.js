import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 210
  }
});

const DatePickerComponentWithoutStyles = props => {
  const {
    id,
    label,
    errors,
    touched,
    handleChange,
    handleBlur,
    classes
  } = props;
  return (
    <TextField
      type="date"
      InputLabelProps={{
        shrink: true
      }}
      className={classes.formControl}
      key={`${id}_textfield`}
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
    />
  );
};

export const DatePickerComponent = withStyles(styles)(
  DatePickerComponentWithoutStyles
);
