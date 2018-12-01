import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
const axios = require('axios');

const Basic = ({ user, updateUser, onClose }) => {
	const handleSubmit = async (values, { setSubmitFinished }) => {
		try {
			await onSubmit(values.email);
			setSubmitFinished(); // isSubmitting = false, errors = {}
		} catch (errors) {
			setSubmitFinished(errors); // isSubmitting = false, errors = {...errors}
		}
	};

	const onSubmit = async email => {
		console.log('going to fetch');
		let response;
		try {
			response = await axios({
				method: 'post',
				url: 'https://l96yqm590l.sse.codesandbox.io/email/',
				data: {
					email,
				},
			});
		} catch (error) {
			console.log(error);
		}
		console.log('success');
		console.log('response: ', response.data);
	};
	return (
		<div>
			<h1>Edit User</h1>
			<Formik
				initialValues={user /** { email, social } */}
				onSubmit={
					this.handleSubmit
					// await (values, actions) => {
					// try{

					// }catch (e){
					//       actions.setSubmitting(false);
					//       actions.setErrors(transformMyRestApiErrorsToAnObject(error));
					//       actions.setStatus({ msg: 'Set some arbitrary status or data' });
					// }
					//   MyImaginaryRestApiCall(user.id, values).then(
					//     updatedUser => {
					//       actions.setSubmitting(false);
					//       updateUser(updatedUser);
					//       onClose();
					//     },
					//     error => {
					//     }
					//   );
				}
				render={({ errors, status, touched, isSubmitting }) => (
					<Form>
						<Field type="email" name="email" />
						<ErrorMessage name="email" component="div" />
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			/>
		</div>
	);
};

export default Basic;
