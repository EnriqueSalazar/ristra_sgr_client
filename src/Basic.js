import React from 'react';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import axios from 'axios';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: 'e@e.com', robot: true}}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
		  console.log(values);
		  let response;
		const url= 'https://ristra-sgr-server-enriquesalazar.c9users.io/data/';
		try {
			response = await axios.post( url, values);
		} catch (error) {
			console.dir(error);
		}
		console.log(response);
          setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
		<TextField
            type="email"

		error={errors.email && touched.email && errors.email}
          name="email"
		  id="outlined-name"
          label="Email"
     onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          margin="normal"
          variant="outlined"
		  color="primary"
		            helperText={errors.email && touched.email && errors.email}
        />
	<Switch
          checked={values.robot}
    onChange={handleChange}
            onBlur={handleBlur}          value="checkedA"
		  name="robot"
		  color="primary"
        />
         <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
			Hello World
		</Button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
