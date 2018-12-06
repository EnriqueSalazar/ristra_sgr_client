import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import Results from './Results';

// import './styles.css';
import 'typeface-roboto';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class App extends React.Component {
	state = {
    value: 0,
  };
	handleChange = (event, value) => {
    this.setState({ value });
  };
	render() {
		const { value } = this.state;
		return (
			<div>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Questionario" />
            <Tab label="Resultados" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Form /></TabContainer>}
        {value === 1 && <TabContainer><Results /></TabContainer>}
      </div>
		/*	// <div className="App">
			// 	<Basic />
			// </div>*/
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
