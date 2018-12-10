import React from 'react';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { radioOptions, inputEntries, inputRadio } from '../config/vehiculos';
import { RadioComponent } from '../components/RadioComponent';
import { TextInputComponent } from '../components/TextInputComponent';

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
    const url = 'https://ristra-sgr-server-enriquesalazar.c9users.io/ipv/';
    try {
      await axios.post(url, values);
    } catch (error) {
      console.dir(error);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h1>INSPECCIÓN PREOPERACIONAL DE VEHÍCULOS </h1>
      <Formik
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
              {inputEntries.map((entry, i) =>
              <TextInputComponent key={i} {...props} id={entry.id} label={entry.label}/>
              )}
              <h2>DESARROLLO DE LA INSPECCIÓN</h2>

              {inputRadio.map((radio, i) => {
              return (
                <RadioComponent
                  key={i}
                  radio={radio}
                  radioOptions={radioOptions}
                  {...props}
                />
              )})}
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
