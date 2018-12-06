import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import {inputEntries, inputRadio} from './Form';
const styles = theme => ({
  // root: {
  //   // display: 'flex',
  //   // justifyContent: 'center',
  //   // flexWrap: 'wrap',
  //   width: '100%',
  // },
  // chip: {
  //   margin: theme.spacing.unit,
  // },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  // heading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   fontWeight: theme.typography.fontWeightRegular,
  // },
});

class Results extends React.Component {

state={results: []};

componentDidMount = () => {
  this.getData();
}
getData = async () => {
  let response;
  const url= 'https://ristra-sgr-server-enriquesalazar.c9users.io/ipv/';
  try {
    response = await axios.get(url);
  } catch (error) {
  }
  this.setState({results: response.data});
}

renderDatos = (result) => {
  const { classes } = this.props;
  return inputEntries.map((entry, i) => {
    return  result[entry.id] && <TextField
      disabled
      key={i}
      className={classes.textInput}
      label={entry.label}
      value={result[entry.id]}
      margin="normal"
      variant="outlined"
      color="primary"
    />
  })
}

renderRadio = (radio, result) => {
    const { classes } = this.props;

  console.log(radio);
  const { id, label, criterio, items } = radio;
  if (id){
    return (
      <div key={`${id}_radio`}>
        <Tooltip title={result[id+'_obs']} placement="top">
          <TextField
            disabled
            className={classes.textInput}
            label={label}
            value={result[id]}
            margin="normal"
            variant="outlined"
            color="primary"
          />
        </Tooltip>
      </div>
    )
  } else if (items){
    return (
      <div key={`${criterio}_radio_group`} id="radio_group"  className={classes.container}>
        {criterio && <div style={{width: '100%'}}>{criterio}</div>}
        {items.map(radio => this.renderRadio(radio, result))}
        <Divider />
      </div>
    )
  }
  return null;
}

renderDesarrollo = (result) => {
  return (
    <div>
      {inputRadio.map((radio, i) => {
        return this.renderRadio(radio, result)
      })}
    </div>
  )
  
}
render(){
  const { classes } = this.props;
  const { results } = this.state;
  return(
    <div className={classes.root}>
    {results.map((result, i) => <ExpansionPanel key={i}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.container}>
            {this.renderDatos(result)}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.container}>
            {this.renderDesarrollo(result)}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>)}

   
    </div>
  )};
}

export default withStyles(styles)(Results);