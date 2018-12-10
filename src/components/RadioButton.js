import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';

const recurse = (radio, props) => <RadioButton radio={radio} {...props} />;

export const RadioButton = props => {
  const { radio, radioOptions } = props;
  const { id, label, criterio, descripcion, items } = radio;
  const { errors, touched, handleChange, handleBlur, values } = props;
  const obs = `${id}_obs`;
  if (id) {
    return (
      <div key={`${id}_radio`}>
        {label && descripcion && <h3>{label}</h3>}
        {label && !descripcion && <div>{label}</div>}
        {descripcion && <h4>{descripcion}</h4>}
        {radioOptions.map((option, i) => (
          <span key={`${id}_${option}_${i}`}>
            <Radio
              checked={values[id] === option}
              onChange={handleChange}
              value={option}
              name={id}
            />
            {option}
          </span>
        ))}
        <TextField
          fullWidth
          key={obs}
          type="string"
          error={errors[obs] && touched[obs] && errors[obs]}
          name={obs}
          id={obs}
          label={'Observaciones'}
          onChange={handleChange}
          onBlur={handleBlur}
          // value={values[obs]}
          margin="normal"
          variant="outlined"
          color="primary"
          helperText={errors[id] && touched[id] && errors[id]}
        />
      </div>
    );
  } else if (items) {
    return (
      <div key={`${criterio}_radio_group`} id="radio_group">
        {criterio && <h3>{criterio}</h3>}
        {descripcion && <h4>{descripcion}</h4>}
        {items.map(radio => recurse(radio, props))}
      </div>
    );
  }
  return null;
};
