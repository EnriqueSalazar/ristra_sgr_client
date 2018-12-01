import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Basic from './Basic';

import './styles.css';
import 'typeface-roboto';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
	}
	onClick = () => {
		// console.log('going to fetch');
		// this.setState({ isSending: true });
		// let response;
			// axios.post(
			// 	'https://postman-echo.com/post',
			// 	{hola: 'mundo'}
			// ).then(response =>{
			// 	console.log('response:', response);
			// }).catch(error => {
			// 	console.log('error:', error);
			// });
			 let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
			axios.post(
				// 'https://postman-echo.com/get?foo1=bar1&foo2=bar2',
				'https://ristra-sgr-server-enriquesalazar.c9users.io/',
				// axiosConfig
			).then(response =>{
				console.log('response:', response);
			}).catch(error => {
				console.log('error:', error);
			});
		// try {
		// 	// response = await axios({
		// 	// 	method: 'post',
		// 	// 	url: 'https://postman-echo.com/post',
		// 	// 	data: {
		// 	// 		number: this.state.number,
		// 	// 	},
		// 	// 	headers: {
		// 	// 		'Content-Type': 'application/json'
		// 	// 	}
		// 	// });
		// } catch (error) {
		// 	console.log(error);
		// 	// util.inspect(error);
		// }
		// this.setState({ number: response.data });
		// console.log('success');
		// console.log(response);
		// this.setState({ isSending: false });
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.onClick}> button </button>
				<h1>
					Hello, {this.state.number} {this.props.name}
				</h1>
				<Basic />
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
