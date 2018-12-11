import React from 'react';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 210
  }
});

const SelectComponentWithoutStyles = props => {
  const {
    id,
    label,
    errors,
    touched,
    handleChange,
    handleBlur,
    select,
    classes
  } = props;
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor={id}>{label}</InputLabel>

      <Select
        error={errors[id] && touched[id] && errors[id]}
        onChange={handleChange}
        onBlur={handleBlur}
        margin="normal"
        // variant="outlined"
        color="primary"
        id={id}
        input={<OutlinedInput name={id} labelWidth={200} id={id} />}
      >
        <MenuItem value="" />
        {select.map((opt, i) => (
          <MenuItem key={i} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const SelectComponent = withStyles(styles)(SelectComponentWithoutStyles);
