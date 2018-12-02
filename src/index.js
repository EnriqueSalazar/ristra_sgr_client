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
			 let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
			axios.post(
				'https://ristra-sgr-server-enriquesalazar.c9users.io/',
			).then(response =>{
				console.log('response:', response);
			}).catch(error => {
				console.log('error:', error);
			});
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
