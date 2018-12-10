import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },
});

const ResultRadioElement = props=> {
        const { radio, result } = props;
    const { id, label } = radio;
return (result[id] && <Tooltip key={`${id}_radio`} title={result[id+'_obs']} placement="top">
          <TextField
            disabled
            label={label}
            value={result[id]}
            margin="normal"
            variant="outlined"
            color="primary"
          />
        </Tooltip>)
}

const ResultRadioWithoutStyles = props => {
    const { radio, classes } = props;

    const { id, criterio, items } = radio;
    if (id) {
      return (<div className={classes.container}><ResultRadioElement {...props} /></div>)
    }
      return (
        <div key={`${criterio}_radio_group`} id="radio_group"  className={classes.container}>
        {criterio && <div style={{width: '100%'}}>{criterio}</div>}
        {items.map(radio => <ResultRadioElement {...props} radio={radio}/>)}
        <Divider />
      </div>
      )
}

export const ResultRadio = withStyles(styles)(ResultRadioWithoutStyles);
