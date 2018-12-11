import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';

const RadioElement = props => {
  const { radio, radioOptions } = props;
  const { id, label, descripcion } = radio;
  const { errors, touched, handleChange, handleBlur, values } = props;
  const obs = `${id}_obs`;
  return (
    <div>
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
        margin="normal"
        variant="outlined"
        color="primary"
        helperText={errors[id] && touched[id] && errors[id]}
      />
    </div>
  );
};

export const RadioComponent = props => {
  const { radio } = props;
  const { id, criterio, descripcion, items } = radio;
  if (id) {
    return <RadioElement {...props} />;
  }
  return (
    <div key={`${criterio}_radio_group`} id="radio_group">
      {criterio && <h3>{criterio}</h3>}
      {descripcion && <h4>{descripcion}</h4>}
      {items.map((item, i) => (
        <RadioElement key={`${i}_radio`} {...props} radio={item} />
      ))}
    </div>
  );
};
