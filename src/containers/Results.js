import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { inputEntries, inputRadio } from '../config/vehiculos';
import { ResultDato } from '../components/ResultDato';
import { ResultRadio } from '../components/ResultRadio';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class Results extends React.Component {

  state = { results: [] };

  componentDidMount = () => {
    this.getData();
  }

  getData = async() => {
    let response;
    const url = 'https://ristra-sgr-server-enriquesalazar.c9users.io/ipv/';
    try {
      response = await axios.get(url);
    }
    catch (error) {}
    this.setState({ results: response.data });
  }

  render() {
    const { classes } = this.props;
    const { results } = this.state;
    return (
      <div className={classes.root}>
        {results.map((result, i) => <ExpansionPanel key={i}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.container}>
            {inputEntries.map((entry, i) =>  (result[entry.id] && 
              <ResultDato {...this.props} label={entry.label} value={result[entry.id]}/>)
            )}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.container}>
            {inputRadio.map((radio, i) => (<ResultRadio result={result} radio={radio}/>))}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>)}
    </div>
    )
  };
}

export default withStyles(styles)(Results);
