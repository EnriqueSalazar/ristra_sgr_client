import React from 'react';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Radio from '@material-ui/core/Radio';
import axios from 'axios';
import { radioOptions, inputEntries, inputRadio } from '../config/vehiculos';
import { RadioButton } from '../components/RadioButton';

const Form = () => {
  // const validate = (values) => {
  //   let errors = {};
  //       if (!values.email) {
  //         errors.email = 'Required';
  //       } else if (
  //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  //       ) {
  //         errors.email = 'Invalid email address';
  //       }
  //       return errors;
  // }

  const onSubmit = async (values, { setSubmitting }) => {
    let response;
    const url = 'https://ristra-sgr-server-enriquesalazar.c9users.io/ipv/';
    try {
      response = await axios.post(url, values);
    } catch (error) {
      console.dir(error);
    }
    setSubmitting(false);
  };

  // const initialValues = {
  //   ciudad: '',
  //   area_proyecto: ''
  // };

  const renderTextInput = (id, label, props) => {
    const { errors, touched, handleChange, handleBlur } = props;
    return (
      <TextField
        key={`${id}_textfield`}
        type="string"
        error={errors[id] && touched[id] && errors[id]}
        name={id}
        id={id}
        label={label}
        onChange={handleChange}
        onBlur={handleBlur}
        // value={values[id]}
        margin="normal"
        variant="outlined"
        color="primary"
        helperText={errors[id] && touched[id] && errors[id]}
      />
    );
  };

  // const renderRadio = (radio, props) => {
  //   const { id, label, criterio, descripcion, items } = radio;
  //   const { errors, touched, handleChange, handleBlur, values } = props;
  //   const obs = `${id}_obs`;
  //   if (id) {
  //     return (
  //       <div key={`${id}_radio`}>
  //         {label && descripcion && <h3>{label}</h3>}
  //         {label && !descripcion && <div>{label}</div>}
  //         {descripcion && <h4>{descripcion}</h4>}
  //         {radioOptions.map((option, i) => (
  //           <span key={`${id}_${option}_${i}`}>
  //             <Radio
  //               checked={values[id] === option}
  //               onChange={handleChange}
  //               value={option}
  //               name={id}
  //             />
  //             {option}
  //           </span>
  //         ))}
  //         <TextField
  //           fullWidth
  //           key={obs}
  //           type="string"
  //           error={errors[obs] && touched[obs] && errors[obs]}
  //           name={obs}
  //           id={obs}
  //           label={'Observaciones'}
  //           onChange={handleChange}
  //           onBlur={handleBlur}
  //           // value={values[obs]}
  //           margin="normal"
  //           variant="outlined"
  //           color="primary"
  //           helperText={errors[id] && touched[id] && errors[id]}
  //         />
  //       </div>
  //     );
  //   } else if (items) {
  //     return (
  //       <div key={`${criterio}_radio_group`} id="radio_group">
  //         {criterio && <h3>{criterio}</h3>}
  //         {descripcion && <h4>{descripcion}</h4>}
  //         {items.map(radio => (
  //           <RadioButton radio={radio} radioOptions={radioOptions} {...props} />
  //         ))}
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <div>
      <h1>INSPECCIÓN PREOPERACIONAL DE VEHÍCULOS </h1>
      <Formik
        /*initialValues={initialValues}*/
        /* validate={validate} */
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {props => {
          const {
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              {inputEntries.map(entry =>
                renderTextInput(entry.id, entry.label, props),
              )}
              <h2>DESARROLLO DE LA INSPECCIÓN</h2>

              {inputRadio.map(radio => (
                <RadioButton
                  radio={radio}
                  radioOptions={radioOptions}
                  {...props}
                />
              ))}
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                color="primary"
              >
                Enviar
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;

// {<Switch
//           checked={values.robot}
//     onChange={handleChange}
//             onBlur={handleBlur}
//     value="checkedA"
// 		  name="robot"
// 		  color="primary"
//         />}
