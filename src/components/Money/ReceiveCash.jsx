import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import useStyles from './ReceiveCash.style';


const ReceiveCash = (() => {
    const classes = useStyles();

    return (

            <Grid item className={classes.rowKeypad}>
                <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
    );
});

export default ReceiveCash;
